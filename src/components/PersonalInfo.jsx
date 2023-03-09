import { Next } from "./Buttons";
import FormHeader from "./FormHeader";
import { useUserData } from "../contexts/FormContext";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import emailValidation from "../apis/emailValidation";

const PersonalInfo = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [userData, setUserData] = useUserData();
  const [invalidInput, setInvalidInput] = useState(false);
  const [allValidInputs, setAllValidInputs] = useState(false);

  const validateEmail = async (userEmail) => {
    const response = await emailValidation
      .get("/", {
        params: {
          email: userEmail,
        },
      })
      .catch((err) => console.log(err.response.data.error.message));

    setIsValidEmail(response.data.is_smtp_valid.value);
    return response.data.is_smtp_valid.value;
  };

  const validateInput = async () => {
    if (
      userData.name.length <= 0 ||
      !(await validateEmail(userData.email)) ||
      userData.phone.length <= 0
    ) {
      setInvalidInput(true);
    } else {
      setAllValidInputs(true);
    }
  };

  return (
    <>
      {allValidInputs && <Navigate to="/plans" />}
      <div className="form mx-4 md:m-0 px-5 py-7 md:p-0 rounded-lg md:rounded-none bg-white">
        <FormHeader
          title="Personal info"
          desc="Please provide your name, email address, and phone number."
        />
        <div className="form-inputs flex flex-col gap-5 mt-5">
          <div className="flex flex-col">
            <label className="text-marine-blue text-sm font-semibold flex items-center justify-between">
              <span>Name</span>
              {invalidInput && userData.name <= 0 ? (
                <span className="text-strawberry-red">
                  This field is required
                </span>
              ) : (
                ""
              )}
            </label>
            <input
              type="text"
              value={userData.name}
              name="name"
              onChange={(e) => setUserData(e.target.name, e.target.value)}
              placeholder="e.g. Stephen King"
              className={`px-3 py-2 border-2 rounded-md ${
                invalidInput && userData.name <= 0
                  ? "border-strawberry-red"
                  : "border-light-gray"
              } text-marine-blue cursor-pointer caret-marine-blue focus:outline-purplish-blue`}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-marine-blue text-sm font-semibold flex items-center justify-between">
              <span>Email Address</span>
              {invalidInput && !isValidEmail ? (
                <span className="text-strawberry-red">
                  Enter a valid email address
                </span>
              ) : (
                ""
              )}
            </label>
            <input
              type="email"
              value={userData.email}
              name="email"
              onChange={(e) => setUserData(e.target.name, e.target.value)}
              placeholder="e.g. stephenking@lorem.com"
              className={`px-3 py-2 border-2 rounded-md ${
                invalidInput && userData.email <= 0
                  ? "border-strawberry-red"
                  : "border-light-gray"
              } text-marine-blue cursor-pointer caret-marine-blue focus:outline-purplish-blue`}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-marine-blue text-sm font-semibold flex items-center justify-between">
              <span>Phone Number</span>
              {invalidInput && userData.phone <= 0 ? (
                <span className="text-strawberry-red">
                  This field is required
                </span>
              ) : (
                ""
              )}
            </label>
            <input
              type="tel"
              value={userData.phone}
              name="phone"
              onChange={(e) => setUserData(e.target.name, e.target.value)}
              placeholder="e.g. +1 234 567 890"
              className={`px-3 py-2 border-2 rounded-md ${
                invalidInput && userData.phone <= 0
                  ? "border-strawberry-red"
                  : "border-light-gray"
              } text-marine-blue cursor-pointer caret-marine-blue focus:outline-purplish-blue`}
            />
          </div>
        </div>
      </div>
      <div className="btns bg-white p-4 md:p-0 flex justify-end items-center">
        <Next action={validateInput} />
      </div>
    </>
  );
};

export default PersonalInfo;
