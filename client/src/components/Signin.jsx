import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import './Signin.css';
import { browserHistory, BrowserRouter as Router,  Route, Link} from 'react-router-dom'


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
  .then(res => this.props.history.push(res.redirectUrl));
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
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
        </label>
        <Button bsStyle = "primary" type="submit" className="submit"> Submit </Button>
         </form>
      </Jumbotron>
      </div>
     </Grid>
    );
  }
}

