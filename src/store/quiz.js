import * as actionTypes from "./actionTypes";
const initialState = {
  jsPassed: false,
  ngPassed: false,
  rcPassed: false,
  dnPassed: false,
  vuPassed: false,
  viewWin: false
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
        default:
          break;
      }
      return { ...state };
    case actionTypes.VIEW_WIN:
      state.viewWin = true;
      return { ...state };
    case actionTypes.RETURN:
      state.viewWin = false;
      return { ...state };

    default:
      return state;
  }
};
