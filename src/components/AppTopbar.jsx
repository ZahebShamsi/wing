import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton , Menu , MenuItem, Button} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  Redirect } from 'react-router-dom';
import { logoutActionCreator } from '../reducers/login/loginActionCreators';

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
        this.handleLogout = this.handleLogout.bind(this);
        this.handleMenu = this.handleMenu.bind(this);

    }
    handleClose(){
        this.setState({
            anchorEl: null
        })
    }
    handleLogout(){
        this.props.onLogoutHandler();
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
                {this.props.sessionData.isAuthenticated ? 
                                <Redirect to="/products"/> : <Redirect to="/"/>}
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
                                <MenuItem><Link to='/dashboard'>Dashboard</Link></MenuItem>
                                <MenuItem><Link to='/products'>Products</Link></MenuItem>
                                <MenuItem>
                                    <Button variant="outlined" color="primary"
                                        onClick={this.handleLogout}>Logout</Button>
                                </MenuItem>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutHandler : () => dispatch(logoutActionCreator())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(AppTopbar));

