import React from "react";
import "../../styles/Reports.css";
import Wrapper from "../../wrappers/ReportDetails";
import { NavLink } from "react-router-dom";
const ExecutionDetails = (props) => {
  // const { executionDescription, closedDateTime } = props.execution ?? {};
  // const { executionDescription, closedDateTime } = props.execution;
  // const { executionDescription = "", closedDateTime = "" } =
  //   props.execution || {};
  //   const { executionMessage, incidentCloseDate } = props.execution || {};
  const { id, executionMessage, incidentCloseDate } = props.execution ?? {};

  return (
    <Wrapper>
      <div className="individualReport">
        <div className="ReportDiv">
          <label className="individualReportLabel">
            <i class="fa-solid fa-clock" style={{ color: "#49a472" }}></i>
            &nbsp;Incident Closed Date Time
          </label>
          <p className="individualReportOutput">{incidentCloseDate}</p>
        </div>
        <div className="ReportDiv">
          <label className="individualReportLabel">
            <i class="fa-regular fa-comment" style={{ color: "#49a472" }}></i>
            &nbsp;Exection Description
          </label>
          <p className="individualReportOutput">{executionMessage}</p>
        </div>

        {/* <img src={photo}  /> */}
        {/* <article>By {reportedBy}</article>
        <h1>{reportedDateTime}</h1>
        <h1>{location}</h1>
        <h1>{severityCondition}</h1>
        <p>{actDescription}</p> */}
      </div>
    </Wrapper>
  );
};

export default ExecutionDetails;
