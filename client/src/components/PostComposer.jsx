import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'


export default class PostComposer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter Title"
            onChange={this.handleChange}
          />
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter Description"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}
