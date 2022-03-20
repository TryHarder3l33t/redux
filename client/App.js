import React from "react";
import InputUsers from "./InputUsers";
import OwnPropsUser from "./OwnPropsUser";
import NormUser from "./NormUser";

const App = () => {
  return (
    <div>
      <NormUser />
      <InputUsers />
      <OwnPropsUser />
      <OwnPropsUser userDrop />
    </div>
  );
};

export default App;
