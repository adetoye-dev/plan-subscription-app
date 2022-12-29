import React, { useContext, useState } from "react";
import { userPlans } from "./userPlan";
import PlansContext from "./userPlan";
import { userAddOns } from "./userAddOn";
import AddOnsContext from "./userAddOn";

const userData = React.createContext();

export const useUserData = () => {
  return useContext(userData);
};
export const useUserPlans = () => {
  return useContext(userPlans);
};
export const useUserAddOns = () => {
  return useContext(userAddOns);
};

const FormContext = ({ children }) => {
  const [data, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleUserDataChange = (type, input) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, [type]: input };
    });
  };

  return (
    <userData.Provider value={[data, handleUserDataChange]}>
      <PlansContext>
        <AddOnsContext>{children}</AddOnsContext>
      </PlansContext>
    </userData.Provider>
  );
};

export default FormContext;
