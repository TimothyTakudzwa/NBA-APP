import React, { Component } from 'react';
import style from './header.module.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import SideNavigation from '../Header/Sidenav/sidenav'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

const navBars = () => {
    return (
        <div className={style.bars}>
            <FontAwesome name="bars"
            onClick = {this.props.onshowNav}
            />
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
            <SideNavigation {...this.props}/>
               <div className={style.headeropt}>
               {navBars()}
                 {logo()}
               </div>              
            </header>
         );
    }
}
 
export default Header;
