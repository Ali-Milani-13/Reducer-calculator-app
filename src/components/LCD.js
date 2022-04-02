import React from "react";
import LCDstyle from "../styles/LCD.module.css";
const LCD = ({
  first_value,
  second_value,
  is_operator_got,
  operator_type,
  number,
}) => {
  let LCDvalue = 0;
  if (first_value !== "" && is_operator_got !== true) {
    LCDvalue = Number(first_value);
  } else {
    LCDvalue = Number(second_value);
  }
  return (
    <div className={LCDstyle.LCD}>
      <b>{operator_type === "=" ? number : LCDvalue}</b>
    </div>
  );
};

export default LCD;
