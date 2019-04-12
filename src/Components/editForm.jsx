import React, { Component } from 'react';


export default class EditForm extends Component {
    render() {
        return (
            <form>
                <label>Firstname
                    <input type="text" name="firstName" 
                           value={this.props.firstName} 
                           onChange={this.props.onValueChange} /> </label> <br />
                <label>Lastname
                    <input type="text" name="lastName" 
                           value={this.props.lastName} 
                           onChange={this.props.onValueChange}/> </label><br />
                <label> Comments
                    <textarea type="text" name="comment" 
                            value={this.props.comment} 
                            onChange={this.props.onValueChange} ></textarea>
                </label> <br />

            </form>
        )
    }
}