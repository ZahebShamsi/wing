import React,{Component} from 'react';
import Products from './Products';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {qIncrementActionCreator} from '../../reducers/products/productsActionCreator';
import {qDecrementActionCreator} from '../../reducers/products/productsActionCreator'

class ProductsContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
        this.onIncrementQuantity=this.onIncrementQuantity.bind(this);
        this.onDecrementQuantity=this.onDecrementQuantity.bind(this)
    }
    onIncrementQuantity(productName){
        this.props.onIncrementQuantityHandler(productName);
    }
    onDecrementQuantity(productName){
        this.props.onDecrementQuantityHandler(productName);
    }
    render(){
        return(
            <div>
                <Link to='/dashboard'>Dashboard</Link>
                 <Products products={this.props.productsData.products}
                        onIncrementQuantity={this.onIncrementQuantity}
                        onDecrementQuantity={this.onDecrementQuantity}>
                </Products>      
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productsData: state.productsData
    }
}
const mapDispatchToProps  = dispatch => {
    return{
        onIncrementQuantityHandler : (productName) => {
            dispatch(qIncrementActionCreator(productName))
        },
        onDecrementQuantityHandler : (productName) => {
            dispatch(qDecrementActionCreator(productName))
        }
        
    }   
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);