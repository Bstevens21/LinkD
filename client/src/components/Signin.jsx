import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import './Signin.css';
import { BrowserRouter as Router,  Route, Link} from 'react-router-dom'

export default class Signin extends Component {
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
     <div className = "wrapper">
     <Jumbotron>
     <h1>Sign In</h1>
      <form onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <label htmlFor="formName" title="Username:" />
          Username:
          <input            
            id="formName"
            className="form-input"
            name="username"
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
