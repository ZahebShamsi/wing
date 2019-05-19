import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Card, CardHeader, CardMedia, CardContent, Fab, CardActions, IconButton, Button,
    Snackbar
} from '@material-ui/core';

const styles = theme => ({
    card: {
        maxWidth: 200,
    },
    cartButton: {
        position: 'fixed',
        right: '3%',
        bottom: '5%'
    },
    button: {
        marginLeft: '5%',
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

class Cart extends Component{
    render(){
        const { classes } = this.props
        return(
                <div>
                    <h2>Cart</h2>
                <div className={classes.itemsFlex}>
               {this.props.cartItems.map((cartItem)=> (
                                      <div className={classes.cardContainer}>
                                      <Card className={classes.card}>
                                          <CardHeader
                                              title={cartItem.name}
                                          />
                                          <CardMedia className={classes.media}
                                              image={cartItem.imgSource}
                                              title={cartItem.name}
                                          />
                                          <div className={classes.actions}>
                                              <CardContent>{'Rs ' + cartItem.price}</CardContent>
                                              <CardContent>{ "Quantity: " +cartItem.quantity}</CardContent>
                                          </div>
                                      </Card>
                                  </div>
                   ))} 
            </div>
            </div>
        )
    }
} 

export default withStyles(styles)(Cart);