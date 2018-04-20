import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css';
import PostComposer from'./PostComposer';
import Filters from './Filters'
import Post from './Post';
export default class Home extends Component{
    render(){
        return(
            <Grid>
               <div className="wrapper">
               <h1 className="welcome">Welcome to Linkd!</h1>
               <PostComposer />
               <Filters />
               <Route exact path ="/home" component ={Post} />
               <Route path ="/home/:sort" component ={Post} />
                </div>
            </Grid>
            
        );
    }
}