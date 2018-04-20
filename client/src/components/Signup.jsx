import React, { Component } from 'react';
import { Alert, Jumbotron, Grid, Row, Col, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import { BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import './Signup.css';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      msg: null,
      alertStatus: null
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

    alert('Hello, ' + this.state.firstName + '! Please check your email for a verification link.');
    event.preventDefault();
    fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        mail: this.state.email,
        pass: this.state.password,
      })
    })
    .then(res => {
      return res.json()
    })
    .then(res => {
      if (res.msg){
        console.log('Msg: '+res.msg)
        this.setState({ msg: res.msg })
        this.setState({ alertStatus: res.alertStatus })
      }else {this.props.history.push(res.redirectUrl)}
    });
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
            name="firstName"
            type="text"
            checked={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="lastName" title="First Name:" />
          Last Name:
          <input            
            id="lastName"
            className="form-input"
            name="lastName"
            type="text"
            checked={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="formEmail" title="School Email:" />
          School Email:
          <input
            id="formEmail"
            ref="myInput"
            className="form-input"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="formPassword" title="Password:" />
          Password:
          <input
            id="formPassword"
            ref="myInput"
            className="form-input"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="formConfirmPassword" title="Confirm Password:" />
          Confirm Password:
          <input
            id="formConfirmPassword"
            ref="myInput"
            className="form-input"
            name="confirmpassword"
            type="password"
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
      <Alert bsStyle={this.state.alertStatus}>{this.state.msg}</Alert>
      </Jumbotron>
      </div>
     </Grid>
    );
  }
}

