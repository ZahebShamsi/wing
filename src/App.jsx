import React, { Component} from "react";
import {HashRouter, Switch, Route} from 'react-router-dom';
import routes from './routes';
import AppTopbar from './components/AppTopbar'
export default class App extends Component {
    
    render() {
        return(
            <div>
                <AppTopbar/>
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




 