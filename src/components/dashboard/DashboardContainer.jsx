import React, { Component } from 'react';
import Cart from './Cart';
import Invoice from './Invoice';


export default class DashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            cartItems : [
                {name:"JavaBook" , quantity:5 , price:25},
                {name:"PythonBook" , quantity:8 , price:15},
                {name:"ReactBook" , quantity:10 , price:25}
            ],
            isInvoiceVisible : false,
            invoiceDetails : {
                totalBill : 0,
                userDetails :{
                    username :"Shamsi" , address : "Noida" , phoneNumber : "1235" , email :"shamsi@gmail.com"
                }               
            }
        }
        this.toggleInvoice=this.toggleInvoice.bind(this);
    }
    toggleInvoice(){
        this.setState({
            isInvoiceVisible : !this.state.isInvoiceVisible
        })
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Cart cartItems={this.state.cartItems}></Cart>
                <hr></hr>
                {this.state.isInvoiceVisible ?
                (<Invoice totalBill={this.state.invoiceDetails.totalBill}
                        userDetails={this.state.invoiceDetails.userDetails}
                        toggleInvoice ={this.toggleInvoice}
                ></Invoice>) : 
                <button onClick={this.toggleInvoice}>Show Invoice</button>
                }
            </div>
        )
    }
} 