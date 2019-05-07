import React, {Component} from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import {signInActionCreator} from '../../reducers/login/loginActionCreators';

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
        const data = {
            username : this.state.username,
            password: this.state.password
        }
        this.props.signInHandler(data);
    }
    render(){
        return (
            <div>
            <Login  username={this.state.username} password={this.state.password} 
                    onValueChange={this.onChangeHandler} onSignIn={this.onSignInHandler}/> 
            <h6>{this.state.username}</h6>
            <h6>{this.state.password}</h6>
            
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
        signInHandler : (loginData) => {
            dispatch(signInActionCreator(loginData))
        }
        
    }   
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(LoginContainer);
