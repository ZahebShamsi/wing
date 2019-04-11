import React, { Component } from "react";
import mainPage from './constants';

import Forms from './Components/forms';
import LoginContainer from './Components/loginContainer'
// import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formFlag: true
        }
        this.changeComponent=this.changeComponent.bind(this)
    }
    changeComponent(){
        this.setState(state => ({
            formFlag: !state.formFlag
          }));
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.changeComponent}>Toggle</button>
                </div>
                <div>
                    {this.state.formFlag ? <Forms /> : <LoginContainer />}
                </div>
            </div>
        )
    }
}