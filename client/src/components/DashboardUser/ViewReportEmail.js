import React from "react";
import Wrapper from "../../wrappers/ViewReportEmail";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
// import { useAppContext } from "../Context/appContext";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuth } from "../../auth/helpers";
import { logout } from "../../auth/helpers";
import logobg2 from "../../images/logobg2.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ReportEmailDetails from "./ReportEmailDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Modal } from "bootstrap";
import Reports from "./Reports";

const URL = "http://localhost:5000/api/reports";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const ViewReportEmail = (props) => {
  // const { _id } = Reports;
  const { id } = useParams("");
  // console.log(id);

  const [report, setReport] = useState();
  const [execution, setExecution] = useState();

  useEffect(() => {
    // Fetch report data
    axios
      .get(`${URL}/${id}`)
      .then((res) => {
        setReport(res.data.report);
        setExecution(res.data.execution);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // const [report, setReport] = useState();

  // useEffect(() => {
  //   fetchHandler().then((data) => {
  //     const report = data.reports.find((r) => r._id === id);
  //     setReport(report);
  //   });
  // }, [id]);
  const navigate = useNavigate();

  const [showLogout, setShowLogout] = useState(false);

  const [values, setValues] = useState({
    email: "",
    assignMessage: "",
    buttonText: "Assign Responsibility",
  });

  const { email, assignMessage, buttonText } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API}/assign-responsibility`,
      data: { email, assignMessage },
    })
      .then((response) => {
        console.log("Assign responsibility Sucessful", response);
        toast.success(response.data.message);
        setValues({ ...values, buttonText: "Assigned" });
        const modal = document.getElementById("exampleModal");
        const modalInstance = Modal.getInstance(modal);
        modalInstance.hide(); // close the modal
        const modalBackdrop = document.querySelector(".modal-backdrop");
        if (modalBackdrop) {
          modalBackdrop.parentNode.removeChild(modalBackdrop);
        }
      })
      .catch((error) => {
        console.log("Assign responsibility error", error.response.data);
        toast.error(error.response.data.error);
        setValues({ ...values, buttonText: "Request password Reset Link" });
      });
  };

  // const [closedDateTime, setClosedDateTime] = useState("");
  // const [executionDescription, setExecutionDescription] = useState("");

  // const handleClose = (event) => {
  //   const { name, value } = event.target || {};

  //   if (name === "closedDateTime") {
  //     setClosedDateTime(value);
  //   } else if (name === "executionDescription") {
  //     setExecutionDescription(value);
  //   }
  // };

  const [msg, setMsg] = useState("");

  const [inputs, setInputs] = useState({
    executionMessage: "",
    incidentCloseDate: "",
  });

  // const [selectedType, setSelectedType] = useState("");

  const handleExecute = (e) => {
    // if (e && e.target) {
    //   const { name, value } = e.target;
    //   if (name) {
    //     setInputs((prevState) => ({
    //       ...prevState,
    //       [name]: value,
    //     }));
    //   }
    //   // setSelectedType(value);
    // }
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/api/executions/", {
        executionMessage: String(inputs.executionMessage),
        incidentCloseDate: String(inputs.incidentCloseDate),
        ReportId: String(id),
      })
      .then((res) => setMsg(res.data.resMesg));
  };

  const handleSubmit = (e) => {
    // console.log("executionnn");
    // e.preventDefault();
    // console.log(inputs);
    // sendRequest().then(() => navigate("/private/viewReportEmail/:id"));
    // toast.success("Report created successfully!"); // show success toast message
    e.preventDefault();

    // Check if any input fields are empty
    const emptyFields = Object.values(inputs).some((val) => !val);
    if (emptyFields) {
      toast.error("Please fill out all fields.");
      return;
    }

    sendRequest().then(() => navigate(`/private/viewReportEmail/${id}`));
    toast.success("Report executed successfully!");
  };

  return (
    <Wrapper>
      <ToastContainer />
      {/* <hr class="border-bottom " /> */}

      <div className="col-11 mx-auto ">
        <nav className="navbar ">
          <form className="container-fluid justify-content-start m-4">
            <NavLink to="/private/allReport">
              <button
                className="btnBack btn-outline-success me-0"
                type="button"
              >
                Back
              </button>
            </NavLink>
            {/* <button
              className="btnAssign btn-sm btn-outline-secondary"
              type="button"
            >
              Assign Responsibility &nbsp;
              <i class="fa-solid fa-arrow-right arrow"></i>
            </button> */}
            <button
              type="button"
              class=" btn-primary btnAssign"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Assign responsibility &nbsp;
              <i class="fa-solid fa-arrow-right arrow"></i>
            </button>
            <button
              type="button"
              class=" btn-primary btnExecute"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              Execution &nbsp;
              <i class="fa-regular fa-circle-check fa-l"></i>{" "}
            </button>
            <NavLink to={`/private/allReport/${id}`}>
              <button
                type="button"
                class=" btn-primary btnEdit"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Edit &nbsp;
                <i class="fa-solid fa-pen-to-square"></i>{" "}
              </button>
            </NavLink>
            {/* 
            <div className="btn-container justify-content-end m-4 ms-auto">
              <button
                type="button"
                className="btndash"
                onClick={() => setShowLogout(!showLogout)}
              >
                <FaUserCircle size={"2.5rem"} color={"#8d8d8d"} />
                {isAuth() && (
                  <button className="profiledropD">
                    <span className="">{isAuth().name}</span>
                  </button>
                )}
                <FaChevronDown color={"#8d8d8d"} />
              </button>
              <div
                className={showLogout ? "dropdown show-dropdown" : "dropdown"}
              >
                {isAuth() && (
                  <li
                    className="dropdown-li"
                    onClick={() => {
                      logout(() => {
                        navigate("/");
                      });
                    }}
                  >
                    <i class="fa-solid fa-right-from-bracket"></i> Logout
                  </li>
                )}
                <li className="dropdown-li">
                  <i class="fa-solid fa-lock"></i> change password
                </li>
                <NavLink to="/private/profileUpdate">
                  <li className="dropdown-li">
                    <i class="fa-solid fa-lock"></i> Profile
                  </li>
                </NavLink>
              </div>
            </div> */}
          </form>
        </nav>

        <div class="card ReportCard text-center ">
          <h5 class="card-header ">
            <img
              className="ReportImg"
              src={logobg2}
              alt=""
              style={{ width: "15rem", textAlign: "center", margin: "-2rem" }}
            />
          </h5>

          <div class="card w-75 mb-3 text-start">
            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div> */}
            {report ? (
              <ReportEmailDetails report={report} />
            ) : (
              <p>Loading report...</p>
            )}
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content" style={{ borderRadius: "2rem" }}>
              <div class="modal-header">
                <h1
                  class="modal-title fs-2 fw-bolder "
                  id="exampleModalLabel"
                  style={{
                    margin: "1rem 6rem",
                    fontWeight: "600",
                    letterSpacing: "0.2rem",
                    color: "black",
                  }}
                >
                  Assign Responsibility
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ margin: "2rem" }}
                ></button>
              </div>
              <div class="modal-body mb-4">
                <form>
                  <div class="mb-3">
                    <label
                      for="recipient-name"
                      class="col-form-label FormLabel"
                      style={{
                        margin: "0rem 1rem",
                        fontSize: "1.5rem",
                        color: "black",
                      }}
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      class="form-control w-75"
                      id="recipient-name"
                      placeholder="Select Email Address"
                      value={email}
                      onChange={handleChange("email")}
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      for="message-text"
                      class="col-form-label"
                      style={{
                        margin: "0rem 1rem",
                        fontSize: "1.5rem",
                        color: "black",
                      }}
                    >
                      Message:
                    </label>
                    <textarea
                      class="form-control w-75"
                      id="message-text"
                      placeholder="Enter Message"
                      value={assignMessage}
                      onChange={handleChange("assignMessage")}
                    ></textarea>
                  </div>
                </form>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  className="AssignBtn"
                  onClick={clickSubmit}
                >
                  Assign
                  {/* {buttonText} */}
                </button>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered ">
              <div class="modal-content" style={{ borderRadius: "2rem" }}>
                <div class="modal-header">
                  <h1
                    class="modal-title fs-2 fw-bolder "
                    id="exampleModalLabel"
                    style={{
                      margin: "1rem 6rem",
                      fontWeight: "600",
                      letterSpacing: "0.2rem",
                      color: "black",
                    }}
                  >
                    Execution
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    style={{ margin: "2rem" }}
                  ></button>
                </div>
                <div class="modal-body mb-4">
                  <form>
                    <div className="  mb-2 ">
                      <label
                        htmlFor="name"
                        class="col-form-label FormLabel"
                        style={{
                          margin: "0rem 1rem",
                          fontSize: "1.5rem",
                          color: "black",
                        }}
                      >
                        Incident Closed Date and Time
                      </label>
                      <div className="row">
                        <Form.Group controlId="dob">
                          <Datetime
                            // onChange={(date) =>
                            //   handleExecute({
                            //     target: {
                            //       name: "incidentCloseDate",
                            //       value: date.format(
                            //         "YYYY-MM-DDTHH:mm:ss.SSSZ"
                            //       ),
                            //     },
                            //   })
                            // }
                            inputProps={{
                              name: "incidentCloseDate",
                              placeholder: "Date and Time",
                              className: "form-control w-75",
                            }}
                            value={inputs.incidentCloseDate}
                            // onChange={(value) =>
                            //   handleClose({
                            //     target: { name: "closedDateTime", value },
                            //   })
                            // }
                            // onChange={handleClose}
                            // onChange={handleExecute}
                            // onChange={(value) =>
                            //   handleExecute({
                            //     target: { name: "incidentCloseDate", value },
                            //   })
                            // }
                            onChange={(date) =>
                              handleExecute({
                                target: {
                                  name: "incidentCloseDate",
                                  value: date.format(
                                    "YYYY-MM-DDTHH:mm:ss.SSSZ"
                                  ),
                                },
                              })
                            }
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label
                        for="message-text"
                        class="col-form-label"
                        style={{
                          margin: "0rem 1rem",
                          fontSize: "1.5rem",
                          color: "black",
                        }}
                      >
                        Execution Description:
                      </label>
                      <textarea
                        class="form-control w-75"
                        id="message-text"
                        type="message"
                        name="executionMessage"
                        placeholder="Enter Message"
                        value={inputs.executionMessage}
                        // onChange={(event) =>
                        //   handleChange({
                        //     target: {
                        //       name: "executionDescription",
                        //       value: event.target.value,
                        //     },
                        //   })
                        // }
                        // onChange={handleClose}
                        onChange={handleExecute}
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="submit"
                    className="AssignBtn"
                    // onClick={clickSubmit}
                    // onClick={() =>
                    //   navigate({
                    //     // pathname: "/individual-report",
                    //     state: { executionDescription },
                    //   })
                    // }
                  >
                    Close
                    {/* {buttonText} */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default ViewReportEmail;
