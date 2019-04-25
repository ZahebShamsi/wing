import React,{Component} from 'react';
import Products from './Products';
import {Link} from 'react-router-dom';

export default class ProductsContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            productsData : [
                { "name":"Maths", "price":40, "quantity":23 },
                { "name":"Physics", "price":60, "quantity":57 },
                { "name":"Chemistry", "price":70, "quantity":35 },
                { "name":"Biology", "price":85, "quantity":44 },
                { "name":"English", "price":37, "quantity":13 },               
            ]
        }
    }

    render(){
        return(
            <div>
                <Link to='/dashboard'>Dashboard</Link>
                <Products products={this.state.productsData}></Products>           
            </div>
        )
    }
}