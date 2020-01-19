import React, { Component } from 'react';
import Question from './components/Question'
import Why from './components/Why'
import pengu from './images/pengu.gif'
import sunshine from './images/sunshine.gif'
import happy from './images/happy.gif'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

const styles = theme => ({
  background: {
    minHeight: `100vh`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },

});

class App extends Component {
  constructor(props) {
    super(props);
  }

  backgrounds = [pengu, happy];

  getRandomBackground = () => {
    const chosenIndex = Math.floor(
      Math.random() * Math.floor(this.backgrounds.length)
    );
    return chosenIndex;
  };
  
  state = {
    currentIndex: this.getRandomBackground()
  }

  

  render(){
    const {currentIndex} = this.state;
    const { classes } = this.props;
    return(
    <MuiThemeProvider>
      <div
      className={classes.background}
      style={{
        backgroundImage: `url(${this.backgrounds[currentIndex]})`,
      }}
      >
      <Question>
      </Question>

      <Why>

      </Why>
      </div>
    </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App);