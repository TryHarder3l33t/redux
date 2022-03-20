import React, { useState } from "react";
//import { addNormUser } from "../store";
import { connect } from "react-redux";
import { addNormUser } from "../store/normUserActions";

const InputUsers = (props) => {
  //set number and setNumber to 2 initally in local state
  const [number, setNumber] = useState(2);
  return (
    <div>
      <h2>Users - {props.numberOfUsers}</h2>

      <input
        type="text"
        value={number}
        onChange={(ev) => setNumber(ev.target.value)}
      ></input>
      <button onClick={() => props.addNormUser(number)}>
        Add {number} Users
      </button>
    </div>
  );
};

//map that props you passed in to state
const mapStateToProps = (state) => {
  return {
    numberOfUsers: state.normUser.normUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //addUser is a action creator
    addNormUser: (number) => dispatch(addNormUser(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputUsers);
