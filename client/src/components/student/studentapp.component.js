import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import StudentAppNavbar from "./studentapp-navbar.component";
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
        <StudentAppNavbar />
            <br />
              <Route path="/student/add" component = {SubmitAnswer} />
        </Container>
      </Router>
    </div>      
    );
  }
}