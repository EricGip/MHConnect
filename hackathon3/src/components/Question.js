import firebase from "firebase";
import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import { DialogContentText } from "@material-ui/core";
import { withStyles} from '@material-ui/core/styles'

const styles = {
  test: {
    justifyContent: 'center'
  }
}


const config = {
  apiKey: "AIzaSyAfeSpKeC4HUU9ZAz1QawQbdnw3tXISspI",
  authDomain: "earnest-star-265609.firebaseapp.com",
  databaseURL: "https://earnest-star-265609.firebaseio.com",
  projectId: "earnest-star-265609",
  storageBucket: "earnest-star-265609.appspot.com",
  messagingSenderId: "538110857414",
  appId: "1:538110857414:web:81eb75963a06c139b647c7"
};

class Question extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      open: false,
      Age: "",
      City: "",
      Insurance: "",
      Name: "",
      PsychGender: "",
      PsychGenderPref: "",
      Specialist: "",
      State: "",
      ZipCode: "",
      Language: "",
      open: true,
    };

    this.handleOpen = this.handleOpen.bind(this); 
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleOpen = () => {
      this.setState({ open: true });
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleOpen(event) {
    this.setState({
      open: true
    })
  };

  handleClose(event) {
    this.setState({
      open: false
    })
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  addUser = e => {
    e.preventDefault();
    firebase.initializeApp(config)
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const PatientRef = db.collection("PatientData").add({
      Age: this.state.Age,
      City: this.state.City,
      Insurance: this.state.Insurance,
      Name: this.state.Name,
      PsychGender: this.state.PsychGender,
      PsychGenderPref: this.state.PsychGenderPref,
      Specialist: this.state.Specialist,
      State: this.state.State,
      Zipcode: this.state.Zipcode,
      Language: this.state.Language
    });
    this.setState({
      Age: "",
      City: "",
      Insurance: "",
      Name: "",
      PsychGender: "",
      PsychGenderPref: "",
      Specialist: "",
      State: "",
      Zipcode: "",
      Language: ""
    });
  };
  render() {
    const { classes } = this.props;
    return (
    
      <Dialog open>
        <DialogTitle className={classes.test} >MHConnect</DialogTitle>
        
        <DialogContentText> Welcome to Mental Health Connect!  </DialogContentText>
        <form noValidate autoComplete="off" onSubmit={this.addUser}>
          <input
            type="text"
            name="Name"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.Name}
          />
          <Divider />
          <input
            type="text"
            name="Age"
            placeholder="How old are you?"
            onChange={this.updateInput}
            value={this.state.Age}
          />
          <Divider />
          <input
            type="text"
            name="Language"
            placeholder="What language do you prefer?"
            onChange={this.updateInput}
            value={this.state.Language}
          />
          <Divider />
          <input
            type="text"
            name="PsychGenderPref"
            placeholder="Do you have a gender preference for your psychologist?"
            onChange={this.updateInput}
            value={this.state.PsychGenderPref}
          />
          <Divider />
          <input
            type="text"
            name="PsychGender"
            placeholder="If so, what gender do you prefer?"
            onChange={this.updateInput}
            value={this.state.PsychGender}
          />
          <Divider />
          <input
            type="text"
            name="Insurance"
            placeholder="What type of Health Insurance do you have?"
            onChange={this.updateInput}
            value={this.state.Insurance}
          />
          <Divider />
          <input
            type="text"
            name="City"
            placeholder="City"
            onChange={this.updateInput}
            value={this.state.City}
          />
          <Divider />
          <input
            type="text"
            name="State"
            placeholder="State"
            onChange={this.updateInput}
            value={this.state.State}
          />
          <Divider />
          <input
            type="text"
            name="Zipcode"
            placeholder="Zipcode"
            onChange={this.updateInput}
            value={this.state.Zipcode}
          />
          <Divider />
          <button type="submit"> Submit</button>
        </form>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Question);
