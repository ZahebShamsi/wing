import React, {Component} from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import {signInActionCreator} from '../../reducers/login/loginActionCreators';
import { Redirect } from 'react-router-dom';

class LoginContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSignInHandler = this.onSignInHandler.bind(this);
    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,            
        })
    }
    onSignInHandler(e){
        this.props.signInHandler();
    }
    render(){
        return (
            <div>
            <Login  username={this.state.username} password={this.state.password} 
                    onValueChange={this.onChangeHandler} onSignIn={this.onSignInHandler}/> 
            {this.props.sessionData.isAuthenticated &&  <Redirect to ="/products" />}
            
            </div>     
        )
    }
}
    
const mapStateToProps = (state) => {
        return {
            sessionData: state.sessionData 
        }
}

const mapDispatchToProps  = dispatch => {
    return{
        signInHandler : () => {
            dispatch(signInActionCreator())
        }
        
    }   
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(LoginContainer);
