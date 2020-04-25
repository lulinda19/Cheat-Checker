import React, { Component } from 'react';
import axios from 'axios'

import { StudentConsumer } from "../../context/StudentContext";

export default class StudentHome extends Component {
  render () {
    return (
        <h5>Welcome, {this.props.student.firstName} {this.props.student.lastName}.</h5>
    );
  }
}