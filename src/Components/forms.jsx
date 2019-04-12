import React, { Component } from 'react';
import EditForm from './editForm';
import ViewForm from './ViewForm';

export default class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"" , lastName:"", comment:"", isViewMode : true
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.toggleButton = this.toggleButton.bind(this)
    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
              
        })
    }
    toggleButton(){
        this.setState(state => ({
            isViewMode: !state.isViewMode
          }));
    }

    render() {
        return (
            <div>
                {this.state.isViewMode ?
                 (
                     <EditForm firstName={this.state.firstName}                      
                           lastName={this.state.lastName}
                           comment={this.state.comment} 
                           onValueChange={this.onChangeHandler}  
                 />
                 ) :
                ( 
                    <ViewForm firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            comment={this.state.comment}/> 
                )
                }
                <button type="submit" onClick={this.toggleButton} >{this.state.isViewMode ? "View" : "Edit"}</button>
            </div>
        )
    }
}