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
      when: '',
      location: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    })
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
                      htmlFor='textInput'
                      className='title'
                      name='title'
                      required='true'
                      type='text'
                      checked={this.state.title}
                      onChange={this.handleInputChange}
                    />
                </fieldset>
                Description:
                <fieldset className="form-group">
                   <label htmlFor="body" title="Description:" />
                    <textarea
                    id='description'
                    label='Description'
                    type='textarea'
                    required='true'
                    />
                </fieldset>
                <fieldset className="form-group">
                  Category:
                   <label htmlFor="catlist" title="Category:" />
                    <select
                      id='category'
                      label='Category'
                      type='text'
                      options='sports, food, games, event, club, other'
                      required='true'
                    >
                    <option value = "sports">Sports</option>
                    <option value = "food">Food</option>
                    <option value = "games">Games</option>
                    <option value = "event">Event</option>
                    <option value = "club">Club</option>
                    <option value = "other">Other</option>
                    </select>
                
                </fieldset>
                <fieldset>
                  Date:
                   <label htmlFor="date" title="Date:" />
                    <input
                    id='date'
                    htmlFor="calendar"
                    label="date"
                    required='true'
                    type="date"
                    />
                </fieldset>
                <fieldset>
                  Time:
                   <label htmlFor="date" title="Time:" />
                    <input
                    id='time'
                    className="time"
                    htmlFor="time"
                    label="time"
                    required='true'
                    type="time"
                    />
                </fieldset>
                <fieldset>
                <input
                  type='submit'
                  value='submit'
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

