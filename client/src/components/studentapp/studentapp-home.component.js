import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'

import { StudentContext } from "./auth.component";
import Tab from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

export default class StudentHome extends Component {
  render () {
    return (
        // TODO: Fix student context
      <Container>
        {/* <StudentContext.Consumer>
          {
            (context) => (
              context.state.isAuthorized
              ? <h1>My email is {context.state.email}</h1>
              : <h1>Oops! Please login first</h1>
            )
          }
        </StudentContext.Consumer> */}
      </Container>
    );
  }
}