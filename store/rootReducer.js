import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import normUserReducer from "./normUserReducer";
import reducer from "./userReducer";

const rootReducer = combineReducers({
  detail: detailReducer,
  normUser: normUserReducer,
  user: reducer,
});

export default rootReducer;
