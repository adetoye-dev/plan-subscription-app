import { Next } from "./Buttons";
import FormHeader from "./FormHeader";
import { useUserData } from "../contexts/FormContext";

const PersonalInfo = () => {
  return (
    <>
      <div className="form mx-4 md:m-0 px-5 py-7 md:p-0 rounded-lg md:rounded-none bg-white">
        <FormHeader
          title="Personal info"
          desc="Please provide your name, email address, and phone number."
        />
        <div className="form-inputs flex flex-col gap-5 mt-5">
          <div className="flex flex-col">
            <label className="text-marine-blue text-sm">Name</label>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              required
              autoComplete="no"
              className="px-3 py-2 border-2 rounded-md border-light-gray text-marine-blue cursor-pointer focus:outline-purplish-blue"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-marine-blue text-sm">Email Address</label>
            <input
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              required
              autoComplete="no"
              className="px-3 py-2 border-2 rounded-md border-light-gray text-marine-blue cursor-pointer focus:outline-purplish-blue"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-marine-blue text-sm">Phone Number</label>
            <input
              type="tel"
              placeholder="e.g. +1 234 567 890"
              required
              autoComplete="no"
              className="px-3 py-2 border-2 rounded-md border-light-gray text-marine-blue cursor-pointer focus:outline-purplish-blue"
            />
          </div>
        </div>
      </div>
      <div className="btns bg-white p-4 md:p-0 flex justify-end items-center">
        <Next />
      </div>
    </>
  );
};

export default PersonalInfo;
