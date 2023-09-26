import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "../styles/Login.css";
import logobg from "../images/logobg.png";
import log from "../images/log.png";
import axios from "axios";
import jwt from "jsonwebtoken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import password from "../images/Password.jpg";

const Reset = (match) => {
  const navigate = useNavigate();

  //props.match from react router dom
  const [values, setValues] = useState({
    name: "",
    token: useParams(),
    newPassword: "",
    buttonText: "Reset Password",
  });
  // console.log("values", values); // check the value of values

  // useEffect(() => {
  //   let token = match.params.token;
  //   let { name } = jwt.decode(token);
  //   if (token) {
  //     setValues({ ...values, name, token });
  //   }
  // }, []);

  useEffect(() => {
    if (match.params && match.params.token) {
      let token = match.params.token;
      let { name } = jwt.decode(token);
      if (token) {
        setValues({ ...values, name, token });
      }
    }
  }, []);

  // useEffect(() => {
  //   let token = match.params.token;
  //   let decodedToken = jwt.decode(token);
  //   console.log("decodedToken", decodedToken); // check the value of decodedToken
  //   if (token && decodedToken && decodedToken.name) {
  //     setValues({ ...values, name: decodedToken.name, token });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (match.params && match.params.token) {
  //     let token = match.params.token;
  //     let decodedToken = jwt.decode(token);
  //     console.log("decodedToken", decodedToken); // check the value of decodedToken
  //     if (token && decodedToken && decodedToken.name) {
  //       setValues({ ...values, name: decodedToken.name, token });
  //     }
  //   }
  // }, []);

  const { name, token, newPassword, buttonText } = values;

  const handleChange = (e) => {
    // console.log("hey");
    setValues({ ...values, newPassword: e.target.value });
  };

  const clickSubmit = (e) => {
    // console.log("clickSubmit called"); // add this line
    e.preventDefault();

    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "PUT",
      url: "http://localhost:5000/api/resetPassword",
      data: { newPassword, resetPasswordLink: token.token },
    })
      .then((response) => {
        console.log("Reset Password Sucessful", response);
        toast.success(response.data.message);
        setValues({ ...values, buttonText: "Done" });
      })
      .catch((error) => {
        console.log("Reset Password Error", error.response.data);
        toast.error(error.response.data.error);
        setValues({ ...values, buttonText: "Reset Password" });
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      });
    // .then((response) => {
    //   console.log("Reset Password Response", response); // check the response data
    //   console.log("Reset Password Message", response.data.message); // check the message
    //   toast.success(response.data.message);
    //   setValues({ ...values, buttonText: "Done" });
    //   console.log("Values after setValues", values); // check the values after updating state
    // })
    // .catch((error) => {
    //   console.log("Reset Password Error", error.response.data);
    //   toast.error(error.response.data.error);
    //   setValues({ ...values, buttonText: "Reset Password" });
    //   console.log("Values after setValues", values); // check the values after updating state
    // });
  };

  return (
    <>
      <ToastContainer />
      {/* {isAuth() ? <Navigate to="/userDashboard" /> : null} */}
      <div className="bodylog">
        <NavLink className="navbar-brand" to="/">
          <img className="logobg" src={logobg} alt="" />
        </NavLink>

        <section className="register py-5 ">
          <div className="col-10 mx-auto">
            <div className="container">
              <div className="row g-0">
                <div className=" leftside col-lg-5">
                  <img src={password} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-7 ">
                  <h1>{name} Enter your new Password</h1>

                  {/* <span className="main-heading ">
                    Enter Your Email Address
                  </span> */}

                  <form className="myform">
                    <div class="form-floating mb-5 col-sm-11 align-items-center">
                      <i class="icon fa-solid fa-lock fa-lg"></i>
                      <input
                        type="password"
                        class="form-control "
                        id="floatingPassword"
                        placeholder="Password"
                        autoComplete="off"
                        name="newPassword"
                        value={newPassword}
                        onChange={handleChange}
                        required
                      />
                      <label for="floatingPassword">New Password</label>
                    </div>

                    <div className="loginbtn my-3 col-6 ">
                      <button
                        type="button"
                        className="btn btn-block btn-primary btn-lg "
                        // name="login"
                        // value="Login"
                        onClick={clickSubmit}
                      >
                        {/* Submit */}
                        {buttonText}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reset;
