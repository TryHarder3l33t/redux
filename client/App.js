import React from "react";
import InputUsers from "./InputUsers";
import OwnPropsUser from "./OwnPropsUser";
import NormUser from "./NormUser";
import Users from "./Users";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Create from "./Create";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route component={Create} path="/create" exact />
        </div>
      </Router>

      <Users />
      <NormUser />
      <InputUsers />
      <OwnPropsUser />
      <OwnPropsUser userDrop />
    </div>
  );
};

export default App;
