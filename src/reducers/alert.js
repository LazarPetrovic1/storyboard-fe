import { alertTypes } from "../actions/types";
const initialState = [];

function alertReducer(state = initialState, { type, payload }) {
  switch (type) {
    case alertTypes.SET_ALERT:
      return [...state, payload];
    case alertTypes.REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default: return state;
  }
}

export default alertReducer;