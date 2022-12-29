import FormHeader from "./FormHeader";
import { Prev, Confirm } from "./Buttons";
import { Link, Navigate } from "react-router-dom";
import { useUserAddOns, useUserPlans } from "../contexts/FormContext";
import { userAddOns } from "../contexts/userAddOn";

const AddOnSummaryCard = ({ title, price }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="title text-cool-gray">{title}</p>
      <p className="price">{price}</p>
    </div>
  );
};

const Summary = () => {
  const { selectedPlans, showMonthlyPlan } = useUserPlans();
  const { selectedAddOns } = useUserAddOns();

  const AddAllPrices = (arr) => {
    let totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
      totalPrice += showMonthlyPlan
        ? arr[i].price.monthly
        : arr[i].price.yearly;
    }
    return totalPrice;
  };

  const totalAddOnPrices =
    selectedAddOns.length > 0 ? AddAllPrices(selectedAddOns) : 0;

  return (
    <>
      <div className="form mx-4 md:m-0 px-5 py-7 md:p-0 rounded-lg md:rounded-none bg-white">
        <FormHeader
          title="Finishing up"
          desc="Double-check everything looks OK before confirming."
        />
        <div className="summary-card p-3 md:p-5 bg-magnolia mt-3 md:mt-5 rounded-md text-marine-blue">
          {selectedPlans.length > 0 && (
            <div className="selected-plan flex items-center justify-between">
              <div>
                <h1 className="title font-bold capitalize">
                  {`${selectedPlans[0].plan} ${
                    showMonthlyPlan ? "(Monthly)" : "(Yearly)"
                  }`}
                </h1>
                <Link to="/plans">
                  <p className="change-plan text-sm text-cool-gray underline hover:text-purplish-blue">
                    Change
                  </p>
                </Link>
              </div>
              <div className="price font-bold">
                {showMonthlyPlan
                  ? `$${selectedPlans[0].price.monthly}/mo`
                  : `$${selectedPlans[0].price.yearly}/yr`}
              </div>
            </div>
          )}
          <hr className="my-5 border-cool-gray" />
          {selectedAddOns.length > 0 && (
            <div className="selected-add-ons text-sm flex flex-col gap-3 font-medium">
              {selectedAddOns.map((item) => {
                return (
                  <AddOnSummaryCard
                    key={item.title}
                    title={item.title}
                    price={
                      showMonthlyPlan
                        ? `+$${item.price.monthly}/mo`
                        : `+$${item.price.yearly}/yr`
                    }
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="total flex items-center justify-between mt-5">
          <p className="text-cool-gray">
            Total {showMonthlyPlan ? "(per month)" : "(per year)"}
          </p>
          {selectedPlans.length > 0 ? (
            <p className="font-bold text-lg text-purplish-blue">
              {showMonthlyPlan
                ? `+$${selectedPlans[0].price.monthly + totalAddOnPrices}`
                : `+$${selectedPlans[0].price.yearly + totalAddOnPrices}`}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="btns bg-white p-4 md:p-0 flex justify-between items-center">
        <Prev link="/add-ons" />
        <Confirm />
      </div>
    </>
  );
};

export default Summary;
