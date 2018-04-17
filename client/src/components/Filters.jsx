import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Jumbotron, Grid } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import "./Filters.css"


export default class Filters extends React.Component{
    render(){
        return(
        <Grid>
            <div className="filterwrap">
            <form onSubmit={this.handleSubmit}>
              <fieldset className="form-group">
                <label htmlFor="sortBy" title ="Sort by:" />
                 Sort By
              </fieldset>
                    <fieldset className ="form-group">
                     <select
                      id='category'
                      className='category'
                      name='category'
                      required='false'
                      type='text'
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
                        className='sortbutton'
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