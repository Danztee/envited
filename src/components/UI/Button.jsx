import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button className={classes.button} id={props.id} onClick={props.onClick}>
      {props.title}
    </button>
  );
}

export default Button;
