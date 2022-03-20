import React from "react";
import InputUsers from "./InputUsers";
import OwnPropsUser from "./OwnPropsUser";
import NormUser from "./NormUser";
import Users from "./Users";

const App = () => {
  return (
    <div>
      <Users />
      <NormUser />
      <InputUsers />
      <OwnPropsUser />
      <OwnPropsUser userDrop />
    </div>
  );
};

export default App;
