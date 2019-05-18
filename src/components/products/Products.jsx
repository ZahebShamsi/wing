import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button } from '@material-ui/core';
import { FavoriteIcon, ShareIcon, MoreVertIcon } from '@material-ui/icons';


export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartAddAlert: false
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }
    onClickHandler() {
        this.props.products.forEach(element => {
            if (element.quantity > 0) {
                this.setState({
                    cartAddAlert: true
                })
            }
        });
        this.props.addToCart();
    }

    render() {
        return (
            <div>
                <div>
                    <table>
                        {this.props.products.map((product) => (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <button onClick={() => this.props.onIncrementQuantity(product.name)}>+</button>
                                <button onClick={() => {
                                    if (product.quantity > 0) {
                                        this.props.onDecrementQuantity(product.name)
                                    }
                                }}>-</button>
                            </tr>
                        ))}
                    </table>
                    <button onClick={this.onClickHandler}>Add to Cart</button>
                    {this.state.cartAddAlert && <label>Product added to cart.Visit <a href="./#/dashboard">Dashboard</a> to view your cart. </label>}
                </div>
                <div>
                    {this.props.products.map((product) => (
                        <div>
                            <Card>
                            <CardHeader
                                title= {product.name}
                                subheader={ 'Rs' + product.price} />
                            <Button variant="contained" color="primary">+</Button>
                            <Button variant="contained" color="primary">-</Button>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

