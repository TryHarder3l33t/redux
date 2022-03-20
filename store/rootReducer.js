import { combineReducers } from "redux";
import normUserReducer from "./normUserReducer";
import reducer from "./userReducer";

const rootReducer = combineReducers({
  normUser: normUserReducer,
  user: reducer,
});

export default rootReducer;
