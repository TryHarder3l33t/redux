import React from "react";
import { connect } from "react-redux";
import { addNormUser, addUser20 } from "../store/normUserActions";
addNormUser;

const OwnPropsUser = (props) => {
  return (
    <div>
      <h2>User - {props.opUser} </h2>
      <button onClick={() => props.addNormUser()}>Add {} Users</button>
    </div>
  );
};

//You can drop props in to reuse components with slight modifications ex card with a user also used on detail page if it has a bio
//looks like <OwnPropsUser />
//<OwnPropsUser userDrop />;
const mapStateToProps = (state, ownProps) => {
  const ownUserProp = ownProps.userDrop
    ? state.normUser.users20
    : state.normUser.normUsers;
  return {
    opUser: ownUserProp,
  };
};

//addUser is a action creator
//same idea just modified dispatch you can even do another dispatch based on the prop
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.userDrop
    ? () => dispatch(addUser20())
    : () => dispatch(addNormUser());
  return {
    addNormUser: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnPropsUser);
