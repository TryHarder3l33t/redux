import {
  FAILURE,
  REQUEST,
  FETCH_USER_SUCCESS,
  CREATE_USER_SUCCESS,
} from "./types";

import axios from "axios";

export const request = () => {
  return {
    type: REQUEST,
  };
};
const failure = (error) => {
  return {
    type: FAILURE,
    payload: error,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

//async action creator aka thunk
//Returns functions (dispatch)=> and takes dispatch as an argument vs normal action creators that return actions {}
//https://jsonplaceholder.typicode.com/users
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(request());
      setTimeout({}, 500);
      const { data } = await axios.get("api/users");
      const users = data;
      dispatch(fetchUsersSuccess(users));
    } catch (err) {
      const errMsg = err.message;
      return dispatch(failure(errMsg));
    }
  };
};

const _createUser = (user) => {
  console.log(user);
  console.log(user);

  return {
    type: CREATE_USER_SUCCESS,
    payload: user,
  };
};

export const createUser = (name = "Unicorn default") => {
  return async (dispatch) => {
    try {
      dispatch(request());
      name = { name: name };
      const { data } = await axios.post("/api/users", name);

      dispatch(_createUser(data));
    } catch (err) {
      const errMsg = err.message;
      return dispatch(failure(errMsg));
    }
  };
};

export const deleteUser = () => {
  return async (dispatch) => {
    try {
    } catch (error) {
      const errMsg = err.message;
      return dispatch(failure(errMsg));
    }
  };
};
