import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'

import StudentNavbar from "./student-navbar.component";
import StudentLogin from "./student-login.component";
import CreateStudentAccount from "./student-create-account.component";
import StudentApp from "./studentapp.component"


export default class Student extends Component {
  render () {
    return (
      <div>
        <Router>
          <Container>
            <StudentNavbar />
            <br />
              <Route path="/student/login" component = {StudentLogin} />
              <Route path="/student/create" component = {CreateStudentAccount} />
          </Container>
          <Route path="/student/home" component = {StudentApp} />
        </Router>
      </div>
    );
  }
}