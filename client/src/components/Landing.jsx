import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import './Landing.css';
import { BrowserRouter as Router,  Route, Link} from 'react-router-dom'

export default class Landing extends Component {
    render(){
        return(
            <Grid>
            <div className="wrapper">
              <Jumbotron>
                  <h1>Welcome to Linkd!</h1>
                    <h3>Sign in or Sign up to get started</h3>
              </Jumbotron>
               <div className="btn-wrapper">
                    <Button bStyle = "primary" className="Signin btn-primary" componentClass={Link} to ="/signin"> Sign In</Button>
                    <Button bStyle = "primary" className="Signup btn-primary" componentClass={Link} to ="/signup"> Sign Up</Button>
                </div>
            </div>
            </Grid> 
        );
    }
}