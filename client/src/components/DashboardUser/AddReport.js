import React, { useState } from "react";
import Alert from "../../DashComponent/Alert";
import { useAppContext } from "../../Context/appContext";
import Wrapper from "../../wrappers/ReportForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const AddReport = () => {
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
    severityConditionOptions,
    photo,
    // handleChange,
    clearValues,
    createReport,
  } = useAppContext();

  // const [showAlert, setShowAlert] = useState(false);

  const [msg, setMsg] = useState("");

  const [image, setImage] = useState("");
  // console.log(image, 12);
  // const [images, setImages] = useState([]);
  // const addImage = () => {
  //   console.log(image);
  //   setImages([...images, image]);
  //   console.log(images);
  // };

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    typeofIncident: "",
    actDescription: "",
    reportedDateTime: "",
    location: "",
    reportedBy: "",
    severityCondition: "",
    status: "Registered",
    photo: "",
  });

  // const [selectedType, setSelectedType] = useState("");

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // setSelectedType(e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/api/reports", {
        typeofIncident: String(inputs.typeofIncident),
        actDescription: String(inputs.actDescription),
        reportedDateTime: String(inputs.reportedDateTime),
        location: String(inputs.location),
        reportedBy: String(inputs.reportedBy),
        severityCondition: String(inputs.severityCondition),
        status: String(inputs.status),
        photo: String(inputs.photo),
      })
      .then((res) => setMsg(res.data.resMesg));
  };

  // const sendReques t = async () => {
  //   const formData = new FormData();
  //   formData.append("typeofIncident", String(inputs.typeofIncident));
  //   formData.append("actDescription", String(inputs.actDescription));
  //   formData.append("reportedDateTime", String(inputs.reportedDateTime));
  //   formData.append("location", String(inputs.location));
  //   formData.append("reportedBy", String(inputs.reportedBy));
  //   formData.append("severityCondition", "Low");
  //   formData.append("status", String(inputs.status));
  //   formData.append("photo", String(inputs.photo));

  //   await axios
  //     .post("http://localhost:5000/api/reports", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => setMsg(res.data.resMesg));
  // };

  // const imageUpload = (event) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [event.target.photo]: event.target.files[0],
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    sendRequest()
      .then(() => {
        toast.success("Report created successfully! An email is also sent");
        setTimeout(() => {
          navigate("/private/allReport");
        }, 6000); // 5000 milliseconds = 5 seconds
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to create report. Please fill all fields");
      });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch("/api/private/addReport", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(inputs),
  //     });
  //     if (response.ok) {
  //       toast.success("Report created successfully");
  //       // Do something else, like redirecting to a different page
  //     } else {
  //       toast.error("An error occurred while creating the report");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("An error occurred while creating the report");
  //   }
  // };

  const [photoFile, setPhotoFile] = useState(null);
  const handlePhotoChange = (e) => {
    setPhotoFile(e.target.files[0]);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setInputs({ ...inputs, photo: base64 });
  };

  return (
    <Wrapper>
      <ToastContainer />

      <div className="container">
        <div className="row">
          <form className="form" onSubmit={handleSubmit}>
            <div class="col-md-12">
              <h3 style={{ letterSpacing: "0.5rem" }}>
                {isEditing ? "edit report" : "Add Report"}
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
                  type="message"
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
                  <option value="" disabled>
                    Select an incident Type
                  </option>

                  {typeofIncidentOptions.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
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
                  defaultValue="Registered"
                  name="status"
                  disabled
                >
                  {statusOptions.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Reported Date Time */}
              <div className="  mb-2 ">
                <label htmlFor="name" className="form-labeldash">
                  Reported Date and Time
                </label>
                <div className="row">
                  <Form.Group controlId="dob">
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
                  <option value="" disabled>
                    Select severity of incident
                  </option>

                  {severityConditionOptions.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* attach photo */}

              <div className="mb-2">
                <label htmlFor="photo" className="form-labeldash">
                  Incident Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="photo"
                  name="photo"
                  onChange={(e) => handleFileUpload(e)}
                  // onChange={(e) => setImage(e.target.files[0])}
                  // onChange={imageUpload}
                />
              </div>

              {/* Submit button */}
              <div className="btn-container">
                <button
                  type="submit"
                  className="reportSubmitBtn"
                  disabled={isLoading}
                >
                  Submit
                </button>
                <button
                  // type="submit"
                  className="reportSubmitBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    clearValues();
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>{" "}
      </div>
    </Wrapper>
  );
};

export default AddReport;
// style={{ margin: "8rem 0rem" }}
