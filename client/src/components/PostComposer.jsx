import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Jumbotron, Grid } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import "./PostComposer.css"


class Button extends React.Component {
  render() {
    return (
      <fieldset>
        <button
         className="btn btn-primary"
          type={this.props.type || 'button'}
          value={this.props.value || null}
        >
          {this.props.text}
        </button>
      </fieldset>
    );
  }
};

class Label extends React.Component {
  render() {
    if (this.props.hasLabel === 'true') {
      return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
    }
  }
}

class Input extends React.Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <input
          id={this.props.htmlFor}
          max={this.props.max || null}
          min={this.props.min || null}
          name={this.props.name || null}
          placeholder={this.props.placeholder || null}
          required={this.props.required || null}
          step={this.props.step || null}
          type={this.props.type || 'text'}
        />
      </fieldset>
    );
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

class Textarea extends React.Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        <textarea
          cols={this.props.cols || null}
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
          rows={this.props.rows || null}
        >
        </textarea>
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

export default class PostComposer extends React.Component {
  render() {
    return (
    <Grid>
    <div className="composercontainer">
       <Jumbotron>
        <h2>Create Post!</h2>
            <form method='' action=''>
                <fieldset className="form-group">
                    <Input
                      hasLabel='true'
                      htmlFor='textInput'
                      label='Title'
                      required='true'
                      type='text'
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Textarea
                    hasLabel='true'
                    htmlFor='textarea'
                    label='Description'
                    required='true'
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Select
                      hasLabel='true'
                      htmlFor='catlist'
                      label='Category'
                      options='Sports, Food, Games, Hangout, Event, Club, Other'
                      required='true'
                    />
                </fieldset>
                <fieldset>
                    <Calendar
                    hasLabel='true'
                    htmlFor="calendar"
                    label="When"
                    required='true'
                    />
                </fieldset>
                <Button
                  type='submit'
                  value='submit'
                  text='Post'
                />
          </form>
        </Jumbotron>
        </div>
        </Grid>
    )
  }
}

