import React, { Component} from "react";
import { connect } from "react-redux";
import LoginContainer from './components/login/LoginContainer';
import ProductsContainer from './components/products/ProductsContainer';

class App extends Component {
    componentDidMount() {
        this.props.dispatch({type: "LOGIN_REQUEST_COMPLETE", payload: {isAuthenticated: true}});
    }
    render() {
        return(
            <div>
                {/* <LoginContainer></LoginContainer>  */}
                <ProductsContainer></ProductsContainer>              
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