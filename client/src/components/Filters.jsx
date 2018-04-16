import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Jumbotron, Grid } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import "./Filters.css"


class Label extends React.Component {
  render() {
    if (this.props.hasLabel === 'true') {
      return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
    }
  }
}

class Select extends React.Component {
  render() {
    // Get all options from option prop
    const selectOptions = this.props.options.split(', ');

    // Generate list of options
    const selectOptionsList = selectOptions.map((selectOption, index) => {
      return <option key={index} value={index}>{selectOption}</option>
    });

    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        
        <select
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>Select one option</option>

          {selectOptionsList}
        </select>
      </fieldset>
    );
  }
};

class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
        <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="LLL"
            timeCaption="time"
        />
        </fieldset>
        );
  }
}

class SortButton extends React.Component {
  render() {
    return (
      <fieldset>
        <button
         className="btn sortbutton"
          type={this.props.type || 'button'}
          value={this.props.value || null}
        >
          {this.props.text}
        </button>
      </fieldset>
    );
  }
};

export default class Filters extends React.Component{
    render(){
        return(
        <Grid>
            <div className="filterwrap">
                <ul>
                    <li>Sort By</li>
                    <li>
                     <Select
                      hasLabel='true'
                      htmlFor='catlist'
                      label='Category'
                      options='Sports, Food, Games, Hangout, Event, Club, Other'
                      required='false' 
                      />
                      </li>
                    <li>
                        <Calendar
                            hasLabel='true'
                            htmlFor="calendar"
                            label="When"
                            required='false'
                    />
                    </li>
                    <li>
                        <SortButton
                        className='sortbutton'
                        type='submit'
                        value='submit'
                        text='Sort'
                        />
                    </li>
                </ul>
                </div>
        </Grid>
        )
    }
}