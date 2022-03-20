//Action creator

const { ADD_NORM_USER } = require("./types");
const { ADD_USER_20 } = require("./types");

//Action creator is a function that returns an object with a type property
export const addNormUser = (number = 1) => {
  return {
    type: ADD_NORM_USER,
    payload: number,
  };
};
export const addUser20 = (number = 1) => {
  return {
    type: ADD_USER_20,
    payload: number,
  };
};
