import React, { Component } from 'react';
import axios from 'axios'

export default class InstructorHome extends Component {
  render () {
    return (
        <h5>Welcome, {this.props.instructor.firstName} {this.props.instructor.lastName}.</h5>
    );
  }
}