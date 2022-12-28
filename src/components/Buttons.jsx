import { Link } from "react-router-dom";

export const Next = ({ link, action }) => {
  return (
    <Link to={link}>
      <div
        className="next px-4 py-2 text-white bg-marine-blue rounded-md cursor-pointer"
        onClick={action}
      >
        Next Step
      </div>
    </Link>
  );
};

export const Prev = ({ link }) => {
  return (
    <Link to={link}>
      <div className="prev text-cool-gray cursor-pointer">Go Back</div>
    </Link>
  );
};

export const Confirm = ({ action }) => {
  return (
    <div
      className="confirm px-4 py-2 text-white bg-purplish-blue rounded-md cursor-pointer"
      onClick={action}
    >
      Confirm
    </div>
  );
};
