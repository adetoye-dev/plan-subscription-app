import React from "react";
import { useState } from "react";

export const userPlans = React.createContext();

const PlansContext = ({ children }) => {
  const [showMonthlyPlan, setShowMonthlyPlan] = useState(true);

  const [plans, setMonthlyPlans] = useState([
    {
      plan: "arcade",
      price: { monthly: "$9/mo", yearly: "$90/yr" },
      icon: "icon-arcade.svg",
      selected: false,
    },
    {
      plan: "advanced",
      price: { monthly: "$12/mo", yearly: "$120/yr" },
      icon: "icon-advanced.svg",
      selected: false,
    },
    {
      plan: "pro",
      price: { monthly: "$15/mo", yearly: "$150/yr" },
      icon: "icon-pro.svg",
      selected: false,
    },
  ]);

  const toggleSelect = (planName) => {
    // console.log(planName);
    setMonthlyPlans((prevMonthlyPlan) => {
      return prevMonthlyPlan.map((item) => {
        return item.plan === planName
          ? { ...item, selected: !item.selected }
          : { ...item, selected: false };
      });
    });
  };

  const togglePlans = () => {
    setShowMonthlyPlan((prevMonthlyPlan) => !prevMonthlyPlan);
  };
  return (
    <userPlans.Provider
      value={{
        plans: plans,
        togglePlans: togglePlans,
        showMonthlyPlan: showMonthlyPlan,
        toggleSelect: toggleSelect,
      }}
    >
      {children}
    </userPlans.Provider>
  );
};

export default PlansContext;
