const { ADD_NORM_USER } = require("./types");
const { ADD_USER_20 } = require("./types");

const initialState = {
  normUsers: 7,
  users20: 10,
};

//Function that takes a state and action and returns a new state
const normUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NORM_USER:
      return {
        ...state,
        normUsers: state.normUsers + +action.payload,
      };
    case ADD_USER_20:
      console.log("this is 20");
      return {
        ...state,
        users20: state.users20 + 7,
      };
    default:
      return state;
  }
};

export default normUserReducer;
