import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import StudentNavbar from "./student-navbar.component";
import SubmitAnswer from "./student-submit-answer.component";

export default class StudentApp extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
      <Router>
        <Container>
        <StudentNavbar />
            <br />
              <Route path="/student/submit" component = {SubmitAnswer} />
        </Container>
      </Router>
    </div>      
    );
  }
}