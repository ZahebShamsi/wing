import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton , Menu , MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = {
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class AppTopbar extends Component {
    constructor(props){
        super(props);
        this.state = {
           anchorEl : null
        }
        this.handleClose = this.handleClose.bind(this);
        this.onClickHandle = this.onClickHandle.bind(this);
        this.handleMenu = this.handleMenu.bind(this);

    }
    handleClose(){
        this.setState({
            anchorEl: null
        })
    }
    onClickHandle(){
        console.log("handleClose")
      };
    
    handleMenu(e) {
       this.setState({
           anchorEl: e.currentTarget
       })
    };
    render() {
        let { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar position="fixed">
                 <Toolbar>
                    <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
                        Photos
                    </Typography>
                    {this.props.sessionData.isAuthenticated && (
                        <div>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.onClickHandle}>Logout</MenuItem>
                                <MenuItem><Link to='/dashboard'>Dashboard</Link></MenuItem>
                                <MenuItem><Link to='/products'>Products</Link></MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar> 
        )
    }
}

const mapStateToProps = (state) =>{ 
    return {
        sessionData : state.sessionData
    }
}


export default connect(mapStateToProps,null)(withStyles(styles)(AppTopbar));

