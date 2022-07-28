import React,{ useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
 const cartcntx = useContext(CartContext);

let quantity = 0;
cartcntx.items.forEach(item=>{
 quantity = quantity + Number(item.quantity);
})

  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span>{cartcntx.message}</span>
        <span className={classes.badge}>{quantity}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCardButton;
