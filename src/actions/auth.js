import axios from "axios";
import { authTypes } from "./types"

export const loadUser = () => async dispatch => {
  try {
    if (localStorage.token) return dispatch({ type: authTypes.USER_LOADED, payload: localStorage.token });
    const res = await axios.get(process.env.REACT_APP_USER_LOADED_URL);
    await dispatch({ type: authTypes.USER_LOADED, payload: res.data });
  } catch (e) {
    await dispatch({ type: authTypes.CLEAR_PROFILE });
    await dispatch({ type: authTypes.AUTH_ERROR, payload: e });
  }
};

export const register = (body) => async dispatch => {
  try {
    const res = await axios.post(process.env.REACT_APP_REGISTER_URL, body);
    await dispatch({ type: authTypes.REGISTER_SUCCESS, payload: res.data });
    await dispatch(loadUser());
  } catch (e) {
    await dispatch({ type: authTypes.REGISTER_FAIL });
  }
}

export const login = ({ username, password }) => async dispatch => {
  const body = { username, password };
  try {
    const res = await axios.post(process.env.REACT_APP_LOGIN_URL, body);
    await dispatch({ type: authTypes.LOGIN_SUCCESS, payload: res.data });
    await dispatch(loadUser());
  } catch (e) {
    await dispatch({ type: authTypes.LOGIN_FAIL });
  }
}

export const logout = () => dispatch => dispatch({ type: authTypes.LOGOUT });