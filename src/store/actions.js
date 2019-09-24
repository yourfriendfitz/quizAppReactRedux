import * as actionTypes from "./actionTypes";
const authAction = (payload = {}) => ({
  type: actionTypes.AUTH,
  payload
});
const unauthAction = (payload = {}) => ({
  type: actionTypes.UNAUTH,
  payload
});
const passAction = payload => ({
  type: actionTypes.PASS,
  payload
});
const allPassAction = (payload = {}) => ({
  type: actionTypes.ALL_PASS,
  payload
});
const viewWinAction = (payload = {}) => ({
  type: actionTypes.VIEW_WIN,
  payload
});
const returnAction = (payload = {}) => ({
  type: actionTypes.RETURN,
  payload
});
const submitNameAction = (payload = {}) => ({
  type: actionTypes.SUBMIT_NAME,
  payload
});
export {
  authAction,
  unauthAction,
  passAction,
  allPassAction,
  viewWinAction,
  returnAction,
  submitNameAction
};
