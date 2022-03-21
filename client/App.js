import React from "react";
import InputUsers from "./InputUsers";
import OwnPropsUser from "./OwnPropsUser";
import NormUser from "./NormUser";
import Users from "./Users";
import { Route } from "react-router-dom";
import Create from "./Create";
import Detail from "./Details";

const App = () => {
  return (
    <div>
      <div>
        <Route component={Users} path="/" exact />
        <Route component={Create} path="/create" exact />
        <Route component={Detail} path="/detail/:id" exact />
      </div>

      {/* <Users /> */}
      {/* <NormUser />
      <InputUsers />
      <OwnPropsUser />
      <OwnPropsUser userDrop /> */}
    </div>
  );
};

export default App;
