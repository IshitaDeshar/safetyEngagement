import {
  TOGGLE_SIDEBAR,
  HANDLE_CHANGE,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  CLEAR_VALUES,
  CREATE_REPORT_BEGIN,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
} from "./actions.js";

import initialState from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === CREATE_REPORT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_REPORT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "sucess",
      alertText: "New Report Created!",
    };
  }
  if (action.type === CREATE_REPORT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }

  if (action.type === SHOW_STATS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    };
  }

  switch (action.type) {
    // case TOGGLE_SIDEBAR:
    //   return {
    //     ...state,
    //     showSidebar: !state.showSidebar,
    //   };
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case CLEAR_VALUES:
      const initialState = {
        isEditing: false,
        editReportId: "",
        typeofIncident: "Unsafe Condition",
        location: "",
        actDescription: "",
        reportedDateTime: "",
        responsiblePerson: "",
        status: "completed",
        severityCondition: "low",
        reportedBy: "",
        photo: "",
      };
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
// throw new Error (`no such action: ${action.type}`)

export default reducer;
