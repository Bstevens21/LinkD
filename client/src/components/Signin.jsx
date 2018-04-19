import React, { Component } from 'react';
import { Alert, Jumbotron, Grid, Row, Col, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import './Signin.css';
import { BrowserRouter as Router,  Route, Link} from 'react-router-dom'


export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      msg: null
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
    //Malert('hi' + this.state.msg);
    event.preventDefault();
    console.log('we made it');
    fetch('/api/signInUser', {
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
  .then(res => {
    return res.json()
  })
  .then(res => {
    this.props.history.push(res.redirectUrl)
    this.setState({ msg: res.msg })
    console.log(res.msg)
  });
  }

  render() {
    return (
    <Grid>
     <div className = "wrapper">
     <Jumbotron>
     <h1>Sign In</h1>
      <form onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <label htmlFor="formName" title="Email:" />
          Email:
          <input            
            id="formName"
            className="form-input"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
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
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
        </fieldset>
        <fieldset>
        <input
          id="formButton"
          className="btn btn-primary"
          type="submit"
          placeholder="Sign In"
        />
        </fieldset>
      </form>
      <Alert>{this.state.msg}</Alert>
      </Jumbotron>
      </div>
     </Grid>
    );
  }
}
