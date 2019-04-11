import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"" , lastName:"", comment:"", detailsFlag : false
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value   
        })
    }
    onSubmitHandler(e){
        e.preventDefault();
        alert("yes");
    }

    render() {
        return (
            <div>
                {/* EditableForm */}
                <form onSubmit={this.onSubmitHandler} autocomplete="off">
                    <label>Firstname
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChangeHandler} /> </label> <br />
                    <label>Lastname
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChangeHandler} /> </label><br />
                    <label> Comments
                        <textarea type="text" name="comment" value={this.state.comment} onChange={this.onChangeHandler} ></textarea>
                    </label> <br/>
                    <button type="submit">Submit</button>
                </form>
                {/* ReadOnly */}
                    <div>
                        <label >First Name : {this.state.firstName}</label> <br/>
                        <label >Last Name : {this.state.lastName}</label> <br/>
                        <label >Comment : {this.state.comment} </label>                    
                     </div>
            </div>
        )
    }
}