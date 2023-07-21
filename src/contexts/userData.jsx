import React, { useContext, useState, useMemo } from "react";
import PlansContext from "./userPlan";
import AddOnsContext from "./userAddOn";

const userData = React.createContext();

export const useUserData = () => {
  return useContext(userData);
};

const UserContext = ({ children }) => {
  const [data, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleUserDataChange = (name, value) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, [name]: value };
    });
  };

  const contextValues = useMemo(() => [data, handleUserDataChange], [data]);

  return (
    <userData.Provider value={contextValues}>
      <PlansContext>
        <AddOnsContext>{children}</AddOnsContext>
      </PlansContext>
    </userData.Provider>
  );
};

export default UserContext;
