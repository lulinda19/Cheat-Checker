import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./components/landing.component";
import Student from "./components/student/student.component";
import Instructor from "./components/instructor/instructor.component";

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
      </Switch>
    </Router>
  );
}

export default App;