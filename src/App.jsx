import React, { Component} from "react";
import {HashRouter, Switch, Route} from 'react-router-dom';
import routes from './routes';

export default class App extends Component {
    
    render() {
        return(
            <div>
                 <HashRouter>
                {/* <LoginContainer></LoginContainer>  */}
                {/* <ProductsContainer></ProductsContainer> */}
                {/* <DashBoardContainer></DashBoardContainer> */}
               <Switch>
               {/* <Route exact path='/' component={LoginContainer} /> */}
                </Switch>
                { routes.map( route => <Route  {...route}/>) }
                </HashRouter>
                
            </div>
        
        );
    }
}




 