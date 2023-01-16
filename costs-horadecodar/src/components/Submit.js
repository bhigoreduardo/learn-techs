import "./Submit.css";

const Submit = ({ value }) => {
  return (
    <button className="submit" type="submit">
      {value}
    </button>
  );
};
export default Submit;
