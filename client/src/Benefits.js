import React, { useState } from "react";
import BenefitsApi from "./API/BenefitsApi";

const Benefits = () => {
  const [BenefitsData, setBenefitsData] = useState(BenefitsApi);
  return (
    <>
      <section className="service-main-container" id="scrollspyHeading2">
        <div className="col-10 mx-auto">
          <div className="container service-container">
            <h1 className="main-heading text-center fw-bold">Features</h1>
            <div className="row">
              {BenefitsData.map((curElem) => {
                const { id, logo, title, info } = curElem;
                return (
                  <>
                    <div
                      className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                      key={id}
                    >
                      {/* <i class="fa-solid fa-user-shield"></i> */}
                      <i className={`fontawesome-style ${logo}`}></i>
                      <h2 className="sub-heading">{title}</h2>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
