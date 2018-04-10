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
                            <Link to="/home">Linkd Logo Here</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                     </Navbar.Form>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to= "/home">
                        Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to= "/">
                            <svg src="./public/assets/notification.svg" className="notifIcon" type="svg" />
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} to= "/profile">
                            <svg src = "./public/assets/profile.svg" className="profileIcon" />
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} to= "/settings">
                        More
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}