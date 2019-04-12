import React, { Component } from 'react';


export default class ViewForm extends Component {
    render() {
        return (
            <div>
                <label >First Name : {this.props.firstName}</label> <br />
                <label >Last Name : {this.props.lastName}</label> <br />
                <label >Comment : {this.props.comment} </label>
            </div>
        )
    }


}