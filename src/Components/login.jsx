import React, { Component } from 'react';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:"user",
            password:"pass"
        } 
        this.eventClick = this.eventClick.bind(this);      
    }
    componentDidMount(){
        this.timer=setTimeout( () => {
            this.swap()
         } ,3000);
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    } 
    swap(){
        this.setState({name:'USER',password:"PASS"})
    }
    eventClick(){
        alert(this.props.username +"  "+ this.props.password
                +"  "+this.state.name+"  "+this.state.password)
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
                <div class="btn btn-success" onClick={this.eventClick}>{this.props.loginbtn}</div>
            </div>

        )
    }
}