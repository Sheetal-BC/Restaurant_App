import { Fragment } from "react";

import classes from './MealItemForm.module.css';

const MealItemForm = () =>{
    return (
        <Fragment>
        <div className={classes.amount}><label>Amount</label>
        <input type="number"/>
        </div>
        <button className={classes.btn}>+Add</button>
        </Fragment>
    )
}

export default MealItemForm;