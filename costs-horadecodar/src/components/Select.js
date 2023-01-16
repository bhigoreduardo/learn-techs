import "./Select.css";

const Select = ({ id, name, label, disabledText, handleOnChange, options }) => {
  return (
    <div className="select-box">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} onChange={(e) => handleOnChange(e)} defaultValue="selected">
        <option disabled value="selected">
          {disabledText}
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.nome}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
