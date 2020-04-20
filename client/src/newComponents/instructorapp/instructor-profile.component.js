import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';

export default class InstructorProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.instructor.firstName,
      lastName: props.instructor.lastName,
      email: props.instructor.email,
      success: false
    }
  }

  componentDidUpdate() {
    if (this.props.instructor.email != this.state.email) {
      this.setState({
        firstName: this.props.instructor.firstName,
        lastName: this.props.instructor.lastName,
        email: this.props.instructor.email,
        success: false
      })
    }
  }    

  editProfile = () => {
    const email = this.state.email
    const firstName = this.state.firstName
    const lastName = this.state.lastName
    axios.put(`http://localhost:5000/instructors/updateName/${email}/${firstName}/${lastName}`)
      .then(res => {
        this.setState({
          success: true
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    const flag = this.state.success ?
      (<Alert variant="success">
          <p>
            Profile updated successfully
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => this.setState({success: false})} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>)
      : null
    return (
      <Form>
        {flag}
        <h5>Profile</h5>
        <Form.Group as={Row} controlId="formPlaintextFirstName">
          <Form.Label column sm="2">
            First Name
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextLastName">
          <Form.Label column sm="2">
            Last Name
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly value={this.state.email} />
          </Col>
        </Form.Group>
        <Button onClick={this.editProfile}>
          Edit
        </Button>
      </Form>
    );
  }
}