import React, { Component } from "react";
import mainPage from './constants';
import Header from './Components/header';
import Foot from './Components/footer';
import Login from './Components/login';
// import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
    btnName= ["one","two","three","four","five","six"]
    render() {
        return (
            <div>
                <div>
                    <Header name={mainPage.header} />
                </div>
                <div>
                    <Login username={mainPage.login.userName} 
                           password={mainPage.login.password} 
                           loginbtn={mainPage.login.loginbtnName}
                           btnName={this.btnName}/>
                </div>
                <div>
                    <Foot credits={mainPage.footer} />
                </div>
            </div>
        );
    }
}