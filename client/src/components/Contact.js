import React, { useState } from "react";
import logobg from "../images/logobg.png";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";

const Contact = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginadmin = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Sucessful");
      history("/about");
    }
  };
  return (
    <div className="body">
      <img className="logobg" src={logobg} alt="" />
      <div className="container">
        <div className="  row w-100  d-flex justify-content-center align-items-center main_div">
          <div className="col-12 col-lg-6 col-md-8 col-xxl-4">
            <div className="card py-5 px-2">
              <p className="logintitle text-center my-4 text-capitalize ">
                <span>Login</span>
              </p>
              <div className="division">
                <div className="row">
                  <div className="col-6 mx-auto  ">
                    <span className="main-heading ">
                      Login Into Your Account
                    </span>
                  </div>
                </div>
                <form className="myform">
                  <div class="form-floating mb-5">
                    <i class="icon fa-solid fa-user fa-lg"></i>{" "}
                    <input
                      type="text"
                      class="form-control "
                      id="floatingInput"
                      placeholder="name"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Username</label>
                  </div>
                  <div class="form-floating mb-5">
                    <i class="icon fa-solid fa-lock fa-lg"></i>
                    <input
                      type="password"
                      class="form-control "
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className=" col-md-8 col-12 bn ">
                    {/* Forgot your Password? */}
                    <a href="" className="pwlink">
                      &nbsp;Forgot Password?
                    </a>
                  </div>
                  <div className="loginbtn my-3 col-6 ">
                    <button
                      type="button"
                      className="btn btn-block btn-primary btn-lg"
                      name="login"
                      value="Login"
                      onClick={loginadmin}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
