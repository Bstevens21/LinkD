import React, {Component} from 'react'
import {Navbar, Nav, NavItem, FormGroup, FormControl, Form, Button, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNav.css';

export default class CustomNav extends Component{
    render(){
        return(
            <div>
                <Navbar default collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/home">Linkd</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem className="logout">
                          <Link to="/landing">Logout</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}