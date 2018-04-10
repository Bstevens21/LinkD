import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css';
import PostComposer from'./PostComposer';
export default class Home extends Component{
    render(){
        return(
            <Grid>
               <div className="wrapper">
               <PostComposer />
                <Link to="/Profile">
                        <Button bsStyle="primary">Post!</Button>
                    </Link>
                    <Row className="show-grid text-left">
                        <Col md={12} sm={6} className="post-wrapper">
                            <div className="post">
                                <h1>posts show up here</h1>
                                <p>Well, they got the Asian right… "hotties" might be a stretch. I'll sacrifice anything for my children. Hair up, glasses off. There are dozens of us! Dozens! I was once called the worst audience participant Cirque du Soleil ever had. I cheated and I lied and I whored around. I'm a scholar. I enjoy scholarly pursuits. Suddenly playing with yourself is a scholarly pursuit?

                                Happy Franklin Friday. And THAT'S why you always leave a note. Dad would stage elaborate situations using a one-armed man to teach us lessons. She's a contestant. It's sorta like an inner beauty pageant. Ah, there it is.

                                I'll sacrifice anything for my children. Or it could be your colon. I'd want to get in there and find some answers. I think I might have someone who's going to circumvrent the law.

                                Speaking of settling, How's Ann? GENE!! [screams] Mr. Zuckerkorn, you've been warned about touching. Barry: You said spanking. Did you enjoy your lunch, mom? You drank it fast enough. Happy Franklin Friday. No, Pop-pop does not get a treat. I just bought you a f**king pizza. You just made a fool out of yourself in front of T-Bone. But I'm the oldest. The matriarch if you will.

                                Actually, that was a box of Oscar's legally obtained medical marijuana. Primo bud. Real sticky weed. What's gotten into you? Have you been eating cheese? Hahahahah! I need a tea to give my dingle less tingle. Happy Franklin Friday.</p>
                                <Link to="/">
                                    <Button bsStyle="secondary" className="interested"> I'm interested</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Grid>
            
        );
    }
}