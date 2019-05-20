import React , { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
    root: {
      flexGrow: 1,
      width: '100%',
      position: 'fixed',
      paddingTop: '30vh',
      height: '100vh',
      backgroundColor: 'rgba(212, 209, 209, 0.77)'

    },
  };

 class Loader extends Component {
     constructor(props){
         super(props);
         this.state = {
            completed: 0,
          };
          this.progress = this.progress.bind(this);
     }
     componentDidMount() {
        this.timer = setInterval(this.progress, 500);
      }
    
      componentWillUnmount() {
        clearInterval(this.timer);
      }
    
      progress() {
        const completed  = this.state.completed;
        if (completed === 100) {
          this.setState({ completed: 0 });
        } else {
          const diff = Math.random() * 10;
          this.setState({ completed: Math.min(completed + diff, 100) });
        }
      };

     render(){
        const { classes } = this.props;
        return (
          <div id="loader" className={classes.root}>
            <LinearProgress variant="determinate" value={this.state.completed} />
            <br />
            <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
          </div>
        );
      }
     }

     export default withStyles(styles)(Loader);