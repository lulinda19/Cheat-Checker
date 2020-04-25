import React, {Component} from 'react';
import Tab from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class StudentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Ju",
      lastName: "Mang",
      email: "juicymango@seas.upenn.edu"
    }
  }

  render () {
    return (
      <Form>
        <h1>Profile</h1>
        <Form.Group as={Row} controlId="formPlaintextFirstName">
          <Form.Label column sm="2">
            First Name
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="Ju" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextLastName">
          <Form.Label column sm="2">
            Last Name
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="Mang" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="juicymango@seas.upenn.edu" />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Edit
        </Button>
      </Form>
    );
  }
}