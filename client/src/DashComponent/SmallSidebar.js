import React from "react";
import Wrapper from "../wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../Context/appContext";
import logobg2 from "../images/logobg2.png";
import NavLinks from "./NavLinks";
// import "../styles/indexDash.css";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => {
              console.log("toggle sidebar");
            }}
          >
            <FaTimes />
          </button>
          <header className="sideheader">
            <img className="sidebarimg" src={logobg2} alt="" />
            <NavLinks toggleSidebar={toggleSidebar} />
          </header>
        </div>
      </div>{" "}
    </Wrapper>
  );
};

export default SmallSidebar;
