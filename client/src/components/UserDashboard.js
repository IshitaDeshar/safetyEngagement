import React from "react";
import { isAuth } from "../auth/helpers";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/helpers";

const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>User Dashboard</h1>
      {isAuth() && (
        <button className="nav-item">
          <span
            className=""
            onClick={() => {
              logout(() => {
                navigate("/login");
              });
            }}
          >
            Logout
          </span>
        </button>
      )}
    </>
  );
};

export default UserDashboard;
