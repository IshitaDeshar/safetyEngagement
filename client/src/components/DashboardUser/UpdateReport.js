import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Wrapper from "../../wrappers/ReportForm";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Form } from "react-bootstrap";
import { useAppContext } from "../../Context/appContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateReport = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    location,
    actDescription,
    reportedDateTime,
    // responsiblePerson,
    reportedBy,
    typeofIncidentOptions,
    status,
    statusOptions,
    severityCondition,
    severityConditionOption,
    photo,
    // handleChange,
    clearValues,
    createReport,
  } = useAppContext();

  const [inputs, setInputs] = useState({});

  const id = useParams().id;

  const navigate = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/api/reports/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.report));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/api/reports/${id}`, {
        typeofIncident: String(inputs.typeofIncident),
        actDescription: String(inputs.actDescription),
        reportedDateTime: String(inputs.reportedDateTime),
        location: String(inputs.location),
        reportedBy: String(inputs.reportedBy),
        severityCondition: "Low",
        status: String(inputs.status),
        photo: String(inputs.photo),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // sendRequest().then(() => navigate("/private/allReport"));
    e.preventDefault();
    sendRequest()
      .then(() => {
        navigate("/private/allReport");
        toast.success("Report updated successfully!");
      })
      .catch(() => {
        toast.error("Failed to update report");
      });
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Wrapper>
      <ToastContainer />

      <div className="container">
        <div className="row">
          {inputs && (
            <form className="form" onSubmit={handleSubmit}>
              <div class="col-md-12">
                <h3 style={{ letterSpacing: "0.5rem" }}>
                  {isEditing ? "edit report" : "Update Report"}
                </h3>
                {showAlert}

                {/* act description */}
                <div className="mb-3 ">
                  <label htmlFor="message" className="form-labeldash">
                    Incident Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    row="5"
                    name="actDescription"
                    style={{ height: "100px" }}
                    value={inputs.actDescription}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* type of incident */}
                <div className="mb-2">
                  <label htmlFor="IncidentType" className="form-labeldash">
                    Type of Incident
                  </label>
                  <select
                    className="form-select form-select-lg mb-2"
                    aria-label=".form-select-lg example"
                    value={inputs.typeofIncident}
                    onChange={handleChange}
                    name="typeofIncident"
                  >
                    <option value="Unsafe Condition" selected>
                      Unsafe Condition
                    </option>
                    <option value="Unsafe Act">Unsafe Act</option>
                    <option value="Environmental">Environmental</option>
                    {/* {typeofIncidentOptions.map((itemValue, index) => {
                  return (
                    <option key={index} value={itemValue}>
                      {itemValue}
                    </option>
                  );
                })} */}
                  </select>
                </div>

                {/* location */}
                <div className="mb-2">
                  <label htmlFor="email" className="form-labeldash">
                    Incident Location
                  </label>
                  <input
                    type="location"
                    className="form-control"
                    id="email"
                    name="location"
                    value={inputs.location}
                    onChange={handleChange}
                  />
                </div>

                {/* status */}
                <div className="mb-2">
                  <label htmlFor="IncidentType" className="form-labeldash">
                    Status
                  </label>
                  <select
                    class="form-select form-select-lg mb-2"
                    aria-label=".form-select-lg example"
                    value={inputs.status}
                    onChange={handleChange}
                    name="status"
                  >
                    <option selected value="Completed">
                      Completed
                    </option>
                    <option value="Registered">Registered</option>
                    {/* <option value="Pending">Pending</option> */}
                    {/* {statusOptions.map((itemValue, index) => {
                  return (
                    <option key={index} value={itemValue}>
                      {itemValue}
                    </option>
                  );
                })} */}
                  </select>
                </div>

                {/* Reported Date Time */}
                <div className="  mb-2 ">
                  <label htmlFor="name" className="form-labeldash">
                    Reported Date and Time
                  </label>
                  <div className="row">
                    <Form.Group controlId="dob">
                      {/* <Form.Control
                      type="datetime-local"
                      name="reportedDateTime"
                      className="form-control"
                      placeholder="Date of Birth"
                      value={inputs.reportedDateTime}
                      onChange={handleChange}
                    /> */}

                      <Datetime
                        inputProps={{
                          name: "reportedDateTime",
                          placeholder: "Date and Time",
                        }}
                        value={inputs.reportedDateTime}
                        onChange={(value) =>
                          handleChange({
                            target: { name: "reportedDateTime", value },
                          })
                        }
                      />
                    </Form.Group>
                  </div>
                  {/* <input
                type="text"
                className="form-control"
                id="name"
                name="reportedDateTime"
                // placeholder="hiii"
                value={inputs.reportedDateTime}
                onChange={handleChange}
              /> */}
                </div>

                {/* reported by */}
                <div className="mb-2">
                  <label htmlFor="email" className="form-labeldash">
                    Reported By
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="reportedBy"
                    value={inputs.reportedBy}
                    onChange={handleChange}
                  />
                </div>
                {/* severity condition */}
                <div className="mb-2">
                  <label htmlFor="IncidentType" className="form-labeldash">
                    Severity of Incident
                  </label>
                  <select
                    class="form-select form-select-lg mb-2"
                    aria-label=".form-select-lg example"
                    value={inputs.severityCondition}
                    onChange={handleChange}
                    name="severityCondition"
                  >
                    <option selected value="Low">
                      Low
                    </option>
                    <option value="Minor">Minor</option>
                    <option value="Major">Major</option>
                    <option value="Critical">Critical</option>
                    {/* {statusOptions.map((itemValue, index) => {
                  return (
                    <option key={index} value={itemValue}>
                      {itemValue}
                    </option>
                  );
                })} */}
                  </select>
                </div>

                {/* attach photo */}
                {/* <div className="mb-3">
              <label for="inputTag" className="attachLabel">
                Attachment <br />
                <i class=" attachIcon fa-regular fa-image fa-2xl"></i>{" "}
                <input
                  id="photo"
                  type="file"
                  className="imgAttach"
                  value={inputs.photo}
                  name="photo"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <button className="uploadbtn" onClick={addImage}>
                  Upload
                </button>
                <br />
                <span id="imageName"></span>
              </label>
            </div>
            {images.map((img) => (
              <img
                className="imgArea"
                src={URL.createObjectURL(
                  new Blob([img], {
                    type: "application/octet-stream",
                  })
                )}
                alt="images"
                width={"300px"}
                height={"300px"}
                style={{ margin: "-20rem 30rem" }}
              ></img>
            ))} */}

                {/* <div className="mb-2">
              <label htmlFor="photo" className="form-labeldash">
                Photo
              </label>
              <input
                type="file"
                className="form-control"
                id="photo"
                name="photo"
                value={inputs.photo}
                // onChange={handleChange}
                onChange={(e) =>
                  setInputs(
                    (prevState) => (
                      {
                        ...prevState,
                        photo: e.target.files[0],
                      },
                      { handleChange }
                    )
                  )
                }
              />
            </div> */}

                <div className="mb-2">
                  <label htmlFor="photo" className="form-labeldash">
                    Incident Photo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="photo"
                    name="photo"

                    // onChange={(e) => {
                    //   setInputs((prevState) => ({
                    //     ...prevState,
                    //     photo: e.target.files[0],
                    //   }));
                    // }}
                  />
                </div>

                {/* Submit button */}
                <div className="btn-container">
                  <button
                    type="submit"
                    className="reportSubmitBtn"
                    //   disabled={isLoading}
                  >
                    Update Report
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>{" "}
      </div>
    </Wrapper>
  );
};

export default UpdateReport;
