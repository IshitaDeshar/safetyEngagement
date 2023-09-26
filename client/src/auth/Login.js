import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logobg from "../images/logobg.png";
import log from "../images/log.png";
import axios from "axios";
import { authenticate, isAuth } from "./helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Login",
  });

  const { email, password, buttonText } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/login`,
      data: { email, password },
    })
      .then((response) => {
        console.log("Login Sucessful", response);

        //save the response (user, token) localstorage/cookie
        authenticate(response, () => {
          setValues({
            ...values,
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            cpassword: "",
            buttonText: "Logedin",
          });
          // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
          toast.success(`Hey ${response.data.user.name}, Welcome back!`, {
            autoClose: 2000,
          });

          isAuth() && isAuth().role === "admin"
            ? navigate("/admin/createUser")
            : navigate("/private");
        });
      })
      .catch((error) => {
        console.log("Login Error", error.response.data);
        setValues({ ...values, buttonText: "Login" });
        toast.error(error.response.data.error);
      });
  };

  return (
    <>
      <ToastContainer position="top-right" />
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
                  <img src={log} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-7 ">
                  <h1>Login</h1>

                  <span className="main-heading ">Login Into Your Account</span>

                  <form method="POST" className="myform">
                    <div class="form-floating mb-5 col-sm-11 align-items-center">
                      <i class="icon fa-solid fa-user fa-lg"></i>{" "}
                      <input
                        type="text"
                        class="form-control "
                        id="floatingInput"
                        placeholder="name"
                        autoComplete="off"
                        name="email"
                        value={email}
                        onChange={handleChange("email")}
                      />
                      <label for="floatingInput">UserName</label>
                    </div>

                    <div class="form-floating mb-5 col-sm-11 align-items-center">
                      <i class="icon fa-solid fa-lock fa-lg"></i>
                      <input
                        type="password"
                        class="form-control "
                        id="floatingPassword"
                        placeholder="Password"
                        autoComplete="off"
                        name="password"
                        value={password}
                        onChange={handleChange("password")}
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <NavLink to="/auth/password/forgot">
                      <div className=" col-md-8 col-12 bn ">
                        {/* Forgot your Password? */}
                        <a href="" className="pwlink">
                          &nbsp;Forgot Password?
                        </a>
                      </div>
                    </NavLink>

                    <div className="loginbtn my-3 col-6 ">
                      <button
                        type="button"
                        className="btn btn-block btn-primary btn-lg "
                        name="login"
                        value="Login"
                        onClick={clickSubmit}
                      >
                        Login
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

export default Login;
