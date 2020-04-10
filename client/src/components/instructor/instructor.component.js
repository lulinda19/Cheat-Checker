import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import InstructorNavbar from "./instructor-navbar.component";
import InstructorLogin from "./instructor-login.component";
import CreateInstructorAccount from "./instructor-create-account.component";

function Instructor() {
  return (
    <Router>
      <div>
        <InstructorNavbar />
        <br/>
        <Route path="/instructor/login" component = {InstructorLogin} />
        <Route path="/instructor/create" component = {CreateInstructorAccount} />
      </div>
    </Router>
  );
}

export default Instructor;