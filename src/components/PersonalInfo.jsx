import { Next } from "./Buttons";
import FormHeader from "./FormHeader";

const FormInput = ({ labelText, inputType, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="text-marine-blue text-sm">{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        required
        autoComplete="no"
        className="px-3 py-2 border-2 rounded-md border-light-gray text-marine-blue cursor-pointer focus:outline-purplish-blue"
      />
    </div>
  );
};

const PersonalInfo = () => {
  return (
    <>
      <div className="form mx-4 md:m-0 px-5 py-7 md:p-0 rounded-lg md:rounded-none bg-white">
        <FormHeader
          title="Personal info"
          desc="Please provide your name, email address, and phone number."
        />
        <div className="form-inputs flex flex-col gap-5 mt-5">
          <FormInput
            inputType="text"
            placeholder="e.g. Stephen King"
            labelText="Name"
          />
          <FormInput
            inputType="email"
            placeholder="e.g. stephenking@lorem.com"
            labelText="Email Address"
          />
          <FormInput
            inputType="tel"
            placeholder="e.g. +1 234 567 890"
            labelText="Phone Number"
          />
        </div>
      </div>
      <div className="btns bg-white p-4 md:p-0 flex justify-end items-center">
        <Next />
      </div>
    </>
  );
};

export default PersonalInfo;
