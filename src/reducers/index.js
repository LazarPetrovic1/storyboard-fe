import { combineReducers } from "redux";
import auth from "./auth";
import stories from "./stories";
import alert from "./alert";

export default combineReducers({ auth, stories, alert });