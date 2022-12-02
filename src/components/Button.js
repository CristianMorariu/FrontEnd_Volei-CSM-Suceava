import PropTypes from "prop-types";

const Button = ({ text }) => {
  const Click = () => {
    console.log("click");
  };
  return (
    <button onClick={Click} className="btn">
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "Buton",
};
Button.prototype = {
  text: PropTypes.string,
};
export default Button;
