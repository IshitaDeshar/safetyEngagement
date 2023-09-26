import React, { useState } from "react";
import Wrapper from "../../AdminWrappers/AdminRegister";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const AdminRegister = () => {
  const [values, setValues] = useState({
    name: "ishita",
    email: "ishita.deshar@gmail.com",
    phone: "864644",
    address: "Lalitpur",
    password: "deshar",
    cpassword: "deshar",
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
  return (
    <Wrapper>
      <ToastContainer />

      <h3 style={{ letterSpacing: "0.5rem" }}>Register User</h3>
      <form class="row g-4 align-content-center">
        <div class="col-md-6 ">
          <label for="inputEmail4" class="form-label RegisterLabel">
            Name
          </label>
          <input
            type="text"
            class="form-control RegisterInput"
            id="inputEmail4"
            name="name"
            placeholder="name"
            autoComplete="off"
            onChange={handleChange("name")}
            value={name}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label RegisterLabel">
            Email
          </label>
          <input
            type="email"
            class="form-control RegisterInput"
            id="inputPassword4"
            placeholder="name"
            autoComplete="off"
            value={email}
            onChange={handleChange("email")}
          />
        </div>
        <div class="col-md-6 ">
          <label for="inputEmail4" class="form-label RegisterLabel">
            Phone
          </label>
          <input
            type="text"
            class="form-control RegisterInput"
            id="inputEmail4"
            placeholder="name"
            autoComplete="off"
            value={phone}
            onChange={handleChange("phone")}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label RegisterLabel">
            Address
          </label>
          <input
            type="email"
            class="form-control RegisterInput"
            id="inputPassword4"
            placeholder="name"
            autoComplete="off"
            value={address}
            onChange={handleChange("address")}
          />
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label RegisterLabel">
            Password
          </label>
          <input
            type="password"
            class="form-control RegisterInput"
            id="inputPassword4"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={handleChange("password")}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label RegisterLabel">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control RegisterInput"
            id="inputPassword4"
            placeholder="Password"
            autoComplete="off"
            value={cpassword}
            onChange={handleChange("cpassword")}
          />
        </div>
        <div>
          <button
            className="RegisterBtn"
            name="register"
            value="register"
            onClick={clickSubmit}
          >
            Register
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AdminRegister;
