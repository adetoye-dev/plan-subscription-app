import { Link } from "react-router-dom";
const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center md:h-full gap-5 mx-4 md:m-0 px-5 py-20 md:p-0 rounded-lg md:rounded-none bg-white">
      <div className="icon">
        <img src="/images/icon-thank-you.svg" alt="thank-you-icon" />
      </div>
      <h1 className="text-3xl font-bold text-marine-blue">Thank you!</h1>
      <p className="text-center text-cool-gray md:text-sm">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      <Link to="/" className="text-purplish-blue hover:text-marine-blue">
        <i className="fa-solid fa-house"></i>
        <span className="ml-1">Back to Home</span>
      </Link>
    </div>
  );
};

export default ThankYou;
