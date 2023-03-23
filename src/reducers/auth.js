import { authTypes } from "../actions/types";

const initialState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: false,
  loading: null,
  user: null,
  errors: []
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_FAIL:
    case authTypes.REGISTER_FAIL:
    case authTypes.AUTH_ERROR:
    case authTypes.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        errors: payload
      }
    case authTypes.LOGIN_SUCCESS:
    case authTypes.REGISTER_SUCCESS:
    case authTypes.USER_LOADED:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        errors: []
      }
    default:
      return state;
  }
}

export default authReducer;