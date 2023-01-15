import PropTypes from "prop-types";

function PropsType({ marca, lancamento }) {
  return (
    <div>
      <h2>Props Type</h2>
      <p>Marca: {marca}</p>
      <p>Lançamento: {lancamento}</p>
    </div>
  );
}

PropsType.propTypes = {
  marca: PropTypes.string.isRequired,
  lancamento: PropTypes.number.isRequired,
};

PropsType.defaultProps = {
  marca: "No content",
  lancamento: 0,
};

export default PropsType;
