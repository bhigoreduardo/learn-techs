import "./Input.css";

const Input = ({ id, type, name, placeholder, value, handleOnChange, label }) => {
  return (
    <div className="input-box">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
};
export default Input;
