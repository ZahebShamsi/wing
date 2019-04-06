import React, { Component } from 'react';


export default class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <label>{this.props.username}</label>
                    <input></input>
                </div>
                <div>
                    <label>{this.props.password}</label>
                    <input></input>
                </div>
            </div>

        )
    }
}