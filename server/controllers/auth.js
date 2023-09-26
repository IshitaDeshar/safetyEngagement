// Import required modules and models
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const Report = require("../models/Reports");

// Set up SendGrid API key
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const_ = require("lodash");

// Register a new user
exports.register = async (req, res) => {
  const { name, email, phone, address, password, cpassword } = req.body;

  try {
    const user = await User.findOne({ email }).exec();
    if (user) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }

    const token = jwt.sign(
      { name, email, phone, address, password, cpassword },
      process.env.JWT_ACCOUNT_ACTIVATION,
      { expiresIn: "1hour" }
    );

    // Set up email data to send to user for activation
    const emailData = {
      from: process.env.EMAIL_TO,
      to: email,
      subject: `Account activation link`,
      html: `
                  <h1>Please use the following link to activate your account</h1>
                  <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
                  <hr/>
                  <p>This email may contain sensetive information</p>
                  <p>${process.env.CLIENT_URL}</p>
                  `,
    };

    const sent = await sgMail.send(emailData);

    // console.log("Registration email sent", sent);

    return res.json({
      message: `Email has been sent to ${email}. Follow the instruction to activate your account`,
    });
  } catch (err) {
    console.log("Registration Email Error", err);
    return res.status(400).json({
      error: err.message,
    });
  }
};

// Activate user account with the given token
exports.accountActivation = async (req, res) => {
  const { token } = req.body;
  if (token) {
    try {
      const decoded = await jwt.verify(
        token,
        process.env.JWT_ACCOUNT_ACTIVATION
      );
      console.log(decoded);
      const { name, email, phone, address, password, cpassword } =
        jwt.decode(token);

      const user = new User({
        name,
        email,
        phone,
        address,
        password,
        cpassword,
      });

      // const savedUser = await user.save();
      return res.json({
        message: "Registration success. Please login.",
      });
    } catch (err) {
      console.log("jwt verify in account activation error", err);
      return res.status(401).json({
        error: "expired link Signup again",
      });
    }
  } else {
    return res.json({
      message: "Something went wrong. Try again.",
    });
  }
};
// exports.accountActivation = async (req, res) => {
//   const { token } = req.body;
//   if (token) {
//     try {
//       const decoded = await jwt.verify(
//         token,
//         process.env.JWT_ACCOUNT_ACTIVATION
//       );
//       const { name, email, phone, address, password, cpassword } =
//         jwt.decode(token);

//       const user = new User({
//         name,
//         email,
//         phone,
//         address,
//         password,
//         cpassword,
//       });

//       // const savedUser = await user.save();
//       // return res.json({
//       //   message: "Registration success. Please login.",
//       // });
//       user.save((err, savedUser) => {
//         if (err) {
//           console.log("save user in account activation error", err);
//           return res.status(401).json({
//             error: "error saving user in database. Try register again",
//           });
//         }
//         return res.json({
//           message: "Registration success. Please login.",
//         });
//       });
//     } catch (err) {
//       console.log("jwt verify in account activation error", err);
//       return res.status(401).json({
//         error: "expired link Signup again",
//       });
//     }
//   } else {
//     return res.json({
//       message: "Something went wrong. Try again.",
//     });
//   }
// };

exports.accountActivation = async (req, res) => {
  const { token } = req.body;
  if (token) {
    try {
      const decoded = await jwt.verify(
        token,
        process.env.JWT_ACCOUNT_ACTIVATION
      );
      const { name, email, phone, address, password, cpassword } =
        jwt.decode(token);

      const user = new User({
        name,
        email,
        phone,
        address,
        password,
        cpassword,
      });

      const savedUser = await user.save();
      return res.json({
        message: "Registration sucess. Please login ",
      });
    } catch (err) {
      console.log("jwt verify in account activation error", err);
      return res.status(401).json({
        error: "expired link Signup again",
      });
    }
  } else {
    return res.json({
      message: "Something went wrong. Try again ",
    });
  }
};

// This function handles user login
exports.login = (req, res) => {
  const { email, password } = req.body;
  //check if user exist
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          error: "User with that email does not exist. Please Register",
        });
      }
      //authenticate
      if (!user.authenticate(password)) {
        return res.status(400).json({
          error: "Email and password doesnot match",
        });
      }
      //genenrate a token and send to client
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "10d",
      });
      const { _id, name, email, role } = user;
      return res.json({
        token,
        user: { _id, name, email, role },
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: "Something went wrong",
      });
    });
};

// This function checks if user is logged in
exports.requireLogin = expressJwt({
  secret: process.env.JWT_SECRET, //req.user._id
  algorithms: ["HS256"],
});

// This function checks if user is an admin
exports.adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    if (user.role !== "admin") {
      return res.status(400).json({
        error: "Admin resource, Access Denied",
      });
    }

    req.profile = user;
    next();
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

// This function gets all user data
exports.getData = async (req, res, next) => {
  try {
    const userData = await User.find();
    res.status(201).json(userData);
    console.log(userData);
  } catch (error) {
    res.statuss(404).json(error);
  }
};

// This function gets user by id
exports.getUserId = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(400).json({ message: "No user found" });
  }
  return res.status(200).json({ user });
};

// This function gets all users
exports.getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find({});
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "no reports fornd" });
  }
  return res.status(200).json({ users });
};

// Update user data by ID
exports.updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, phone, address, password, cpassword } = req.body;
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      name,
      email,
      phone,
      address,
      password,
      cpassword,
    });
    user = await user.save();
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(400).json({ message: "Unable to update by this Id" });
  }
  return res.status(200).json({ user });
};

// Delete user data by ID
exports.DeleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(400).json({ message: "Unable to Delete by this Id" });
  }
  return res.status(200).json({ message: "User sucessfully Deleted" });
};

// Forgot password functionality
exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          error: "User with that email does not exist",
        });
      }
      const token = jwt.sign(
        { _id: user._id },
        process.env.JWT_RESET_PASSWORD,
        {
          expiresIn: "1hour",
        }
      );

      const emailData = {
        from: process.env.EMAIL_TO,
        to: email,
        subject: "Password Reset link",
        html: `
          <h1>Please use the following link to reset your password</h1>
          <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
          <hr/>
          <p>This email may contain sensetive information</p>
          <p>${process.env.CLIENT_URL}</p>
        `,
      };
      user
        .updateOne({ resetPasswordLink: token })
        .then((success) => {
          sgMail
            .send(emailData)
            .then(() => {
              return res.json({
                message: `Email has been sent to ${email}. Follow the instruction to reset your password`,
              });
            })
            .catch((err) => {
              console.log("Registration Email Error", err);
              return res.status(400).json({
                error: err.message,
              });
            });
        })
        .catch((err) => {
          console.log("Reset Password link error", err);
          return res.status(400).json({
            error: "Database connection error on user password forgot request",
          });
        });
    })
    .catch((err) => {
      console.log("User find error", err);
      return res.status(400).json({
        error: "User find error on password forgot request",
      });
    });
};

// Reset password functionality
exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;
  if (resetPasswordLink) {
    jwt.verify(
      resetPasswordLink,
      process.env.JWT_RESET_PASSWORD,
      async function (err, decoded) {
        if (err) {
          return res.status(400).json({
            error: "Expired Link.Try again",
          });
        }
        try {
          const user = await User.findOne({ resetPasswordLink });
          if (!user) {
            return res.status(400).json({
              error: "Something went wrong.Try Later",
            });
          }
          const updatedFields = {
            password: newPassword,
            resetPasswordLink: "",
          };
          Object.assign(user, updatedFields);

          await user.save();

          res.json({
            message: "Now you can login with your new password",
          });
        } catch (err) {
          console.error(err);
          res.status(400).json({
            error: "Error resetting user password",
          });
        }
      }
    );
  }
};

exports.assignResponsibility = async (req, res) => {
  const id = req.params.id;

  const {
    typeofIncident,
    actDescription,
    reportedDateTime,
    location,
    reportedBy,
    severityCondition,
    status,
    photo,
    // id,
  } = req.body;

  // const report = await Report.create(req.body);
  // res.status(StatusCodes.CREATED).json({ report });
  // const reportIndividual = await Report.findById({ _id });
  const report = await Report.findById(id);

  const { email, assignMessage } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          error: "User with that email does not exist",
        });
      }
      const token = jwt.sign(
        { _id: user._id, name: user.name },
        process.env.JWT_RESET_PASSWORD,
        {
          expiresIn: "1hour",
        }
      );
      const emailData = {
        from: process.env.EMAIL_TO,
        to: email,
        subject: "Assign Responsibility",
        html: `
        <h2>${assignMessage}</h2>
        <div style="width:100%; height: 100%; background-color:white; padding:6rem 0">
        <div style="max-width:850px; height:90rem; background-color:#EBF4EF; margin:0 auto">
            <div style="width:100%;height:13rem; background-color:#114729; padding:27px 0">
               
                <p style="font-size: 1rem; color: white;text-align: center;">${typeofIncident} reported by ${reportedBy} on ${reportedDateTime}</p>
                <div style="text-align:center;">

                <button style="width: 12rem;margin: 1rem; height: 2.5rem; border-radius: 2rem; background-color: transparent;border: 1px solid white; color: white; font-size: 0.8rem;letter-spacing: 0.2rem;" >View Full Report</button>
                    </a>
                </div>
            </div>
            <div style="max-width:600px; background-color:white; margin:3rem auto; letter-spacing:0.1rem">
                <div style="width:100%; gap:10px; padding:30px 0; display:grid">
                    <p style="font-weight:600; font-size:2rem;padding:0rem 0rem; text-align: center;">${typeofIncident}</p>
                    <div style="font-size:1rem; margin:1rem 6rem;padding-bottom: 1rem;line-height: 1.5;"">
                    
                    <div style="margin-bottom: 2.3rem;">
                    <label  style=" font-weight: 600;font-size:1.1rem">
                     Type of Incident
                    </label>
                    <p style="margin-top: 0.8rem;">${typeofIncident}</p>
                  </div>
                <div style="margin-bottom: 2.3rem;">
                    <label  style=" font-weight: 600;font-size:1.1rem">
                        Act Description
                    </label>
                    <p  style="margin-top: 0.8rem;"> ${actDescription}</p>
                  </div>
                <div style="margin-bottom: 2.3rem;">
                    <label  style=" font-weight: 600;font-size:1.1rem">
                        Reported Date and Time
                    </label>
                    <p  style="margin-top: 0.8rem;"> ${reportedDateTime}</p>
                    </div>
                <div style="margin-bottom: 2.3rem;">
                    <label  style=" font-weight: 600;font-size:1.1rem">
                        Location
                    </label>
                    <p  style="margin-top: 0.8rem;"> ${location}</p>
                  </div>
                <div style="margin-bottom: 2.3rem;">
                    <label  style=" font-weight: 600;font-size:1.1rem">
                        Reported By
                    </label>
                    <p  style="margin-top: 0.8rem;"> ${reportedBy}</p>
                  </div>
                <div style="margin-bottom: 2.3rem;">
                    <label  style=" font-weight: 600;font-size:1.1rem">
                        Severity Condition
                    </label>
                    <p  style="margin-top: 0.8rem;">${severityCondition}</p>
                  </div>
                <div style="margin-bottom: 2.3rem;">
                    <label  style=" font-weight: 600;font-size:1.1rem">
                        Status
                    </label>
                    <p  style="margin-top: 0.8rem;">${status}</p>
                    </div>
                <div style="margin-bottom: 2.3rem;">
                    <label  style=" font-weight: 600;font-size:1.1rem">
                        Photo
                    </label>
                    <p  style="margin-top: 0.8rem;">${photo}</p>
                  </div>
                    </div>
                </div>
                <div style="text-align:center;">
                <button style="width: 13.5rem;height: 3rem;margin: 1rem; border-radius: 2rem; background-color: #114729;border: 1px solid white; color: white; font-size: 0.8rem;letter-spacing: 0.2rem;" >View Full Report <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            </div>
    
        </div>
    </div>
        `,
      };
      user
        .updateOne({ resetPasswordLink: token })
        .then((success) => {
          sgMail
            .send(emailData)
            .then(() => {
              return res.json({
                message: `Email has been sent to ${email}.`,
              });
            })
            .catch((err) => {
              console.log("Registration Email Error", err);
              return res.status(400).json({
                error: err.message,
              });
            });
        })
        .catch((err) => {
          console.log("Reset Password link error", err);
          return res.status(400).json({
            error: "Database connection error on user password forgot request",
          });
        });
    })
    .catch((err) => {
      console.log("User find error", err);
      return res.status(400).json({
        error: "User find error on password forgot request",
      });
    });
};

// exports.resetPassword = (req, res) => {
//   const { resetPasswordLink, newPassword } = req.body;
//   if (resetPasswordLink) {
//     jwt.verify(
//       resetPasswordLink,
//       process.env.JWT_RESET_PASSWORD,
//       async function (err, decoded) {
//         if (err) {
//           return res.status(400).json({
//             error: "Expired Link.Try again",
//           });
//         }
//         try {
//           const user = await User.findOne({ resetPasswordLink });
//           if (!user) {
//             return res.status(400).json({
//               error: "Invalid Link.Try again",
//             });
//           }
//           const updatedFields = {
//             password: newPassword,
//             resetPasswordLink: null,
//           };
//           Object.assign(user, updatedFields);
//           await user.save();
//           res.status(200).json({
//             message: "Password updated successfully",
//           });
//         } catch (err) {
//           console.log("reset password error", err);
//           res.status(400).json({
//             error: "Error resetting user password",
//           });
//         }
//       }
//     );
//   } else {
//     return res.status(400).json({
//       error: "No reset password link provided",
//     });
//   }
// };

// exports.register = (req, res) => {
//   const { name, email, phone, address, password, cpassword } = req.body;
//   User.findOne({ email }).exec((err, user) => {
//     if (user) {
//       return res.status(400).json({
//         error: "Email is taken",
//       });
//     }
//     const token = jwt.sign(
//       { name, email, phone, address, password, cpassword },
//       process.env.JWT_ACCOUNT_ACTIVATION,
//       { expiresIn: "10min" }
//     );
//     const emailData = {
//       from: process.env.EMAIL_FROM,
//       to: email,
//       subject: `Account activation link`,
//       html: `
//                 <h1>Please use the following link to activate your account</h1>
//                 <p>${process.env.CLIENT_URL}/auth/activate</p>
//                 <hr/>
//                 <p>This email may contain sensetive information</p>
//                 <p>${process.env.CLIENT_URL}</p>
//                 `,
//     };
//     sgMail.send(emailData).then((sent) => {
//       console.log("Registration email sent", sent);
//       return res.json({
//         message: ` Email has been sent to ${email}. Follow the instruction to activate your account`,
//       });
//     });
//   });
// };

// exports.accountActivation = (req, res) => {
//     const { token } = req.body;
//     if (token) {
//       jwt.verify(
//         token,
//         process.env.JWT_ACCOUNT_ACTIVATION,
//         function (err, decoded) {
//           if (err) {
//             console.log("jwt verify in account activation error", err);
//             return res.status(401).json({
//               error: "expired link Signup again",
//             });
//           }
//           const { name, email, phone, address, password, cpassword } =
//             jwt.decode(token);

//           const user = new User({
//             name,
//             email,
//             phone,
//             address,
//             password,
//             cpassword,
//           });
//           user.save((err, user) => {
//             if (err) {
//               console.log("save user in account activation error", err);
//               return res.status(401).json({
//                 error: "error saving user in database. Try register again",
//               });
//             }
//             return res.json({
//               message: "Registration sucess. Please login ",
//             });
//           });
//         }
//       );
//     } else {
//       return res.json({
//         message: "Something went wrong. Try again ",
//       });
//     }
//   };

// exports.login = (req, res) => {
//   const { email, password } = req.body;
//   //check if user exist
//   User.findOne({ email }).exec((err, user) => {
//     if (err || !user) {
//       return res.status(400).json({
//         error: "User with that email does not exist. Please Register",
//       });
//     }
//     //authenticate
//     if (!user.authenticate(password)) {
//       return res.status(400).json({
//         error: "Email and password doesnot match",
//       });
//     }
//     //genenrate a token and send to client
//     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "10d",
//     });
//     const { _id, name, email, role } = user;

//     return res.json({
//       token,
//       user: { _id, name, email, role },
//     });
//   });
// };
// exports.register = (req, res) => {
//   //   console.log("REQ BODY ON REGISTER", req.body);
//   const { name, email, phone, address, password, cpassword } = req.body;

//   User.findOne({ email }).exec((err, user) => {
//     if (user) {
//       return res.status(400).json({
//         error: "Email is taken",
//       });
//     }
//   });
//   let newUser = new User({ name, email, phone, address, password, cpassword });

//   newUser.save((err, sucess) => {
//     if (err) {
//       console.log("Registration Error", err);
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     res.json({
//       message: "Registration sucessful",
//     });
//   });
// };
