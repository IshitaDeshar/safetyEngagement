import React from "react";
import "../../styles/Reports.css";
import Wrapper from "../../wrappers/AllReports";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reports = (props) => {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false); // add state for deleted status

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
  } = props.report;

  const deleteHandler = async () => {
    await axios
      // .delete(`http://localhost:5000/api/reports/${_id}`)
      // .then((res) => res.data)
      // .then(() => setIsDeleted(true))
      // .then(() => navigate("/private/allReport"));
      .delete(`http://localhost:5000/api/reports/${_id}`)
      .then((res) => {
        toast.success("Report deleted successfully.");
        setIsDeleted(true);
        navigate("/private/allReport");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  if (isDeleted) {
    return null; // if report is deleted, don't render it
  }

  const icons = {
    UnsafeCondition: (
      <i className="fas fa-exclamation-triangle unsafe-condition"></i>
    ),
    UnsafeAct: <i class="fa-solid fa-person-falling-burst "></i>,
    Environmental: <i class="fa-solid fa-tree"></i>,
    default: <i className="fas fa-exclamation-triangle "></i>,
  };

  const colors = {
    UnsafeCondition: "#E82A2A",
    UnsafeAct: "#FFA500",
    Environmental: "#57A845",
    default: "#FF0000",
  };

  const color = colors[typeofIncident] || colors.default;

  const iconStyle = {
    color: color,
  };

  const textStyle = {
    color: color,
  };

  const icon = icons[typeofIncident] || icons.default;

  return (
    <Wrapper>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-md-12 reportBox">
            <div>
              <h3>
                <span style={iconStyle}>{icon}</span>&nbsp;
                <span style={textStyle}>{typeofIncident}</span>
                {/* {icon} &nbsp; */}
                {/* <i className={`${iconClass} ${icon}`}></i> &nbsp; */}
                {/* <span className={titleClass}>{typeofIncident}</span> */}
                {/* <span
                  className={`incident-type ${typeofIncident.toLowerCase()}`}
                >
                  {typeofIncident}
                </span> */}
                {/* {typeofIncident} */}
              </h3>
              <h2 className="h2By">Created By: {reportedBy}</h2>
              <div
                className="statusStyle"
                style={{
                  color:
                    status === "Registered" ? "rgb(214, 106, 106)" : "green",
                }}
              >
                <span>{status}</span>
              </div>

              {/* <p>{actDescription}</p> */}

              <NavLink to={`/private/allReport/${_id}`}>
                <button className="reportbtn">
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
              </NavLink>

              <button className="reportbtn" onClick={deleteHandler}>
                <i class="fa-solid fa-trash"></i>
              </button>

              {/* <NavLink to={`private/individualReport/${_id}`}> */}
              <NavLink to={`/private/individualReport/${_id}`}>
                <button className="RMbtn">
                  Read More <i class="fa-solid fa-angles-right"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>{" "}
    </Wrapper>
  );
};

export default Reports;
