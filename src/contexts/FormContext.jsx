import React, { useContext, useState } from "react";

const userData = React.createContext();
const userPlans = React.createContext();
const userAddOns = React.createContext();

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
  const data = "hello world";
  const plans = "we have plans";
  const addOns = "selected AddOns";
  return (
    <userData.Provider value={[data, plans]}>
      <userPlans.Provider value={plans}>
        <userAddOns.Provider value={addOns}>{children}</userAddOns.Provider>
      </userPlans.Provider>
    </userData.Provider>
  );
};

export default FormContext;
