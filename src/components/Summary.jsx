import FormHeader from "./FormHeader";
import { Prev, Confirm } from "./Buttons";
import { Navigate } from "react-router-dom";

const AddOnSummaryCard = ({ title, price }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="title text-cool-gray">{title}</p>
      <p className="price">{price}</p>
    </div>
  );
};

const Summary = () => {
  return (
    <>
      <div className="form mx-4 md:m-0 px-5 py-7 md:p-0 rounded-lg md:rounded-none bg-white">
        <FormHeader
          title="Finishing up"
          desc="Double-check everything looks OK before confirming."
        />
        <div className="summary-card p-3 md:p-5 bg-magnolia mt-3 md:mt-5 rounded-md text-marine-blue">
          <div className="selected-plan flex items-center justify-between">
            <div>
              <h1 className="title font-bold">Arcade (Monthly)</h1>
              <p className="change-plan text-sm text-cool-gray underline">
                Change
              </p>
            </div>
            <div className="price font-bold">$9/mo</div>
          </div>
          <hr className="my-5 border-cool-gray" />
          <div className="selected-add-ons text-sm flex flex-col gap-3 font-medium">
            <AddOnSummaryCard title="Online service" price="+$1/mo" />
            <AddOnSummaryCard title="Larger Storage" price="+$2/mo" />
          </div>
        </div>
        <div className="total flex items-center justify-between mt-5">
          <p className="text-cool-gray">Total (per month)</p>
          <p className="font-bold text-lg text-purplish-blue">+$12/mo</p>
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
