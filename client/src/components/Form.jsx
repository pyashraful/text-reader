import React from "react";
import classes from "../styles/Form.module.css";

function Form({ children, ...rest }) {
  return (
    <form className={` ${classes.form} `} {...rest}>
      {children}
    </form>
  );
}

export default Form;
