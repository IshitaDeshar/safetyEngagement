import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";

const Alert = () => {
  const handleToast = () => {
    toast.error("Please fill out all the required fields.");
  };
  return (
    <div className="alert alert-danger">
      Please fill out all the required fields.
    </div>
  );
};

export default Alert;
