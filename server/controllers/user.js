const User = require("../models/user");

exports.read = (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          error: "User not found",
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: "Server error",
      });
    });
};

exports.update = (req, res) => {
  const { name, password, address, phone } = req.body;

  User.findOne({ _id: req.user._id })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          error: "User not found",
        });
      }
      if (!name) {
        return res.status(400).json({
          error: "Name is required",
        });
      } else {
        user.name = name;
      }
      if (!address) {
        return res.status(400).json({
          error: "Address is required",
        });
      } else {
        user.address = address;
      }
      if (!phone) {
        return res.status(400).json({
          error: "Phone is required",
        });
      } else {
        user.phone = phone;
      }
      if (password) {
        if (password.length < 6) {
          return res.status(400).json({
            error: "Password must be min 6 character long",
          });
        } else {
          user.password = password;
        }
      }
      return user.save();
    })
    .then((updatedUser) => {
      updatedUser.hashed_password = undefined;
      updatedUser.salt = undefined;
      res.json(updatedUser);
    })
    .catch((err) => {
      console.log("User Update Error", err);
      return res.status(400).json({
        error: "User update failed",
      });
    });
};
