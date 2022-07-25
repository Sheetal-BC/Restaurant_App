import React from "react";

import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCardButton";

const Header = () =>{
 return ( 
    <React.Fragment>
     <header className={classes.header}>
        <h1>ReactMeals</h1>
       
        <HeaderCardButton/>
       
    </header>
    
     </React.Fragment>
 )
}

export default Header;