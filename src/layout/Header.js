import React from 'react';
import classes from './Header.module.css'
import logo from "../assets/logo.png"
import Button from './Button';
function Header() {
  return (
    <div className={classes.containers} >
    <div className={classes.logo}>
        <img src={logo} className={classes.img}/>
    </div>
    <div className={classes.content}>
        <div className={classes.up}>
            <div className={classes.links}>
                <a href=''>Language <i class="bi bi-chevron-down"></i></a>
                <a href=''>Sign Up for Email</a>
                <a href=''>Careers </a>
            </div>
            <div className={classes.buttons}>
                <a href=''><i class="bi bi-search"></i> Search</a>
                <a href=''><i class="bi bi-geo-alt-fill text-danger"></i> Change your location</a>
                <Button title='Order Now'/>
            </div>
        </div>
        <div className={classes.down}>
            <a href=''>Our menu <i class="bi bi-chevron-down"></i></a>
            <a href=''>Download App</a>
            <a href=''>My McDonald's Rewards</a>
            <a href=''>Exclusive Deals</a>
            <a href=''>About our food</a>
            <a href=''>Locate</a>
        </div>
    </div>
    </div>
  )
}

export default Header