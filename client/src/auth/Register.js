import React, { useState } from "react";
import "../styles/adminlogin.css";
import reg5 from "../images/reg5.png";
import logobg from "../images/logobg.png";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    cpassword: "",
    buttonText: "Register",
  });

  const { name, email, phone, address, password, cpassword, buttonText } =
    values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/register`,
      data: { name, email, phone, address, password, cpassword },
    })
      .then((response) => {
        console.log("Registration Sucessful", response);
        setValues({
          ...values,
          name: "",
          email: "",
          phone: "",
          address: "",
          password: "",
          cpassword: "",
          buttonText: "Registered",
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("Registration Error", error.response.data);
        setValues({ ...values, buttonText: "Register" });
        toast.error(error.response.data.error);
      });
  };

  // const registerForm = () => {};

  return (
    <>
      <ToastContainer />
      <div className="bodyreg">
        <NavLink className="navbar-brand" to="/">
          <img className="logobg" src={logobg} alt="" />
        </NavLink>
        <section className="register py-5 ">
          <div className="col-10 mx-auto">
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-5">
                  <img src={reg5} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-7 ">
                  <h1>Registration</h1>
                  <span className="main-heading ">Register Your account</span>

                  <form method="POST" className="myform">
                    <div class="form-floating mb-5 col-sm-11 align-items-center">
                      <i class="icon fa-solid fa-user fa-lg"></i>{" "}
                      <input
                        type="text"
                        name="name"
                        class="form-control "
                        id="floatingInput"
                        placeholder="name"
                        autoComplete="off"
                        onChange={handleChange("name")}
                        value={name}
                        // onChange={handleInputs}
                      />
                      <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-5 col-sm-11 align-items-center">
                      <i class="icon fa-regular fa-envelope fa-lg"></i>{" "}
                      <input
                        type="text"
                        name="email"
                        class="form-control "
                        id="floatingInput"
                        placeholder="name"
                        autoComplete="off"
                        value={email}
                        onChange={handleChange("email")}
                      />
                      <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-5 col-sm-11 align-items-center">
                      <i class="icon fa-solid fa-phone fa-lg"></i>{" "}
                      <input
                        type="text"
                        name="phone"
                        class="form-control "
                        id="floatingInput"
                        placeholder="name"
                        autoComplete="off"
                        value={phone}
                        onChange={handleChange("phone")}
                      />
                      <label for="floatingInput">Phone</label>
                    </div>
                    <div class="form-floating mb-5 col-sm-11 align-items-center">
                      <i class="icon fa-solid fa-location-dot fa-lg"></i>{" "}
                      <input
                        type="text"
                        name="address"
                        class="form-control "
                        id="floatingInput"
                        placeholder="name"
                        autoComplete="off"
                        value={address}
                        onChange={handleChange("address")}
                      />
                      <label for="floatingInput">Address</label>
                    </div>

                    <div class="form-floating mb-5 col-sm-11 align-items-center">
                      <i class="icon fa-solid fa-key fa-lg"></i>
                      <input
                        type="password"
                        name="password"
                        class="form-control "
                        id="floatingPassword"
                        placeholder="Password"
                        autoComplete="off"
                        value={password}
                        onChange={handleChange("password")}
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating mb-5 col-sm-11 align-items-center">
                      <i class="icon fa-solid fa-lock fa-lg"></i>
                      <input
                        type="password"
                        name="cpassword"
                        class="form-control "
                        id="floatingPassword"
                        placeholder="Password"
                        autoComplete="off"
                        value={cpassword}
                        onChange={handleChange("cpassword")}
                      />
                      <label for="floatingPassword">Confirm Password</label>
                    </div>

                    <div className="loginbtn my-3 col-6 ">
                      <button
                        type="button"
                        className="btn btn-block btn-primary btn-lg "
                        name="register"
                        value="register"
                        onClick={clickSubmit}
                      >
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

export default Register;
