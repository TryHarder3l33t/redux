import React from "react";
import { connect } from "react-redux";
import { addNormUser } from "../store/normUserActions";

const NormUser = (props) => {
  return (
    <div>
      <h2>Users - {props.numberOfUsers}</h2>
      <button onClick={props.addNormUser}>Add A User</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfUsers: state.normUser.normUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //addNormUser is a action creator
    addNormUser: () => dispatch(addNormUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NormUser);

//If you do not want to subscribe to the store
// export default connect(null, mapDispatchToProps)(NormUsers);
