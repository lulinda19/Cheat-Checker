import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'

export default class InstructorApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authentication: props.authentication,
      email: props.email
    }
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