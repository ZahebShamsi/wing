import React, { Component } from 'react'

export default class Login extends Component {    
    render() {
        return (
            <div>
                <h1>Login</h1>
                <label>Username:
                    <input type="text" name="username" value={this.props.username} onChange={this.props.onValueChange} /><br />
                </label>
                <br />
                <label>Password:
                    <input type="password" name="password" value={this.props.password} onChange={this.props.onValueChange}/>
                </label>
                <br/>
                <button onClick ={this.props.onSignIn}>SIGN IN</button>
            </div>
        )
    }

}