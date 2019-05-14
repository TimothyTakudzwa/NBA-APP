import React, { Component } from 'react';
import Layouts from './hoc/layout/layout';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/home';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Layouts>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Layouts>
         );
    }
}
 
export default Routes;