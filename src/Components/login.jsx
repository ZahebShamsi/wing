import React, { Component } from 'react';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:"user",
            password:"pass"
        }       
    }
    componentDidMount(){
        setTimeout( () => {
            this.swap()
         } ,5000);
    }
    swap(){
        this.setState({name:'USER',password:"PASS"})
    }

    render() {
        return (
            <div>
                <div>
                    <label>{this.props.username}</label>
                    <input></input>
                    <div class="small">The username is {this.state.name}</div>
                </div>
                <div>
                    <label>{this.props.password}</label>
                    <input></input>
                    <div class="small">The password is {this.state.password}</div>
                </div>
            </div>

        )
    }
}