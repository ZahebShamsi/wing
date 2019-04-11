import React, { Component } from 'react';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:"user",
            password:"pass"
        } 
        this.eventClick = this.eventClick.bind(this); 
        this.clickListButton=this.clickListButton.bind(this);
    }
    btnName =this.props.btnName;
    
    componentDidMount(){
        this.timer=setTimeout( () => {
            this.swapState()
         } ,3000);
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    } 
    swapState(){
        this.setState({name:'USER',password:"PASS"})
    }
    eventClick(){
        alert(this.props.username +"  "+ this.props.password
                +"  "+this.state.name+"  "+this.state.password)
    }
    clickListButton(btnData) {
        alert(btnData)
    }
    render() {
        const listBtnName= this.btnName.map((name,index) => {
            return <li key={index}><button onClick={() => {this.clickListButton(name)} }>{name}</button></li>
        });
        return (
            <div>
                <div>
                    <label>{this.props.username}</label>
                    <input></input>
                    <div >The username is {this.state.name}</div>
                </div>
                <div>
                    <label>{this.props.password}</label>
                    <input></input>
                    <div >The password is {this.state.password}</div>
                </div>
                <div onClick={this.eventClick}>{this.props.loginbtn}</div>
                 <div>
                     <ul>
                        {listBtnName}
                     </ul>
                 </div>
            </div>
        )
    }
}