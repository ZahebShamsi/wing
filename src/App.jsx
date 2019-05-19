import React, { Component} from "react";
import {HashRouter, Switch, Route} from 'react-router-dom';
import routes from './routes';
import AppTopbar from './components/AppTopbar'
export default class App extends Component {
    
    render() {
        return(
            <div style={{backgroundColor: '#e0e2e5',}}>
                <HashRouter>
                    <AppTopbar/>
                    <div style={{marginTop: '9%'}}>
                        <Switch>
                            { routes.map( route => <Route  {...route}/>) }
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        
        );
    }
}




 