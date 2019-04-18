import React, {Component} from 'react';
import Login from './Login';

export default class LoginContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
              
        })
    }
    render(){
        return (
            <div>
            <Login  username={this.state.username} password={this.state.password} onValueChange={this.onChangeHandler}/> 
            <h6>{this.state.username}</h6>
            <h6>{this.state.password}</h6>
            </div>     
        )
    }
}