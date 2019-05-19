import React,{Component} from 'react';
import {Button} from '@material-ui/core'

export default class Invoice extends Component{
    render(){
        return(
            <div>
                <h2>Invoice</h2>
                <div><label>Total Bill:</label>{this.props.totalBill}</div>
                <Button variant="contained" color="secondary"
                        onClick={this.props.toggleInvoice}>Hide Invoice</Button>
            </div>          
        )
    }
} 