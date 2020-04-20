import React from 'react'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import StudentCourse from './student-course.component'

export default class StudentCourses extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      student: props.student,
      courses: [],
      showJoinCourse: false,
      joinCode: '',
      failure: false,
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.student.email != this.state.student.email) {
      // Wipe the courses and add them back in one by one
      this.setState({
        student: this.props.student,
        courses: []
      })
      this.props.student.courses.map(
        (courseId) => {
          axios.get(`http://localhost:5000/courses/getCourse/${courseId}`)
            .then(res => 
              this.setState( (prevState) => ({
                student: prevState.student,
                courses: [...prevState.courses, res.data],
                showJoinCourse: false,
                joinCode: ''
              })
            ))
            .catch(err => console.log(err))
        }
      )
    }
  }

  handleSubmit = () => {
    axios.put(`http://localhost:5000/courses/addStudent/${this.state.student._id}/${this.state.joinCode}`)
      .then(
        (res) => {
          const courseId = res.data._id
          axios.put(`http://localhost:5000/students/enroll/${this.state.student.email}/${courseId}`)
          .then((res2) => {
            this.setState({
              showJoinCode: false,
              failure: false,
            })
          })
          .catch((err) => {
            this.setState({
              failure: true
            })
          })
        }
      )
      .catch((err) => {
        this.setState({
          failure: true
        })
      })
  }

  render () {
    const courseNavItems = this.state.courses.map(
      (course) => (
        <Nav.Item>
          <Nav.Link eventKey={course.name}>{course.name}</Nav.Link>
        </Nav.Item>
      )
    )
    const courseTabItems = this.state.courses.map(
      (course) => (
          <Tab.Pane eventKey={course.name}>
            <StudentCourse course={course} key={course.id}/>
          </Tab.Pane>
        )
    )
    const failureAlert = this.state.failure ?
    (
      <Alert variant="danger" onClose={() => this.setState({failure: false})} dismissible>
        <Alert.Heading>Could not join course!</Alert.Heading>
        <p>
          Try another join code.
        </p>
      </Alert>
    ) : null
    console.log(this.state.joinedCourseId)
    return(
      <React.Fragment>
        <h5>Course List</h5>
        <br/>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {courseNavItems}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {courseTabItems}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <hr></hr>
        <Button variant="primary" onClick={(e) => this.setState({showJoinCourse: true})}>
          Add Course
        </Button>
        <Modal show={this.state.showJoinCourse} onHide={(e) => this.setState({showJoinCourse: false})}>
          <Modal.Header closeButton>
            <Modal.Title>Join a Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            {failureAlert}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Join Code</Form.Label>
              <Form.Control placeholder="Enter join code" onChange={(e) => {this.setState({joinCourse: e.target.value})}}/>
            </Form.Group>
            <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
              Submit
            </Button>
          </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
}