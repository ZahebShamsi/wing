import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import  Card  from '@material-ui/core/Card'
import  CardHeader  from '@material-ui/core/CardHeader'
import  CardMedia  from '@material-ui/core/CardMedia'
import  CardContent  from '@material-ui/core/CardContent'

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

class Cart extends Component{
    render(){
        const { classes } = this.props
        return(
            <div>
                <h2>Cart</h2>
               {this.props.cartItems.map((cartItem)=> (
                                      <div>
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
        )
    }
} 

export default withStyles(styles)(Cart);