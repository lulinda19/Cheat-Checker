import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import StudentAppNavbar from "./studentapp-navbar.component";
import SubmitAnswer from "./student-submit-answer.component";
import StudentHome from "./studentapp-home.component"
import StudentCourseList from "./student-course-list.component";
import StudentProfile from "./profile.component.js";

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
            <Switch>
              <Route path="/studentapp/home">
                <StudentHome />
              </Route>
              <Route path="/studentapp/profile">
                <StudentProfile />
              </Route>
              <Route path="/studentapp/courses">
                <StudentCourseList />
              </Route>
            </Switch>
        </Container>
      </Router>
    </div>      
    );
  }
}