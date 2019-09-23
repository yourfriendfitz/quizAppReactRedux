import * as actionTypes from "./actionTypes";
const initialState = {
  jsPassed: false,
  ngPassed: false,
  rcPassed: false,
  dnPassed: false,
  vuPassed: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.PASS:
      switch (payload) {
        case "jsPassed":
          state.jsPassed = true;
          break;
        case "ngPassed":
          state.ngPassed = true;
          break;
        case "rcPassed":
          state.rcPassed = true;
          break;
        case "dnPassed":
          state.dnPassed = true;
          break;
        case "vuPassed":
          state.vuPassed = true;
          break;
      }
      return { ...state};

    default:
      return state;
  }
};
