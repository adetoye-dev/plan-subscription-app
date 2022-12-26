import { Next } from "./Buttons";
import FormHeader from "./FormHeader";

const PersonalInfo = () => {
  return (
    <>
      <div className="form mx-4 md:m-0 px-5 py-7 md:p-0 rounded-lg md:rounded-none bg-white">
        <FormHeader
          title="Personal info"
          desc="Please provide your name, email address, and phone number."
        />
      </div>
      <div className="btns bg-white p-4 md:p-0 flex justify-end items-center">
        <Next />
      </div>
    </>
  );
};

export default PersonalInfo;
