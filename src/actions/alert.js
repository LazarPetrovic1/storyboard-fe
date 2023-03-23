import { alertTypes } from "./types";

export const setAlert = (msg, alertType) => dispatch => {
  const id = crypto.randomUUID();
  dispatch({
    type: alertTypes.SET_ALERT,
    payload: { msg, alertType, id }
  });
}

export const removeAlert = (id) => dispatch => dispatch({ type: alertTypes.REMOVE_ALERT, payload: id });