import React, { Component } from "react";
import mainPage from './constants';
import Header from './Components/header';
import Foot from './Components/footer';
import Login from './Components/login';
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header name={mainPage.header} />
                </div>
                <div>
                    <Login username={mainPage.login.userName} 
                           password={mainPage.login.password} 
                           loginbtn={mainPage.login.loginbtnName}/>
                </div>
                <div>
                    <Foot credits={mainPage.footer} />
                </div>
            </div>
        );
    }
}