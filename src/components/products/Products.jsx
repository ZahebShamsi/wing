import React,{Component} from 'react';


export default class Products extends Component{
    constructor(props){
        super(props)
        this.state = {
            cartAddAlert : false
        }
        this.onClickHandler =this.onClickHandler.bind(this)
    }
    onClickHandler() {
        this.props.products.forEach(element => {
            if(element.quantity>0){
                this.setState({
                    cartAddAlert :true
                })
            }
        });
        this.props.addToCart();
    }

    render(){
        return(
            <div> 
                <table>        
                    {this.props.products.map((product)=>(
                                            <tr>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.quantity}</td>                                             
                                                <button onClick={() => this.props.onIncrementQuantity(product.name)}>+</button>                                          
                                                <button onClick={() => {
                                                    if(product.quantity >0){
                                                        this.props.onDecrementQuantity(product.name)}
                                                        }}>-</button>
                                            </tr>
                    ))}              
                </table> 
                <button onClick = {this.onClickHandler}>Add to Cart</button>  
                {this.state.cartAddAlert && <label>Product added to cart.Visit <a href="./#/dashboard">Dashboard</a> to view your cart. </label> }  
                {/* <ul>{this.props.serverData.map((products) => <li>{products.name}</li>)}</ul> */}
            </div>
        )
    }
}

