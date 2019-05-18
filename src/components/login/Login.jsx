import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

export default class Login extends Component {    
    render() {
        return (
            <div>
                <TextField id="username" label="Username" margin="normal"
                            name="username"
                            placeholder="Enter your username" variant="outlined"
                            value={ this.props.username }
                            onChange={ this.props.onValueChange }
                />
                <br/>
                <TextField id= "password" label="Password" margin="normal"
                            name="password"
                            placeholder = "Enter your password" variant="outlined"
                            value = { this.props.password }
                            onChange= { this.props.onValueChange }
                />
                <br/>
                <Button variant="contained" color="primary" onClick={this.props.onSignIn}>Sign In</Button>
            </div>
        )
    }

}