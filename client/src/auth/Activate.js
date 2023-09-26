import React, { useState, useEffect } from "react";
import logobg2 from "../images/logobg2.png";
import activate from "../images/Activate.png";
import { navigate, useNavigate } from "react-router-dom";
import { NavLink, Navigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Activate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Activate = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    token: useParams(),
    show: true,
  });

  const { token } = useParams();
  useEffect(() => {
    console.log("hbfjhe");

    // let token = useParams();
    // console.log(token);
    // let { name } = jwt.decode(token);
    // //   console.log(token);
    // if (token) {
    //   setValues({ ...values, name, token });
    // }
  }, []);

  // useEffect(() => {
  //   // console.log("hbfjhe");
  //   let token = match.params.token;
  //   console.log(token);
  // }, []);

  const { name, show } = values;
  const navigate = useNavigate();

  const clickSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/account-activation`,
      data: { token },
    })
      .then((response) => {
        console.log("Account Activation", response);
        setValues({
          ...values,
          show: false,
        });
        toast.success(response.data.message);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Account Activation Error", error.response.data.error);
        toast.error(error.response.data.error);
      });
  };

  const activationLink = () => (
    <div className="bodyactivate">
      <div className="text-center">
        <NavLink className="navbar-brand" to="/">
          <img className="logoactivate" src={logobg2} alt="" />
        </NavLink>
      </div>

      <div className="container">
        <div className=" row w-100  d-flex justify-content-center align-items-center main_div">
          <div className="col-12 col-lg-6 col-md-8 col-xxl-4">
            <div className="cardActivation py-5 px-2">
              <p className="activateTitle text-center my-4 text-capitalize ">
                <span>Account Activated</span>
              </p>
              <div className="text-center activateImg">
                <img src={activate} alt="" />
              </div>

              <div className="division">
                <div className="row">
                  <div className="col-10 mx-auto  ">
                    <span className="main-heading">Hello{name},</span>
                    <br />
                    <br />
                    <span className="main-subheading ">
                      Thank You, Your Email has been verified. Your account is
                      now active. Please use the link below to login to your
                      account.
                    </span>
                  </div>
                </div>
                <div className="activatebtn my-5 col-12 text-center">
                  <button
                    type="button"
                    className="btn btn-block btn-primary btn-lg"
                    name="login"
                    value="Login"
                    onClick={clickSubmit}
                  >
                    Activate Account and Login
                  </button>
                </div>
                <div className="col-10 mx-auto  ">
                  <span className="main-subheading">Thank You ,</span>
                  <br />

                  <span className="main-subheading ">
                    Safety Management Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ToastContainer />
      {activationLink()}
    </>
  );
};

export default Activate;
