import React, { useState, useEffect } from "react";
import Wrapper from "../../wrappers/ProfileUpdate";
import axios from "axios";
import { isAuth, getCookie, logout, updateUser } from "../../auth/helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useNavigate } from "react-router-dom";

const Settings = ({ navigate }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "",
  });

  const token = getCookie("token");

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/user/${isAuth()._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("Profile Update", response);
        const { name, email, phone, address, password, role } = response.data;
        setValues({ ...values, name, email, phone, address, password, role });
      })
      .catch((error) => {
        console.log("Profile Update Error", error.response.data.error);
        if (error.response.status === 401) {
          logout(() => {
            navigate("/");
          });
        }
      });
  };

  const { name, email, phone, address, role } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const navigate1 = useNavigate();

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API}/user/update`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { name, phone, address, role },
    })
      .then((response) => {
        console.log("Profile Update Sucessful", response);
        updateUser(response, () => {
          setValues({
            ...values,
            buttonText: "Saved",
          });
          toast.success("Profile Updated Sucessfully");
          setTimeout(() => {
            navigate1("/private");
          }, 5000);
        });
      })
      .catch((error) => {
        console.log("Profile Update Error", error.response.data.error);
        setValues({ ...values, buttonText: "Save Changes" });
        toast.error(error.response.data.error);
      });
  };

  return (
    <Wrapper>
      <ToastContainer />

      <div className="container">
        <div className="row">
          <form className="form">
            <div class="col-md-12">
              <h3 style={{ letterSpacing: "0.5rem" }}>
                {/* {isEditing ? "edit report" : "Add Report"} */}
                Profile Update
              </h3>
              {/* {showAlert} */}

              <div className="mb-2">
                <label htmlFor="email" className="form-labeldash">
                  Name
                </label>
                <input
                  type="location"
                  className="form-control w-50"
                  id="email"
                  name="name"
                  placeholder="name"
                  autoComplete="off"
                  onChange={handleChange("name")}
                  value={name}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-labeldash">
                  Email
                </label>
                <input
                  type="location"
                  className="form-control w-50"
                  id="email"
                  name="email"
                  placeholder="email"
                  autoComplete="off"
                  defaultValue={email}
                  disabled
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-labeldash">
                  Address
                </label>
                <input
                  type="location"
                  className="form-control w-50"
                  id="email"
                  name="address"
                  placeholder="Address"
                  autoComplete="off"
                  value={address}
                  onChange={handleChange("address")}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-labeldash">
                  Phone Number
                </label>
                <input
                  type="location"
                  className="form-control w-50"
                  id="email"
                  name="phone"
                  autoComplete="off"
                  placeholder="Phone No"
                  value={phone}
                  onChange={handleChange("phone")}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-labeldash">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control w-50"
                  placeholder="Password"
                  autoComplete="off"
                  id="email"
                  // value={password}
                  onChange={handleChange("password")}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-labeldash">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  className="form-control w-50"
                  placeholder="Role"
                  autoComplete="off"
                  id="role"
                  defaultValue={role}
                  disabled
                />
              </div>
              <div className="btn-container">
                <button
                  type="submit"
                  className="ProfileSubmitBtn"
                  onClick={clickSubmit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Settings;
