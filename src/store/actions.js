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
export { authAction, unauthAction, passAction, allPassAction };
