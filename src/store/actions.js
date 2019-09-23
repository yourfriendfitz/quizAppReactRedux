import * as actionTypes from "./actionTypes";
const authAction = (payload = {}) => ({
  type: actionTypes.AUTH,
  payload
});
const unauthAction = (payload = {}) => ({
  type: actionTypes.UNAUTH,
  payload
});
export { authAction, unauthAction };
