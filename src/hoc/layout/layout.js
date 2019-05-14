import React, { Component } from 'react';
import Header from '../../components/Header/header';

class Layouts extends Component {
   
    render() { 
        return ( 
            <div>
                <Header/>
                    {this.props.children}
                Footer
            </div>
         );
    }
}
 
export default Layouts;