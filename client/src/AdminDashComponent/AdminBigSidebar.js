import React from "react";
import Wrapper from "../AdminWrappers/AdminBigSidebar";
import { useAppContext } from "../Context/appContext";
import NavLinks from "./AdminNavlinks";
// import logodash from "../images/logodash.png";
import logobgwhite2 from "../images/logobgwhite2.jpg";
const AdminBigSidebar = () => {
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
              src={logobgwhite2}
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

export default AdminBigSidebar;
