// import PropTypes from "prop-types";

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
      className={buttonText === reqType ? "selected" : null}
      type="button"
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
};
// Button.defaultProps = {
//   text: "Buton",
// };
// Button.prototype = {
//   text: PropTypes.string,
// };
export default Button;
