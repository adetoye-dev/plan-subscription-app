const NavItem = ({ step, text }) => {
  return (
    <div className="flex gap-3 items-center text-white">
      <div className="btn rounded-full w-10 md:w-8 aspect-square flex items-center justify-center border-2 border-white">
        {step}
      </div>
      <div className="info hidden md:block">
        <span className="text-sm">STEP {step}</span>
        <div className="uppercase font-bold">{text}</div>
      </div>
    </div>
  );
};

const FormNav = () => {
  return (
    <div className="md:h-full w-full flex justify-center md:justify-start md:flex-col gap-5 md:w-56 rounded-lg md:bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover p-7">
      <NavItem step="1" text="your info" />
      <NavItem step="2" text="select plan" />
      <NavItem step="3" text="add-ons" />
      <NavItem step="4" text="summary" />
    </div>
  );
};

export default FormNav;
