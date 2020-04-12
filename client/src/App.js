import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./components/landing.component";
import Student from "./components/student/student.component";
import Instructor from "./components/instructor/instructor.component";
import StudentApp from "./components/studentapp/studentapp.component";
import InstructorApp from "./components/instructorapp/instructorapp.component";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/student">
          <Student />
        </Route>
        <Route path="/instructor">
          <Instructor />
        </Route>
        <Route path="/studentapp">
          <StudentApp />
        </Route>
        <Route path="/instructorapp">
          <InstructorApp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;