import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./components/landing.component";
import Student from "./components/student/student.component";
import Instructor from "./components/instructor/instructor.component";

function App() {
  return (
    <Router>
      <Route path="/landing" component = {Landing} />
      <Route path="/student" component = {Student} />
      <Route path="/instructor" component = {Instructor} />
    </Router>
  );
}

export default App;