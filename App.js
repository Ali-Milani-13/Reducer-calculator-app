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
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.RESET_ALL:
      return {
        first_value: "",
        second_value: "",
        operator_type: "",
        is_operator_got: false,
        number: 0,
        result: 0,
      };
    case ACTIONS.GET_VALUE:
      if (state.is_operator_got === false) {
        return {
          ...state,
          first_value: state.first_value.concat(action.payload.value),
        };
      }
      return {
        ...state,
        second_value: state.second_value.concat(action.payload.value),
      };
    case ACTIONS.GET_OPERATOR:
      return {
        ...state,
        operator_type: action.payload.value,
        is_operator_got: true,
      };
    case ACTIONS.GET_RESULT:
      switch (state.operator_type) {
        case "+":
          return {
            ...state,
            number: Number(state.first_value) + Number(state.second_value),
            operator_type: "=",
          };
        case "-":
          return {
            ...state,
            number: Number(state.first_value) - Number(state.second_value),
            operator_type: "=",
          };
        case "*":
          return {
            ...state,
            number: Number(state.first_value) * Number(state.second_value),
            operator_type: "=",
          };
        case "/":
          return {
            ...state,
            number: Number(state.first_value) / Number(state.second_value),
            operator_type: "=",
          };

        default:
          return { state };
      }
    case ACTIONS.GET_CONTINUE:
      return {
        ...state,
        first_value: state.number,
        second_value: "",
      };
    case ACTIONS.SET_FIRST_BACK:
      return {
        ...state,
        first_value: "",
      };
    default:
      return state;
  }
};
function App() {
  return <div></div>;
}

export default App;
