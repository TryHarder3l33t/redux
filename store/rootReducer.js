import { combineReducers } from "redux";
import userReducer from "./normUserReducer";
import reducer from "./userReducer";

const rootReducer = combineReducers({
  normUser: userReducer,
  user: userReducer,
});

export default rootReducer;
