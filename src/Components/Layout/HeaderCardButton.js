import React from 'react';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCardButton.module.css';


const HeaderCardButton = () =>{
  return (
    <React.Fragment> 
    <button className={classes.button}>  
    <span className={classes.icon}>
       <CartIcon />
    </span>
    <span>Cart</span>
    <span className={classes.num}>0</span>
    </button>
    </React.Fragment>
  ) 
}

export default HeaderCardButton;


