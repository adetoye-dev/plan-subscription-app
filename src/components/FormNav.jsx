import { NavLink } from "react-router-dom";

const NavItem = ({ step, text, link }) => {
  return (
    <NavLink to={link}>
      {({ isActive }) => (
        <div className="flex gap-3 items-center text-white">
          <div
            className={
              isActive
                ? "btn rounded-full w-10 md:w-8 aspect-square flex items-center justify-center text-marine-blue bg-light-blue font-medium"
                : "btn rounded-full w-10 md:w-8 aspect-square flex items-center justify-center border-2 border-pastel-blue"
            }
          >
            {step}
          </div>
          <div className="info hidden md:block">
            <span className="text-xs text-light-blue">STEP {step}</span>
            <div className="uppercase font-bold text-sm">{text}</div>
          </div>
        </div>
      )}
    </NavLink>
  );
};

const FormNav = () => {
  return (
    <div className="md:h-full w-full flex justify-center md:justify-start md:flex-col gap-5 md:w-56 rounded-lg md:bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover p-7">
      <NavItem step="1" text="your info" link="/" />
      <NavItem step="2" text="select plan" link="/plans" />
      <NavItem step="3" text="add-ons" link="/add-ons" />
      <NavItem step="4" text="summary" link="/summary" />
    </div>
  );
};

export default FormNav;
