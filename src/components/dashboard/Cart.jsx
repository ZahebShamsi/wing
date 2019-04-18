import React,{Component} from 'react';

export default class Cart extends Component{
    render(){
        return(
            <div>
                <h2>Cart</h2>
                <table>
               {this.props.cartItems.map((cartItem)=> (
                   <tr>
                       <td>{cartItem.name}</td>
                       <td>{cartItem.price}</td>
                       <td>{cartItem.quantity}</td>
                   </tr>
                   ))} 
                   </table>                   
            </div>
        )
    }
} 