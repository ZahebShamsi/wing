import React,{Component} from 'react';
import Products from './Products';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {qIncrementActionCreator} from '../../reducers/products/productsActionCreator';
import {qDecrementActionCreator} from '../../reducers/products/productsActionCreator';
import {dashboardActionCreator} from '../../reducers/dashboard/dashboardActionCreator';

class ProductsContainer extends Component{   
    constructor(props){
       
        super(props);
        this.state = {
            data : []
        }
        this.onIncrementQuantity=this.onIncrementQuantity.bind(this);
        this.onDecrementQuantity=this.onDecrementQuantity.bind(this);
        this.addToCartHandler = this.addToCartHandler.bind(this);
    }
    onIncrementQuantity(productName){
        this.props.onIncrementQuantityHandler(productName);
    }
    onDecrementQuantity(productName){
        this.props.onDecrementQuantityHandler(productName);
    }
    addToCartHandler(){
        let selectedQuant = this.props.productsData.products.filter((products)=>products.quantity > 0 )
        this.props.onAddtoCartHandler(selectedQuant);
    }
    componentDidMount(){
        axios.get('https://icetray-87641.firebaseio.com/products.json')
              .then((response) => {
                //   console.log(response);
                  this.setState ({
                      data : response.data
                  })
                })
    }
    render(){
        return(
            <div>
                <Link to='/dashboard'>Dashboard</Link>
                 <Products serverData={this.state.data}
                        products={this.props.productsData.products}
                        onIncrementQuantity={this.onIncrementQuantity}
                        onDecrementQuantity={this.onDecrementQuantity}
                        addToCart = {this.addToCartHandler}>
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
        },
        onAddtoCartHandler : (selectedQuant) => {
            dispatch(dashboardActionCreator(selectedQuant))
        }
        
    }   
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);