import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USER_SUCCESS,
} from "./types";

import axios from "axios";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//async action creator aka thunk
//Returns functions (dispatch)=> and takes dispatch as an argument vs normal action creators that return actions {}
//https://jsonplaceholder.typicode.com/users
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest);
      const { data } = await axios.get("api/users");
      const users = data;
      dispatch(fetchUsersSuccess(users));
    } catch (err) {
      const errMsg = err.message;
      return dispatch(fetchUsersFailure(errMsg));
    }
  };
};

// export const createUser = async(name) => {
//   return (
//     try {

//     } catch (error) {

//     }
//   )
// }
