import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Jumbotron, Grid } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import "./PostComposer.css"


export default class PostComposer extends React.Component {
  render() {
    return (
    <Grid>
    <div className="composercontainer">
       <Jumbotron>
        <h2>Create Post!</h2>
            <form method='' action=''>
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
                      options='Sports, Food, Games, Hangout, Event, Club, Other'
                      required='true'
                      type=''
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

