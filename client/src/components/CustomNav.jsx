import React, {Component} from 'react'
import {Navbar, Nav, NavItem, FormGroup, FormControl, Form, Button, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNav.css';

export default class CustomNav extends Component{

    constructor(props) {
        super(props);
        this.state = {
          showLogout: false
        };
    }

    componentWillMount() {
        console.log(this.props.location.pathname.includes('home'))
        if (this.props.location.pathname.includes('home')){
            this.setState({
                showLogout: true
            })
        } 
    }

    render(){
        return(
            <div>
                <Navbar default collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/home">Linkd</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        );
    }
}