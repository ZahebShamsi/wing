import React,{Component} from 'react';


export default class Products extends Component{
    constructor(props){
        super(props)
        this.state = {
            errorMessage : false
        }
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
                                                <button onClick={() => { if(product.quantity == 0){
                                                       this.setState({
                                                           errorMessage : true
                                                       })                                                  
                                                        } 
                                                        else {
                                                            this.props.onDecrementQuantity(product.name)
                                                        }} }
                                                >
                                                -
                                                </button>
                                            {this.state.errorMessage && <label>Please Select at least one Product</label> }                           
                                            </tr>

                    ))}              
                </table>    
            </div>
        )
    }
}

