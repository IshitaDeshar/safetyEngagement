import React, { useEffect, useState } from "react";
import Wrapper from "../../AdminWrappers/AdminRegister";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { isAuth, getCookie, logout, updateUser } from "../../auth/helpers";

const AdminUpdate = () => {
  const [inputs, setInputs] = useState({});

  const id = useParams().id;

  const navigate = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/api/register/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    // await axios
    //   .put(`http://localhost:5000/api/register/${id}`, {
    //     name: String(inputs.name),
    //     email: String(inputs.email),
    //     phone: String(inputs.phone),
    //     address: String(inputs.address),
    //     password: String(inputs.password),
    //     cpassword: String(inputs.cpassword),
    //   })
    //   .then((res) => res.data);
    try {
      const res = await axios.put(`http://localhost:5000/api/register/${id}`, {
        name: String(inputs.name),
        email: String(inputs.email),
        phone: String(inputs.phone),
        address: String(inputs.address),
        password: String(inputs.password),
        cpassword: String(inputs.cpassword),
      });
      toast.success("User updated successfully");
      return res.data;
    } catch (err) {
      toast.error("Failed to update user");
      throw err;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // toast.info("Updating user...");
    // sendRequest().then(() => navigate("/admin/createUser"));
    sendRequest()
      .then(() => {
        toast.success("User updated successfully");
        setTimeout(() => {
          navigate("/admin/createUser");
        }, 5000); // navigate after 5 seconds
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Wrapper>
      <ToastContainer />

      <h3 style={{ letterSpacing: "0.5rem" }}>Update User</h3>
      {/* {inputs && ( */}
      <form class="row g-4 align-content-center" onSubmit={handleSubmit}>
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
            onChange={handleChange}
            value={inputs.name}
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
            name="email"
            value={inputs.email}
            onChange={handleChange}
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
            name="phone"
            value={inputs.phone}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label RegisterLabel">
            Address
          </label>
          <input
            type="text"
            class="form-control RegisterInput"
            id="inputPassword4"
            placeholder="name"
            autoComplete="off"
            name="address"
            value={inputs.address}
            onChange={handleChange}
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
            name="password"
            autoComplete="off"
            value={inputs.password}
            onChange={handleChange}
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
            name="cpassword"
            value={inputs.cpassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="RegisterBtn"
            name="register"
            value="register"
            // onClick={clickSubmit}
          >
            Update User
          </button>
        </div>
      </form>
      {/* )} */}
    </Wrapper>
  );
};

export default AdminUpdate;
