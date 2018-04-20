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

    filterByCategory(cat){
        return (cat.postCategory == this.props.match.params.sort)
    }

    componentWillMount() {
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
                // this.setState({ posts: data.post.sort(function(a ,b){return a.postStartTime.slice(8,10) - b.postStartTime.slice(8,10)})})
            })
        }
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
                                            <input id="prodId" name="prodId" type="hidden" value={anObjectMapped.postTitle}/>
                                            <input type="submit" value="I'm Interested" onChange={this.handleInputChange} className="interested"/>
                                        </form>
                                        <h1>{anObjectMapped.postTitle}</h1>
                                        <p>{anObjectMapped.postBody}</p>
                                        <h6>{anObjectMapped.postCategory.charAt(0).toUpperCase()+anObjectMapped.postCategory.slice(1)}</h6>
                                        <h6>{anObjectMapped.postLocation}</h6>
                                        <h6>{this.formatDate(anObjectMapped.postStartTime)}</h6>
                                    </div>
                                </div>
                        </Grid>
                );
            })
        );
    }
}