import React, { Component } from 'react';
import style from './header.module.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

const navBars = () => {
    return (
        <div className={style.bars}>
            <FontAwesome name="bars"/>
        </div>
    )
}

const logo = () => {
    return (
        <Link to="/" className={style.logo}>
            <img alt="My Logo" src="http://www.stickpng.com/assets/images/58428defa6515b1e0ad75ab4.png" />
        </Link>
        )
    }           
        return ( 
            <header className={style.header}>
               <div className={style.headeropt}>
               {navBars()}
                 {logo()}
               </div>              
            </header>
         );
    }
}
 
export default Header;
