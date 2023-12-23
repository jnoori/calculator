import React from "react";
import "./Button.scss";

const Button = ({ value, type, onButtonClick }) => {
  const handleClick = () => {
    onButtonClick(value);
  };
  return (
    <div className="button" onClick={handleClick}>
      <button className={`button__input button__input--${type}`}>
        {value}
      </button>
    </div>
  );
};

export default Button;
