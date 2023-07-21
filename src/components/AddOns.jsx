import FormHeader from "./FormHeader";
import { Prev, Next } from "./Buttons";
import { useUserAddOns } from "../contexts/userAddOn";
import { useUserPlans } from "../contexts/userPlan";

const AddOnCard = ({ title, price, desc, selected, toggleSelect }) => {
  return (
    <div
      onClick={() => toggleSelect(title)}
      className={`flex items-center gap-3 hover:border-purplish-blue text-xs p-3 border-2 rounded-md cursor-pointer ${
        selected ? "border-purplish-blue bg-magnolia" : "border-light-gray"
      } `}
    >
      <div
        className={`checkmark w-5 aspect-square rounded-sm ${
          selected
            ? "bg-[url('/images/icon-checkmark.svg')] bg-purplish-blue bg-no-repeat bg-center bg-[length:20px_10px]"
            : "border-2 border-light-gray"
        } `}
      ></div>
      <div className="details">
        <p className="title text-sm font-bold text-marine-blue">{title}</p>
        <p className="desc text-cool-gray">{desc}</p>
      </div>
      <div className="pricing ml-auto text-purplish-blue">{price}</div>
    </div>
  );
};

const AddOns = () => {
  const { showMonthlyPlan } = useUserPlans();
  const { addOns, toggleSelect } = useUserAddOns();
  return (
    <>
      <div className="form mx-4 md:m-0 px-5 py-7 md:p-0 rounded-lg md:rounded-none bg-white">
        <FormHeader
          title="Pick add-ons"
          desc="Add-ons help enhance your gaming experience."
        />
        <div className="add-ons md:mt-5 mt-3">
          <div className="monthly-add-ons flex flex-col gap-3">
            {addOns.map((item) => {
              return (
                <AddOnCard
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  price={
                    showMonthlyPlan
                      ? `+$${item.price.monthly}/mo`
                      : `+$${item.price.yearly}/yr`
                  }
                  selected={item.selected}
                  toggleSelect={toggleSelect}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="btns bg-white p-4 md:p-0 flex justify-between items-center">
        <Prev link="/plans" />
        <Next link="/summary" />
      </div>
    </>
  );
};

export default AddOns;
