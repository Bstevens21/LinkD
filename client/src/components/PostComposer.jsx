import React, {Component} from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Jumbotron, Grid } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import "./PostComposer.css"
import { browserHistory, BrowserRouter as Router,  Route, Link} from 'react-router-dom'


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
    alert('Hello, ' + this.state.date + '! Please check your email for a verification link.');
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
                    <Input
                      hasLabel='true'
                      htmlFor='textInput'
                      label='Title'
                      required='true'
                      type='text'
                      checked={this.state.title}
                      onChange={this.handleInputChange}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Textarea
                      hasLabel='true'
                      htmlFor='textarea'
                      label='Description'
                      required='true'
                      type='text'
                      checked={this.state.description}
                      onChange={this.handleInputChange}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Textarea
                      hasLabel='true'
                      htmlFor='textarea'
                      label='Location'
                      type='text'
                      required='true'
                      checked={this.state.location}
                      onChange={this.handleInputChange}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Select
                      hasLabel='true'
                      htmlFor='catlist'
                      label='Category'
                      type='text'
                      options='sports, food, games, event, club, other'
                      required='true'
                      checked={this.state.category}
                      onChange={this.handleInputChange}
                    />
                </fieldset>
                <fieldset>
                    <Calendar
                      hasLabel='true'
                      htmlFor="calendar"
                      label="When"
                      type='date'
                      required='true'
                      // checked={this.state.when}
                      // onChange={this.handleInputChange}
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

