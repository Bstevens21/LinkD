import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css';
import PostComposer from'./PostComposer';
import Post from './Post';
export default class Home extends Component{
    render(){
        return(
            <Grid>
               <div className="wrapper">
               <h1>Welcome, Name!</h1>
               <PostComposer />
               <Post />
                </div>
            </Grid>
            
        );
    }
}