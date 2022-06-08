import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { buttonText, handleCount } = props;

  return (
    <button className="button" onClick={handleCount}>
      {buttonText}
    </button>
  );
};

export default Button;
