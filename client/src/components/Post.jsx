import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Post.css';

export default class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
          posts: [],

        };
    }

    filterByCategory(cat){
        return (cat.postCategory == this.props.match.params.sort)
    }

    componentWillMount() {
        console.log(this.props.match.params.sort)
        if (this.props.match.params.sort){
            fetch('/api/allPosts')
            .then(res => res.json())
            .then(data => {
                this.setState({ posts: data.post.filter(cat => this.filterByCategory(cat))})
            })
        } else {
            fetch('/api/allPosts')
            .then(res => res.json())
            .then(data => {
                this.setState({ posts: data.post.sort(function(a ,b){return a.postStartTime.slice(8,10) - b.postStartTime.slice(8,10)})})
            })
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('/api/interested', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
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
                            <div className="post-wrapper">
                                    <div className="post">
                            
                                       <form onSubmit={this.handleSubmit}>
                                            <input type="submit" value="I'm Interested" className="interested"/>
                                        </form>
                                        <h1>{anObjectMapped.postTitle}</h1>
                                        <p>{anObjectMapped.postBody}</p>
                                        <hr />
                                        <div className="postDetails">
                                        <h6><span>category: </span>{anObjectMapped.postCategory.charAt(0).toUpperCase()+anObjectMapped.postCategory.slice(1)}</h6>
                                        <br/>
                                        <h6><span>where: </span>{anObjectMapped.postLocation}</h6>
                                        <br/>
                                        <h6><span>when: </span>{this.formatDate(anObjectMapped.postStartTime)}</h6>
                                        </div>
                                    </div>
                                </div>
                        </Grid>
                );
            })
        );
    }
}