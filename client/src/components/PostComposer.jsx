import React, {Component} from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Jumbotron, Grid } from 'react-bootstrap'
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
      location: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(date, formatted) {
    this.setState({
      when: formatted
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
        <h2>Create Post!</h2>
            <form onSubmit={this.handleSubmit}>
                <fieldset className="form-group">
                   <label htmlFor="title" title="Title:" />
                   Title:
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
                   Description:
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
                   Location:
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
                   Category:
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
                  Date and time of activity:
                    <DatePicker
                      selected={this.state.when}
                      onChange={this.handleTimeChange}
                      showTimeSelect
                      dateFormat="LLL" />
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
        </div>
        </Grid>
    )
  }
}

