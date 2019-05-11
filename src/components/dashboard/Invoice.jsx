import React,{Component} from 'react';


export default class Invoice extends Component{
    render(){
        return(
            <div>
                <h2>Invoice</h2>
                <div><label>Total Bill:</label>{this.props.totalBill}</div>
                <button onClick={this.props.toggleInvoice}>Hide Invoice</button>
            </div>          
        )
    }
} 