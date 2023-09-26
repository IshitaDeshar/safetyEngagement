import React from "react";
import Wrapper from "../wrappers/BigSidebar";
import { useAppContext } from "../Context/appContext";
import NavLinks from "./NavLinks";
// import logodash from "../images/logodash.png";
import logodashfinal from "../images/logodashfinal.png";
import logobgwhite from "../images/logobgwhite.png";
const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container  show-sidebar"
        }
      >
        <div className="content">
          <header className="bigsideheader">
            <img
              className="bigsidebarimg"
              src={logodashfinal}
              alt="Safety Environment"
            />
            <hr />
            <NavLinks />
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
