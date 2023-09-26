import React, { useState } from "react";
import astep from "./images/1step.png";
import bstep from "./images/2step.png";
import cstep from "./images/3step.png";
import dstep from "./images/4step.png";
import estep from "./images/5step.png";

const Steps = () => {
  return (
    <>
      <section className="common-section our-services" id="scrollspyHeading3">
        <div className="col-10 mx-auto">
          <div className="container mb-5">
            <div className="row">
              <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                <img src={astep} alt="stepsimg" />
              </div>

              {/* right side data */}
              <div className="col-12 col-lg-7 our-services-list">
                <h1 className="main-heading">Encounter, Capture and Report</h1>
                <div className="row our-services-info">
                  <p className="main-hero-para">
                    Encounter, Capture, and Report (ECR) is a systematic
                    approach used in workplace hazard reporting applications to
                    improve safety and mitigate risks. The process involves
                    identifying potential hazards, capturing relevant
                    information, and reporting them to the appropriate
                    authorities for resolution.
                  </p>

                  <div className="col-12 our-services-bullet">
                    <ul className="bullet">
                      <li>
                        Encounter: This is the initial phase where employees or
                        stakeholders encounter potential hazards in the
                        workplace.
                      </li>
                      <li>
                        Capture: Once a hazard is encountered, the next step is
                        to capture all relevant information related to the
                        hazard.
                      </li>
                      <li>
                        Report: The application should allow users to provide a
                        detailed description of the hazard, including its
                        location, potential consequences, and any contributing
                        factors.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second part */}

      <section className="common-section our-services our-services-rightside">
        <div className="col-10 mx-auto">
          <div className="container mb-5">
            <div className="row">
              {/* right side data */}
              <div className="col-12 col-lg-7 our-services-rightside-content">
                <h1 className="main-heading">Analyze & Assign</h1>
                <div className="row our-services-info">
                  <p className="main-hero-para">
                    Analyze and Assign are additional steps that follow the
                    Encounter, Capture, and Report (ECR) process in a workplace
                    hazard reporting application. These steps involve the
                    evaluation and assignment of appropriate actions to address
                    reported hazards. Here are the key points explaining the
                    Analyze and Assign process:
                  </p>
                  <div className="col-12 our-services-bullet">
                    <ul className="bullet">
                      <li>
                        Review and Verification: Upon receiving a hazard report,
                        safety managers or designated personnel analyze the
                        information provided, ensuring its accuracy and
                        completeness.
                      </li>
                      <li>
                        Risk Assessment: The reported hazard is assessed to
                        determine its potential severity and the likelihood of
                        occurrence.
                      </li>
                      <li>
                        Responsibility Allocation: Based on the hazard analysis,
                        responsible parties or departments are assigned to
                        address and resolve the reported hazard. Assignments may
                        be made to individuals, teams, or specific roles.
                      </li>
                      <li>
                        Due Dates and Follow-up: The assigned parties set
                        realistic due dates for hazard resolution and establish
                        a follow-up mechanism to track progress and ensure
                        timely completion.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 our-service-rightside-img">
                <img src={bstep} alt="stepsimg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* third part */}

      <section className="common-section our-services">
        <div className="col-10 mx-auto">
          <div className="container mb-5">
            <div className="row">
              <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                <img src={cstep} alt="stepsimg" />
              </div>

              {/* right side data */}
              <div className="col-12 col-lg-7 our-services-list">
                <h1 className="main-heading">
                  Examine Report Status and Monitor progress
                </h1>
                <div className="row our-services-info">
                  <p className="main-hero-para">
                    "Examine Report Status and Monitor Progress" is a critical
                    step in the workplace hazard reporting and resolution
                    process. It involves the evaluation of reported hazards,
                    tracking their status, and monitoring the progress of
                    actions taken to address them. Here are the key points
                    explaining the Examine Report Status and Monitor Progress
                    process:
                  </p>
                  <div className="col-12 our-services-bullet">
                    <ul className="bullet">
                      <li>
                        Report Review: Safety managers or designated personnel
                        review all submitted hazard reports to ensure they are
                        complete, accurate, and properly categorized.
                      </li>
                      <li>
                        Priority Assessment: Reports are prioritized based on
                        the severity and potential impact of the hazards they
                        describe. High-priority hazards are given immediate
                        attention.
                      </li>
                      <li>
                        Real-time Updates: The workplace hazard reporting
                        application should allow for real-time updates on the
                        status of hazard resolution efforts.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* fourth part */}

      <section className="common-section our-services our-services-rightside">
        <div className="col-10 mx-auto">
          <div className="container mb-5">
            <div className="row">
              {/* right side data */}
              <div className="col-12 col-lg-7 our-services-rightside-content">
                <h1 className="main-heading">Correct Hazard</h1>
                <div className="row our-services-info">
                  <p className="main-hero-para">
                    "Correct Hazard" is the crucial step in the workplace hazard
                    reporting and resolution process. It involves taking
                    appropriate actions to eliminate, control, or mitigate the
                    identified hazards to ensure a safe working environment.
                    Here are the key points explaining the "Correct Hazard"
                    process:
                  </p>
                  <div className="col-12 our-services-bullet">
                    <ul className="bullet">
                      <li>
                        Action Implementation: The assigned parties initiate the
                        necessary actions to address the reported hazard based
                        on the action plan developed during the "Assign" step.
                      </li>
                      <li>
                        Immediate Hazards: In the case of high-risk or immediate
                        hazards, swift actions are taken to prevent accidents or
                        injuries.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 our-service-rightside-img">
                <img src={dstep} alt="stepsimg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* fifth part */}

      <section className="common-section our-services">
        <div className="col-10 mx-auto">
          <div className="container mb-5">
            <div className="row">
              <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                <img src={estep} alt="stepsimg" />
              </div>

              {/* right side data */}
              <div className="col-12 col-lg-7 our-services-list">
                <h1 className="main-heading">Employee Engagement </h1>
                <div className="row our-services-info">
                  <p className="main-hero-para">
                    Employee engagement in the context of a workplace hazard
                    reporting application refers to actively involving employees
                    in the process of identifying and reporting hazards in the
                    workplace. Engaged employees are more likely to participate
                    in hazard reporting, leading to increased safety awareness
                    and a proactive approach to risk mitigation. Here are the
                    key points explaining employee engagement in a workplace
                    hazard reporting application:
                  </p>
                  <div className="col-12 our-services-bullet">
                    <ul className="bullet">
                      <li>
                        Training and Awareness: Employees should receive
                        training on how to use the hazard reporting application
                        effectively. Additionally, they should be made aware of
                        the importance of hazard reporting and how it
                        contributes to a safer work environment.
                      </li>
                      <li>
                        Data Transparency: Sharing data on reported hazards,
                        actions taken, and their impact with employees can
                        demonstrate the organization's commitment to addressing
                        safety concerns.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
