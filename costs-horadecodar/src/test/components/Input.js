function Input({ id, label, type, placeholder, handleOnChange, value }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} onChange={(e) => handleOnChange(e.target.value)} value={value} />
    </>
  );
}
export default Input;
