import React from "react";
import AdminLinks from "../AdminUtils/AdminLinks";
import { NavLink } from "react-router-dom";

const AdminNavlinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {AdminLinks.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link activedash" : "nav-link"
            }
            end
          >
            <span className="icondash">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default AdminNavlinks;
