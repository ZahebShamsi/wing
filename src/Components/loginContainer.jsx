import React, { Component } from 'react';
import mainPage from './../constants'
import Header from './header';
import Login from './login';
import Footer from './footer';

export default class LoginContainer extends Component {
    btnName = ["one", "two", "three", "four", "five", "six"];
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
                        btnName={this.btnName} />
                </div>
                <div>
                    <Footer credits={mainPage.footer} />
                </div>
            </div>

        )
    }
}