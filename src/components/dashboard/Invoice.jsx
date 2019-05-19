import React,{Component} from 'react';
import {Button, Dialog} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing.unit,
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  });

class Invoice extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Dialog open={this.props.isInvoiceVisible} onClose={this.props.toggleInvoice}  
                        aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                    <h2>Invoice</h2>
                    <div>
                        <label>Total Bill:</label>{this.props.totalBill}
                   </div>
                </Dialog>      
            </div>          
        )
    }
} 

export default withStyles(styles)(Invoice);