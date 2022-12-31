import React from "react";
import { useState } from "react";

export const userPlans = React.createContext();

const PlansContext = ({ children }) => {
  const [showMonthlyPlan, setShowMonthlyPlan] = useState(true);

  const [plans, setMonthlyPlans] = useState([
    {
      plan: "arcade",
      price: { monthly: 9, yearly: 90 },
      icon: "icon-arcade.svg",
      selected: true,
    },
    {
      plan: "advanced",
      price: { monthly: 12, yearly: 120 },
      icon: "icon-advanced.svg",
      selected: false,
    },
    {
      plan: "pro",
      price: { monthly: 15, yearly: 150 },
      icon: "icon-pro.svg",
      selected: false,
    },
  ]);

  const selectedPlans = plans.filter((item) => item.selected === true);

  const toggleSelect = (planName) => {
    setMonthlyPlans((prevMonthlyPlan) => {
      return prevMonthlyPlan.map((item) => {
        return item.plan === planName
          ? { ...item, selected: true }
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
        selectedPlans: selectedPlans,
      }}
    >
      {children}
    </userPlans.Provider>
  );
};

export default PlansContext;
