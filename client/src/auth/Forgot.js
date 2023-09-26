import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logobg from "../images/logobg.png";
import password from "../images/Password.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Forgot = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    buttonText: "Submit",
  });

  const { email, buttonText } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API}/forgot-password`,
      data: { email },
    })
      .then((response) => {
        console.log("Forgot Password Sucessful", response);
        toast.success(response.data.message);
        setValues({ ...values, buttonText: "Requested" });
      })
      .catch((error) => {
        console.log("Forgot Password Error", error.response.data);
        toast.error(error.response.data.error);
        setValues({ ...values, buttonText: "Email Required" });
      });
  };

  return (
    <>
      <ToastContainer />
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
                  <h1>Forgot Password</h1>

                  <span className="main-heading ">
                    Enter Your Email Address
                  </span>

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

                    <div className="loginbtn my-3 col-6 ">
                      <button
                        type="button"
                        className="btn btn-block btn-primary btn-lg "
                        name="login"
                        value="Login"
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

export default Forgot;
