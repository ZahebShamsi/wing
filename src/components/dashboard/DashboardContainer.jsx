import React, { Component } from 'react';
import Cart from './Cart';
import Invoice from './Invoice';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import  {loadCartItemsRequest} from '../../reducers/dashboard/dashboardActionCreator'


 class DashBoardContainer extends Component {
    constructor(props){
        super(props)
        this.state = 
        {
        }
        this.toggleInvoice=this.toggleInvoice.bind(this);
    }
    componentDidMount(){
        this.props.cartItemsLoad();
    }
    toggleInvoice(){
        this.setState({
            isInvoiceVisible : !this.state.isInvoiceVisible
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Link to='./products'>Products</Link>
                </div>
                {this.props.cartItems.cartItems.length > 0 ?
                <div>
                    <h1>Dashboard</h1>
                    <Cart cartItems={this.props.cartItems.cartItems}></Cart>
                    <hr></hr>
                    {this.state.isInvoiceVisible ?
                    (<Invoice totalBill={this.props.cartItems.totalInvoice}
                              toggleInvoice ={this.toggleInvoice}
                    ></Invoice>) : 
                    <button onClick={this.toggleInvoice}>Show Invoice</button>
                    }
                 </div> :  
                 <div>No items in your cart </div> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        return {
            cartItems : state.cartItems,
            billingAmount : state.totalInvoice
        }
}

const mapDispatchToProps = dispatch => {
    return {
        cartItemsLoad : () => dispatch(loadCartItemsRequest())

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoardContainer);