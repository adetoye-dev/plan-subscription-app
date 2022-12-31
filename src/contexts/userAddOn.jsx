import React, { useState } from "react";

export const userAddOns = React.createContext();

const AddOnsContext = ({ children }) => {
  const [addOns, setAddOns] = useState([
    {
      title: "Online service",
      desc: "Access to multiplayer games",
      price: { monthly: 1, yearly: 10 },
      selected: true,
    },
    {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: { monthly: 2, yearly: 20 },
      selected: true,
    },
    {
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: { monthly: 2, yearly: 20 },
      selected: false,
    },
  ]);

  const selectedAddOns = addOns.filter((item) => item.selected === true);

  const toggleSelect = (addOn) => {
    setAddOns((prevAddOns) => {
      return prevAddOns.map((item) => {
        return item.title === addOn
          ? { ...item, selected: !item.selected }
          : { ...item };
      });
    });
  };

  return (
    <userAddOns.Provider
      value={{
        addOns: addOns,
        toggleSelect: toggleSelect,
        selectedAddOns: selectedAddOns,
      }}
    >
      {children}
    </userAddOns.Provider>
  );
};

export default AddOnsContext;
