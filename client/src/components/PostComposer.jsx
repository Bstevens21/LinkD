import React, {Component} from 'react'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Jumbotron, Grid } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import "./PostComposer.css"
import { browserHistory, BrowserRouter as Router,  Route, Link} from 'react-router-dom'



export default class PostComposer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category: '',
      when: moment(),
      location: '',
      showHidePostComposer: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.showHide = this.showHide.bind(this);
  }

  handleTimeChange(date) {
    this.setState({
      when: date
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  showHide(event) {
    event.preventDefault();
    this.setState({
      showHidePostComposer: !this.state.showHidePostComposer
    })
    console.log('hello'+this.state.showHidePostComposer)
  }

  handleSubmit(event) {
    //alert('Hello, ' + this.state.title + this.state.location + this.state.description + this.state.category + ' ' + this.state.when);
    event.preventDefault();
    fetch('/api/createPost', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        start: this.state.when,
        body: this.state.description,
        category: this.state.category,
        location: this.state.location
      })
    }).then(window.location.reload());
    // .then(res => {
    //   return res.json()
    // })
    // .then(res => this.props.history.push(res.redirectUrl));
  }


  render() {
    return (
    <Grid>
    <div className="composercontainer">
       <Jumbotron>
        <h2 className="welcometext">Create a Post!</h2>
            <form style={{display: this.state.showHidePostComposer ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
                <fieldset className="form-group">
                   <label htmlFor="title" title="Title:" />
                   <h3>Title:</h3>
                    <input
                     id='title'
                      className='title'
                      name='title'
                      required='true'
                      type='text'
                      checked={this.state.title}
                      onChange={this.handleInputChange}
                    />
                </fieldset>
                <fieldset className="form-group">
                   <label htmlFor="description" title="Description:" />
                   <h3>Description:</h3>
                    <textarea
                     id='description'
                      className='description'
                      name='description'
                      required='true'
                      type='text'
                      checked={this.state.description}
                      onChange={this.handleInputChange}
                    />
                </fieldset>
                <fieldset className="form-group">
                   <label htmlFor="location" title="Location:" />
                   <h3>Location:</h3>
                    <textarea
                     id='location'
                      className='location'
                      name='location'
                      required='true'
                      type='text'
                      checked={this.state.location}
                      onChange={this.handleInputChange}
                    />
                </fieldset>
                <fieldset className="form-group">
                   <label htmlFor="catlist" title="Category:" />
                   <h3>Category:</h3>
                    <select
                      id='category'
                      className='category'
                      name='category'
                      required='true'
                      type='text'
                      checked={this.state.category}
                      onChange={this.handleInputChange}
                    >
                    <option value = "default">Select Type</option>
                    <option value = "sport">Sports</option>
                    <option value = "food">Food</option>
                    <option value = "game">Games</option>
                    <option value = "event">Event</option>
                    <option value = "club">Club</option>
                    <option value = "other">Other</option>
                    </select>
                
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="date" title="Date:" />
                  <h3>Date and time of activity:</h3>
                    <DatePicker
                      popperClassName="Datepicker"
                      selected={this.state.when}
                      onChange={this.handleTimeChange}
                      showTimeSelect
                      dateFormat="LLL" 
                        />

                </fieldset>
                <fieldset>
                <input
                  type='submit'
                  value='Submit'
                  text='Post'
                  className="btn btn-primary"
                />
                </fieldset>
          </form>
        </Jumbotron>
        <Form onSubmit={this.showHide} style={{display: this.state.showHidePostComposer ? 'none' : 'block' }}>
          <input
            type='submit'
            value='Create Post'
            text='Post'
            className="createBtn btn-primary"
          />
          </Form>
        </div>
        </Grid>
    )
  }
}

