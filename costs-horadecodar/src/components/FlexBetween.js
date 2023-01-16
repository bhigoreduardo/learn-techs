const FlexBetween = (props) => {
  return <section className={`container ${props.flexDirection} ${props.alignItems}`}>{props.children}</section>;
};
export default FlexBetween;
