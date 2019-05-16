import React, { Component } from 'react';
import SideNav from'react-simple-sidenav';

class SideNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div>
                <SideNav
                showNav = {this.props.showNav}
                onHideNav = {this.props.onHideNav}
                navStyle = {{
                    background: '#242424',
                    maxWidth : '240px'
                }}
                >
                    OPTIONS
                  
                </SideNav>
            </div>
         );
    }
}
 
export default SideNavigation;