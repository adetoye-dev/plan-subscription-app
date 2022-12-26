import { Prev, Next } from "./Buttons";
import FormHeader from "./FormHeader";

const Plans = () => {
  return (
    <>
      <div className="form mx-4 md:m-0 px-5 py-7 md:p-0 rounded-lg md:rounded-none bg-white">
        <FormHeader
          title="Select your plan"
          desc="You have the option of monthly or yearly billing."
        />
      </div>
      <div className="btns bg-white p-4 md:p-0 flex justify-between items-center">
        <Prev />
        <Next />
      </div>
    </>
  );
};

export default Plans;
