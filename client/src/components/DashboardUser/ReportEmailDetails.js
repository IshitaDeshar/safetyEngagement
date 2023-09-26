import React from "react";
import "../../styles/Reports.css";
import Wrapper from "../../wrappers/ReportDetails";
import { NavLink } from "react-router-dom";
const ReportDetails = (props) => {
  const {
    _id,
    typeofIncident,
    actDescription,
    reportedDateTime,
    location,
    reportedBy,
    severityCondition,
    status,
    photo,
    createdAt,
  } = props.report;
  return (
    <Wrapper>
      <div className="individualReport">
        <div className="ReportDiv">
          <label className="individualReportLabel">
            <i
              class="fa-solid fa-triangle-exclamation"
              style={{ color: "#49a472" }}
            ></i>
            &nbsp;Type of Incident
          </label>
          <p className="individualReportOutput">{typeofIncident}</p>
        </div>
        <div className="ReportDiv">
          <label className="individualReportLabel">
            <i class="fa-regular fa-calendar" style={{ color: "#49a472" }}></i>
            &nbsp;Reported Date and Time
          </label>
          <p className="individualReportOutput">{reportedDateTime}</p>
        </div>
        <div className="ReportDiv">
          <label className="individualReportLabel">
            <i
              class="fa-solid fa-location-dot"
              style={{ color: "#49a472" }}
            ></i>{" "}
            &nbsp;Incident Location
          </label>
          <p className="individualReportOutput">{location}</p>
        </div>
        <div className="ReportDiv">
          <label className="individualReportLabel">
            <i class="fa-regular fa-message" style={{ color: "#49a472" }}></i>{" "}
            &nbsp;Incident Description
          </label>
          <p className="individualReportOutput">{actDescription}</p>
        </div>
        <div className="ReportDiv">
          <label className="individualReportLabel">
            <i
              class="fa-solid fa-arrow-trend-up"
              style={{ color: "#49a472" }}
            ></i>{" "}
            &nbsp;Severity of Incident
          </label>
          <p className="individualReportOutput">{severityCondition}</p>
        </div>
        <div className="ReportDiv">
          <label className="individualReportLabel">
            <i
              class="fa-solid fa-arrow-trend-up"
              style={{ color: "#49a472" }}
            ></i>{" "}
            &nbsp;Status
          </label>
          <p className="individualReportOutput">{status}</p>
        </div>
        <div className="ReportDiv">
          <label className="individualReportLabel">
            <i
              class="fa-solid fa-file-circle-plus"
              style={{ color: "#49a472" }}
            ></i>{" "}
            &nbsp;Report Created By
          </label>
          <p className="individualReportOutput">{reportedBy}</p>
        </div>
        <div className="ReportDiv">
          <label className="individualReportLabel">
            <i class="fa-solid fa-image" style={{ color: "#49a472" }}></i>
            &nbsp;Attachments
          </label>
          <p className="individualReportOutput">
            {" "}
            <img src={photo} alt="" />
          </p>
        </div>

        <p
          style={{
            fontSize: "1.5rem",
            letterSpacing: "0.2rem",
            marginLeft: "0rem",
            fontWeight: "600",
          }}
          className="individualReportOutput"
        >
          Created on {createdAt}
        </p>
      </div>
    </Wrapper>
  );
};

export default ReportDetails;
