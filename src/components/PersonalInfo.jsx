import { Next } from "./Buttons";

const PersonalInfo = () => {
  return (
    <>
      <div className="form mx-4 md:m-0 px-5 py-7 md:p-0 rounded-lg md:rounded-none bg-white">
        <h1 className="form-title text-3xl font-bold mb-2">Personal info</h1>
        <p className="desc text-sm">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="btns bg-white p-4 md:p-0 flex justify-end items-center">
        <Next />
      </div>
    </>
  );
};

export default PersonalInfo;
