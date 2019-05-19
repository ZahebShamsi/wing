import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardContent, Fab,CardActions, IconButton, Typography, Button,
         Snackbar } from '@material-ui/core';
import { FavoriteIcon, ShareIcon, MoreVertIcon ,AddIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
      maxWidth: 300,
    },
    cartButton: {
        position: 'fixed',
        right: '3%',
        bottom: '5%'
    },
    button: {
        marginLeft : '5%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  });

 class Products extends Component {
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
        const { classes } = this.props
        return (
                    <div>
                        {this.props.products.map((product) => (
                            <div>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title={product.name}
                                    />
                                    <CardMedia className= {classes.media}
                                    image={product.imgSource}
                                        title={product.name}
                                    />
                                    <CardContent>{"Price: " + 'Rs' + product.price}</CardContent>
                                    <CardContent>{"Quantity :" + product.quantity}</CardContent>
                                    <Button className={classes.button} variant="contained" color="primary"
                                        onClick={() => this.props.onIncrementQuantity(product.name)}>+</Button>
                                    <Button className={classes.button} variant="contained" color="primary" onClick={() => {
                                        if (product.quantity > 0) {
                                            this.props.onDecrementQuantity(product.name)
                                        }
                                    }}>-</Button>
                                </Card>
                            </div>
                        ))}
                        <Button variant="contained" color="secondary" className={classes.cartButton} onClick={this.onClickHandler}>Add to Cart</Button>
                        <Snackbar  anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                            }}
                            open={this.state.cartAddAlert} autoHideDuration={6000} onClose={this.handleClose}
                            ContentProps={{
                                'aria-describedby': 'message-id',
                            }}
                            message={
                                <span id="message-id">
                                    Product added to cart.Visit <a href="./#/dashboard">Dashboard</a> to view your cart. 
                            </span>}
                            variant="success"
                        />
                        {/* {this.state.cartAddAlert && <label>Product added to cart.Visit <a href="./#/dashboard">Dashboard</a> to view your cart. </label>} */}
                    </div>
        )
    }
}

export default withStyles(styles)(Products);