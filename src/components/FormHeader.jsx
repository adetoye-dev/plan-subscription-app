const FormHeader = ({ title, desc }) => {
  return (
    <>
      <h1 className="form-title text-3xl font-bold mb-2">{title}</h1>
      <p className="desc text-sm">{desc}</p>
    </>
  );
};

export default FormHeader;
