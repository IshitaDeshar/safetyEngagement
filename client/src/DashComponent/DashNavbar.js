import React from "react";
import Wrapper from "../wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaChevronDown } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import logodash from "../images/logodash.png";
import { useAppContext } from "../Context/appContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { isAuth } from "../auth/helpers";
import { logout } from "../auth/helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const DashNavbar = () => {
  const navigate = useNavigate();

  const [showLogout, setShowLogout] = useState(false);
  // const { toggleSidebar } = useAppContext();

  const [showDropdown, setShowDropdown] = useState(false);

  const { toggleSidebar } = useAppContext();
  // console.log("showSidebar", showSidebar);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Wrapper>
      <ToastContainer />
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          {/* <h3 className="logo-text">Dashboard</h3> */}
          <img className="dashlogo" src={logodash} alt="" />
        </div>

        <div
          className="btn-container"
          style={{
            // transform: showDropdown ? "rotate(180deg)" : "",
            transition: "transform 0.3s ease-in-out",
          }}
          onClick={toggleDropdown}
        >
          <button
            type="button"
            className="btndash"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle size={"2.5rem"} color={"#CCCCCC"} />
            {isAuth() && (
              <button className="profiledropD">
                <span className="">{isAuth().name}</span>
              </button>
            )}
            <HiChevronDown
              size={"2rem"}
              color={"#8d8d8d"}
              style={{
                transform: showDropdown ? "rotate(180deg)" : "",
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={toggleDropdown}
            />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            {isAuth() && (
              <li
                className="dropdown-li"
                onClick={() => {
                  logout(() => {
                    navigate("/login");
                  });
                }}
              >
                {/* <i class="dropdownIcon fa-solid fa-right-from-bracket fa-lg"></i>{" "} */}
                <FiLogOut className="dropdownIcon" size={"2rem"} />
                &nbsp;Logout
              </li>
            )}
            <NavLink to="/auth/password/forgot">
              <li className="dropdown-li">
                {/* <i class="dropdownIcon fa-solid fa-lock fa-lg"></i>  */}
                <BiLockAlt size={"2rem"} />
                &nbsp;Change Password
              </li>
            </NavLink>
            <NavLink to="/private/profileUpdate">
              <li className="dropdown-li">
                <AiOutlineUser size={"2rem"} />
                {/* <i class="dropdownIcon fa-regular fa-user fa-lg"></i>  */}
                &nbsp;Profile
              </li>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DashNavbar;
