import React, { useState, useReducer, useContext } from "react";
import axios from "axios";
import reducer from "./reducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import initialState from "./appContext";

import {
  TOGGLE_SIDEBAR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_REPORT_BEGIN,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
} from "./actions";

const initialState = {
  showAlert: false,
  alertText: "",
  alertType: "",
  showSidebar: false,
  isEditing: false,
  editReportId: "",
  typeofIncidentOptions: ["UnsafeCondition", "UnsafeAct", "Environmental"],
  typeofIncident: "UnsafeCondition",
  location: "",
  actDescription: "",
  reportedDateTime: "",
  responsiblePerson: "",
  statusOptions: ["Completed", "Registered"],
  status: "completed",
  severityConditionOptions: ["Low", "Minor", "Major", "Critical"],
  severityCondition: "low",
  reportedBy: "",
  photo: "",
  stats: {},
  monthlyApplications: [],
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: `${process.env.REACT_APP_API}/reports`,
  });

  // const displayAlert = () => {
  //   dispatch({ type: DISPLAY_ALERT });
  //   clearAlert();
  // };
  const displayAlert = () => {
    const message = "Please fill out all the required fields.";
    toast.error(message, {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
    });
    dispatch({ type: CLEAR_ALERT });
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createReport = async () => {
    dispatch({ type: CREATE_REPORT_BEGIN });
    try {
      const {
        typeofIncident,
        location,
        actDescription,
        reportedDateTime,
        // responsiblePerson,
        severityCondition,
        reportedBy,
        // photo,
      } = state;
      await authFetch.post("/reports", {
        typeofIncident,
        location,
        actDescription,
        reportedDateTime,
        // responsiblePerson,
        severityCondition,
        reportedBy,
        // photo,
      });
      dispatch({ type: CREATE_REPORT_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_REPORT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN });
    try {
      const { data } = await authFetch("/stats/:id");
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,
          monthlyApplications: data.monthlyApplications,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        displayAlert,
        handleChange,
        clearValues,
        createReport,
        showStats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext, AppContext };
