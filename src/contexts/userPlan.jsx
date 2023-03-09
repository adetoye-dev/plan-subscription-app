import React from "react";
import { useState, useMemo } from "react";

export const userPlans = React.createContext();

const PlansContext = ({ children }) => {
  const [showMonthlyPlan, setShowMonthlyPlan] = useState(true);

  const [plans, setMonthlyPlans] = useState([
    {
      plan: "basic",
      price: { monthly: 9, yearly: 90 },
      icon: "icon-arcade.svg",
      subscriptionId: {
        monthly: "PLN_rlcxuq41da952gg",
        yearly: "PLN_5ml5r116jgrv97a",
      },
      selected: true,
    },
    {
      plan: "pro",
      price: { monthly: 12, yearly: 120 },
      icon: "icon-advanced.svg",
      subscriptionId: {
        monthly: "PLN_4m4jpyidpw4f0mn",
        yearly: "PLN_nlcj0o6kyui7xno",
      },
      selected: false,
    },
    {
      plan: "advanced",
      price: { monthly: 15, yearly: 150 },
      icon: "icon-pro.svg",
      subscriptionId: {
        monthly: "PLN_3qjh3bobanyt2mz",
        yearly: "PLN_1o1w8vltxo1kiju",
      },
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

  const contextValues = useMemo(
    () => ({
      plans: plans,
      togglePlans: togglePlans,
      showMonthlyPlan: showMonthlyPlan,
      toggleSelect: toggleSelect,
      selectedPlans: selectedPlans,
    }),
    [plans, showMonthlyPlan]
  );

  return (
    <userPlans.Provider value={contextValues}>{children}</userPlans.Provider>
  );
};

export default PlansContext;
