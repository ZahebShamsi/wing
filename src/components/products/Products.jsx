import React, { Component } from 'react';
import  Card  from '@material-ui/core/Card';
import  CardHeader  from '@material-ui/core/CardHeader';
import  CardMedia  from '@material-ui/core/CardMedia';
import  CardContent  from '@material-ui/core/CardContent';
import  Button  from '@material-ui/core/Button';
import  Snackbar  from '@material-ui/core/Snackbar';

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
        marginLeft: '5%',
        margin: theme.spacing.unit,
        
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    itemsFlex: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    cardContainer: {
        padding: '1.5%'
    }
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
            <div className={classes.itemsFlex} >
                {this.props.products.map((product) => (
                    <div className={classes.cardContainer}>
                        <Card className={classes.card}>
                            <CardHeader
                                title={product.name}
                            />
                            <CardMedia className={classes.media}
                                image={product.imgSource}
                                title={product.name}
                            />
                            <div className={classes.actions}>
                                <CardContent>{'Rs ' + product.price}</CardContent>
                                <Button className={classes.button} variant="contained" color="primary" size="small"
                                    onClick={() => this.props.onIncrementQuantity(product.name)}>+</Button>
                                <CardContent>{product.quantity}</CardContent>
                                <Button className={classes.button} variant="contained" color="primary" size="small"
                                    onClick={() => {
                                        if (product.quantity > 0) {
                                            this.props.onDecrementQuantity(product.name)
                                        }
                                    }}>-</Button>
                            </div>
                        </Card>
                    </div>
                ))}
                <Button variant="contained" color="secondary" className={classes.cartButton} onClick={this.onClickHandler}>Add to Cart</Button>
                <Snackbar anchorOrigin={{
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
            </div>
        )
    }
}

export default withStyles(styles)(Products);