import React,{Component} from 'react';


export default class Invoice extends Component{
    render(){
        return(
            <div>
                <h2>Invoice</h2>
                <div><label>Total Bill:</label>{this.props.totalBill}</div>
                <div><label>UserName :</label>{this.props.userDetails.username}</div>
                <div><label>Address :</label>{this.props.userDetails.address}</div>
                <div><label>Phone Number :</label>{this.props.userDetails.phoneNumber}</div>
                <div><label>Email :</label>{this.props.userDetails.email}</div>

                <button onClick={this.props.toggleInvoice}>Hide Invoice</button>
            </div>          
        )
    }
} 