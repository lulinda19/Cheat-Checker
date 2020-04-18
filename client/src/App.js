import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./components/landing.component";
import Student from "./components/student/student.component";
import StudentApp from "./components/student/studentapp.component"
import Instructor from "./components/instructor/instructor.component";
import InstructorApp from "./components/instructor/instructorapp.component";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/student/home">
          <StudentApp />
        </Route>
        <Route path="/student">
          <Student />
        </Route>
        <Route path="/instructor/home">
          <InstructorApp />
        </Route>
        <Route path="/instructor">
          <Instructor />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;