import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import InstructorAppNavbar from "./instructorapp-navbar.component";
import AddQuestion from "./instructor-add-question.component"

export default class InstructorApp extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <Container>
        <InstructorAppNavbar />
        <br />
          <Route path="/instructor/add" component = {AddQuestion} />
        </Container>
      </Router>
    );
  }
}