import React, { Component } from 'react';
import Header from '../../components/Header/header';

class Layouts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showNav:false
         }
    }
    render() { 

        const toggleSidenav = (action) => {
            this.setState({
                showNav: action
            })
        } 
        
        return ( 
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav= { () => toggleSidenav(false)}
                    onshowNav= { () => toggleSidenav(true)}
                />
                    {this.props.children}
                Footer
            </div>
         );
    }
}
 
export default Layouts;
