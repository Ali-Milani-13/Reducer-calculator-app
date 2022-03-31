import React, { useReducer, useEffect, useRef } from "react";
import "./App.css";
import ButtonHolder from "./components/ButtonHolder";
export const ACTIONS = {
  GET_VALUE: "GET_VALUE",
  GET_OPERATOR: "GET_OPERATOR",
  RESET_ALL: "RESET_ALL",
  GET_RESULT: "GET_RESULT",
  GET_CONTINUE: "GET_CONTINUE",
  SET_FIRST_BACK: "SET_FIRST_BACK",
};
const initialState = {
  first_value: "",
  second_value: "",
  is_operator_got: false,
  operator_type: "",
  number: 0,
};

function App() {
  return <div></div>;
}

export default App;
