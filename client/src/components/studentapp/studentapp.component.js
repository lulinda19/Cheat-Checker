import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'

export default class StudentApp extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <Container>

        </Container>
      </Router>
    );
  }
}