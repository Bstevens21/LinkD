import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Jumbotron, Grid } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import "./Filters.css"


export default class Filters extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/link', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: this.state.category
      })
    }).then(res => {
      return res.json()
    })
    .then(res => {
      console.log('OneTime:'+res.redirectUrl)
      this.props.history.push(res.redirectUrl)
      window.location.reload()
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <Grid>
        <div className="filterwrap">
          <form onSubmit={this.handleSubmit}>
            <fieldset className="form-group">
              <label htmlFor="sortBy" title ="Sort by:" />
               <h3>Filter By:</h3>
            </fieldset>
              <fieldset className ="form-group">
                <select
                id='category'
                className='category'
                name='category'
                required='false'
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
                  <input
                  className='btn btn-primary' 
                  type='submit'
                  value='Submit'
                  text='Sort'
                  />
              </fieldset>
          </form>
        </div>
      </Grid>
    )
  }
}