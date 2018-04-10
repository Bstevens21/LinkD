import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import './Signup.css';
import { BrowserRouter as Router,  Route, Link} from 'react-router-dom'

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
       <label>
            First Name:
            <input
                name="name"
                type="name" />            
        </label>
        <br />
        <label>
            Last Name:
            <input
                name="name"
                type="name" />            
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
            checked={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
            Phone:
            <input
                name="phone"
                type="number" />            
        </label>
        <Button bsStyle = "primary" className="submit"> Submit </Button>
         </form>
      </Jumbotron>
      </div>
     </Grid>
    );
  }
}

