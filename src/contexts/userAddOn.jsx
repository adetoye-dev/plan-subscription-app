import React, { useState } from "react";

export const userAddOns = React.createContext();

const AddOnsContext = ({ children }) => {
  const [addOns, setAddOns] = useState([
    {
      title: "Online service",
      desc: "Access to multiplayer games",
      price: { monthly: "+$1/mo", yearly: "+$10/yr" },
      selected: false,
    },
    {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: { monthly: "+$2/mo", yearly: "+$20/yr" },
      selected: false,
    },
    {
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: { monthly: "+$2/mo", yearly: "+$20/yr" },
      selected: false,
    },
  ]);

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
    <userAddOns.Provider value={[addOns, toggleSelect]}>
      {children}
    </userAddOns.Provider>
  );
};

export default AddOnsContext;
