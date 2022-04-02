import React from "react";
import Button from "./Button";
import LCD from "./LCD";
import { ACTIONS } from "../App";
import holderstyle from "../styles/Holder.module.css";
const ButtonHolder = ({
  dispatch,
  first_value,
  second_value,
  is_operator_got,
  button,
  number,
  operator_type,
}) => {
  return (
    <div className={holderstyle.btnContainer}>
      <LCD
        first_value={first_value}
        second_value={second_value}
        is_operator_got={is_operator_got}
        button={button}
        operator_type={operator_type}
        number={number}
        dispatch={dispatch}
      />
      <div className={holderstyle.button_wrapper}>
        <Button
          value="CE"
          onClick={() => {
            dispatch({ type: ACTIONS.RESET_ALL });
          }}
        />
        <Button
          value={1}
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_VALUE,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value={2}
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_VALUE,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value={3}
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_VALUE,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value={4}
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_VALUE,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value={5}
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_VALUE,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value={6}
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_VALUE,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value={7}
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_VALUE,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value={8}
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_VALUE,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value={9}
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_VALUE,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value={0}
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_VALUE,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value="+"
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_OPERATOR,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value="-"
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_OPERATOR,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value="*"
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_OPERATOR,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value="/"
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_OPERATOR,
              payload: { value: e.target.value },
            });
          }}
        />
        <Button
          value="="
          onClick={(e) => {
            dispatch({
              type: ACTIONS.GET_RESULT,
              payload: { value: e.target.value },
            });
          }}
        />
      </div>
    </div>
  );
};

export default ButtonHolder;
