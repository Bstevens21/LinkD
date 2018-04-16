import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import { BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import './Signup.css';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('hi' + this.state.email + this.state.password);
    event.preventDefault();
    console.log('we made it');
    fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mail: this.state.email,
        pass: this.state.password,
      })
  })
    // fetch('/api/createUser', {
    //   mehtod: 'POST'
    // })
    // .then(response => response.json())
    // .then(data => this.setState({email: this.state.email, password: this.state.password}))
    // .catch(e => console.log('error', e));
  }

  
  render() {
    return (
    <Grid>
     <div className = "container">
     <Jumbotron>
     <h2>Sign up for Linkd!</h2>
     <form onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <label htmlFor="firstName" title="First Name:" />
          First Name:
          <input            
            id="firstName"
            className="form-input"
            name="firstname"
            type="text"
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="lastName" title="First Name:" />
          Last Name:
          <input            
            id="lastName"
            className="form-input"
            name="lastname"
            type="text"
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="formPassword" title="Password:" />
          Password:
          <input
            id="formPassword"
            ref="myInput"
            className="form-input"
            name="password"
            type="text"
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="formConfirmPassword" title="Confirm Password:" />
          Confirm Password:
          <input
            id="formConfirmPassword"
            ref="myInput"
            className="form-input"
            name="confirmpassword"
            type="text"
          />
        </fieldset>
        <fieldset>
        <input
          id="formButton"
          className="btn btn-primary"
          type="submit"
          placeholder="Send message"
        />
        </fieldset>
         </form>
      </Jumbotron>
      </div>
     </Grid>
    );
  }
}

