import React from "react";
import UserContext from "./userData";
import PlansContext from "./userPlan";
import AddOnsContext from "./userAddOn";

const AppContext = ({ children }) => {
  return (
    <UserContext>
      <PlansContext>
        <AddOnsContext>{children}</AddOnsContext>
      </PlansContext>
    </UserContext>
  );
};

export default AppContext;
