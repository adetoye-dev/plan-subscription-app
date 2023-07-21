import { useUserPlans } from "../contexts/userPlan";
import { Prev, Next } from "./Buttons";
import FormHeader from "./FormHeader";

const PlanCard = ({ icon, plan, price, discount, selected, toggleSelect }) => {
  return (
    <div
      className={`flex p-3 w-full border-2 ${
        selected ? "border-purplish-blue" : "border-light-gray"
      } hover:border-purplish-blue rounded-md gap-5 items-center cursor-pointer md:flex-col md:items-start md:gap-7`}
      onClick={() => toggleSelect(plan)}
    >
      <div className="icon">
        <img src={`/images/${icon}`} alt="plan-icon" />
      </div>
      <div className="content">
        <p className="plan capitalize font-bold text-marine-blue">{plan}</p>
        <p className="price text-sm text-cool-gray">{price}</p>
        {discount && (
          <p className="discount text-xs text-marine-blue">2 months free</p>
        )}
      </div>
    </div>
  );
};

const Plans = () => {
  const { plans, togglePlans, showMonthlyPlan, toggleSelect } = useUserPlans();

  return (
    <>
      <div className="form mx-4 md:m-0 px-5 py-7 md:p-0 rounded-lg md:rounded-none bg-white">
        <FormHeader
          title="Select your plan"
          desc="You have the option of monthly or yearly billing."
        />
        <div className="plans-container mt-5 md:mt-8">
          <div className="flex flex-col md:flex-row gap-3">
            {plans.map((item) => {
              return (
                <PlanCard
                  key={item.plan}
                  plan={item.plan}
                  price={
                    showMonthlyPlan
                      ? `$${item.price.monthly}/mo`
                      : `$${item.price.yearly}/yr`
                  }
                  icon={item.icon}
                  discount={showMonthlyPlan ? false : true}
                  selected={item.selected}
                  toggleSelect={toggleSelect}
                />
              );
            })}
          </div>
        </div>
        <div className="toggle-plans font-medium text-sm flex items-center justify-center rounded-md mt-5 gap-6 py-3 bg-alabaster">
          <span
            className={showMonthlyPlan ? "text-marine-blue" : "text-cool-gray"}
          >
            Monthly
          </span>
          <button
            className={`${
              showMonthlyPlan ? "justify-start" : "justify-end"
            } toggle-btn p-0.5 w-9 rounded-full flex bg-marine-blue`}
            onClick={togglePlans}
          >
            <span className="indicator w-3.5 aspect-square rounded-full bg-white block"></span>
          </button>
          <span
            className={showMonthlyPlan ? "text-cool-gray" : "text-marine-blue"}
          >
            Yearly
          </span>
        </div>
      </div>
      <div className="btns bg-white p-4 md:p-0 flex justify-between items-center">
        <Prev link="/" />
        <Next link="/add-ons" />
      </div>
    </>
  );
};

export default Plans;
