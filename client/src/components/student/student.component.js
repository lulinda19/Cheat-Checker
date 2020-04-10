import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'

import StudentNavbar from "./student-navbar.component";
import StudentLogin from "./student-login.component";
import CreateStudentAccount from "./student-create-account.component";

export default class Student extends Component {
  render () {
    return (
      <Router>
        <Container>
          <StudentNavbar />
          <br />
          <Route path="/student/login" component = {StudentLogin} />
          <Route path="/student/create" component = {CreateStudentAccount} />
        </Container>
      </Router>
    );
  }
}