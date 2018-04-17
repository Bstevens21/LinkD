import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Post.css';

export default class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        };
    }
    componentWillMount() {
        fetch('/api/allPosts')
            .then(res => res.json())
            .then(data => {
                this.setState({ posts: data.post})
                console.log(data)
            })
    }

    formatDate(date) {
        var date = new Date(date);
        var options = {  
            weekday: "long", year: "numeric", month: "short",  
            day: "numeric", hour: "2-digit", minute: "2-digit"  
        };
        return date.toLocaleTimeString("en-us", options);
    }

    render(){
        return(
            this.state.posts.map((anObjectMapped, index) => {
                return (
                        <Grid>
                            <Row className="show-grid text-left">
                                <Col md={12} sm={6} className="post-wrapper">
                                    <div className="post">
                                       <Link to="/">
                                            <Button bsStyle="secondary" className="interested"> I'm interested</Button>
                                        </Link>
                                        <h1>{anObjectMapped.postTitle}</h1>
                                        <p>{anObjectMapped.postBody}</p>
                                        <p>{anObjectMapped.postCategory}</p>
                                        <p>{anObjectMapped.postLocation}</p>
                                        <p>{this.formatDate(anObjectMapped.postStartTime)}</p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                );
            })
        );
    }
}