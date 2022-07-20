import React from "react";
import classes from "../styles/Button.module.css";

function Button({ className, children, type, ...rest }) {
  console.log(rest);
  return (
    <button {...rest} type={type} className={`${classes.button} ${className} `}>
      {children}
    </button>
  );
}

export default Button;
