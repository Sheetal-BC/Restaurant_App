import React from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCardButton;
