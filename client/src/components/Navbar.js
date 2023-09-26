import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/index.css";
import logo from "../images/logo.png";
import { logout } from "../auth/helpers";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navbarBg, setNavbarBg] = useState("navbar-bg");

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setNavbarBg("navbar-bg white-bg");
      } else {
        setNavbarBg("navbar-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className={navbarBg} id="scrollspyHeading1">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <NavLink
                className="navbar-brand"
                to="/"
                style={{ borderBottom: "none" }}
              >
                <img className="logo" src={logo} alt="safety"></img>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <a
                      href="#scrollspyHeading1"
                      activeclassName="active"
                      className="nav-link "
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#scrollspyHeading2"
                      activeclassName="active"
                      className="nav-link"
                      // to="/about"
                    >
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#scrollspyHeading3"
                      activeclassName="active"
                      className="nav-link"
                      // to="/services"
                    >
                      Services
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink
                      activeclassName="active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact Us
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink
                      activeclassName="active"
                      className="nav-link"
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </li>

                  <button
                    type="button"
                    className="btn rounded-pill "
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </ul>
              </div>
            </div>
          </nav>
          {/* </div>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default Navbar;
