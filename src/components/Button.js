import React, { useState } from "react";
import btnStyles from "../styles/Button.module.css";
const Button = ({ value, onClick, style }) => {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 100);
  };
  return (
    <button
      className={btnStyles.btn}
      onClick={(e) => {
        onClick(e);
        clickHandler();
      }}
      style={
        click ? { backgroundColor: "yellow" } : { backgroundColor: "orange" }
      }
      value={value}
    >
      {value}
    </button>
  );
};

export default Button;
