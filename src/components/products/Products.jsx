import React,{Component} from 'react';


export default class Products extends Component{
    render(){
        return(
            <div> 
                <table>        
                    {this.props.products.map((product)=>(
                                            <tr>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.quantity}</td>
                                            </tr>
                    ))}              
                </table>    
            </div>
        )
    }
}

