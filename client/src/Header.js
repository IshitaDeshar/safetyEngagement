import React from "react";
import Headerimg from "./images/Headerimg.png";
const Header = () => {
  return (
    <>
      <header className="landingHeader" id="scrollspyHeading1">
        <section
          id="header"
          className=" main-hero-container d-flex align-items-center"
        >
          {/* <div className="container-fluid nav_bg">
            <div className="row"> */}
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>Engage For Your Safety</h1>
                <h3 className="my-3">
                  More you engage in safety the workplace becomes safer and
                  cleaner.Engaging in safety measures in the workplace not only
                  promotes a safer and cleaner environment but also creates a
                  culture of responsibility and accountability. When employees
                  prioritize safety, they become more aware of potential hazards
                  and take proactive steps to prevent accidents or injuries.
                </h3>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img main-herosection-images">
                <img src={Headerimg} className="img-fluid" alt="" />
              </div>

              {/* <div className="custom-shape-divider-bottom-1676434419"></div> */}
            </div>
          </div>
          {/* </div>
          </div> */}
        </section>
      </header>
    </>
  );
};
export default Header;
