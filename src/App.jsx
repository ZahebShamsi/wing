import React, { Component} from "react";
import { connect } from "react-redux";
import LoginContainer from './components/login/LoginContainer';
import ProductsContainer from './components/products/ProductsContainer';
import DashBoardContainer from './components/dashboard/dashboardContainer';
import {HashRouter,Switch,Route} from 'react-router-dom';
import routes from './routes';

class App extends Component {
    componentDidMount() {
        this.props.dispatch({type: "LOGIN_REQUEST_COMPLETE", payload: {isAuthenticated: true}});
    }
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

const mapStateToProps = (state) => {
    return {
        sessionData: state.sessionData
    }
}


export default connect(mapStateToProps)(App);