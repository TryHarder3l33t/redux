import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers, createUser } from "../store/userActions";

const Users = ({ fetchUsers, userData, createUser }) => {
  useEffect(() => {
    //[]makes it only dispatch once
    fetchUsers();
  }, []);

  const submit = (ev) => {
    ev.preventdefault();
    createUser(name);
  };
  const [name, setName] = useState("Eric");
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
      <h1>Hello</h1>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          createUser(name);
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button> Add {name}</button>
      </form>
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
    createUser: (name) => {
      //good her
      console.log(name);
      dispatch(createUser(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
