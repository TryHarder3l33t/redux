import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/userActions";

const Users = ({ fetchUsers, userData }) => {
  useEffect(() => {
    //[]makes it only dispatch once
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h1>Loading...</h1>
  ) : userData.error ? (
    <h2>We Didn't make It :( {userData.error}</h2>
  ) : (
    <div>
      <h2>Users</h2>

      <ul>
        {userData &&
          userData.users &&
          userData.users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
