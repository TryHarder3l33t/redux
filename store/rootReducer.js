import { combineReducers } from "redux";
import userReducer from "./normUserReducer";

const rootReducer = combineReducers({ normUser: userReducer });

export default rootReducer;
