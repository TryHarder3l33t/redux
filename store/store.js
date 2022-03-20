//ES6
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

//The provider takes it in as a prop and provides it to the app
export default store;
