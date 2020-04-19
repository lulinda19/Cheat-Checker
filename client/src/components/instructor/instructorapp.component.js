import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import InstructorAppNavbar from "./instructorapp-navbar.component";
import AddQuestion from "./instructor-add-question.component";
import AddKeywords from "./instructor-add-keywords.component";

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
          <Route path="/instructor/keywords" component = {AddKeywords} />
        </Container>
      </Router>
    );
  }
}