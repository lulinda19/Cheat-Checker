import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'

import InstructorNavbar from "./instructor-navbar.component";
import InstructorLogin from "./instructor-login.component";
import CreateInstructorAccount from "./instructor-create-account.component";

function Instructor() {
  return (
    <Router>
      <Container>
        <InstructorNavbar />
        <br/>
        <Route path="/instructor/login" component = {InstructorLogin} />
        <Route path="/instructor/create" component = {CreateInstructorAccount} />
      </Container>
    </Router>
  );
}

export default Instructor;