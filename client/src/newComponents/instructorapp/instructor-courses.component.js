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

import InstructorCourse from './instructor-course.component'

export default class instructorCourses extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      instructor: props.instructor,
      courses: [],
      showJoinCourse: false,
      joinCode: '',
      failure: false,
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.instructor.email !== this.state.instructor.email) {
      // Wipe the courses and add them back in one by one
      this.setState({
        instructor: this.props.instructor,
        courses: []
      })
      this.props.instructor.courses.map(
        (courseId) => {
          axios.get(`http://localhost:5000/courses/getCourse/${courseId}`)
            .then(res => 
              this.setState( (prevState) => ({
                instructor: prevState.instructor,
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
    axios.put(`http://localhost:5000/courses/addinstructor/${this.state.instructor._id}/${this.state.joinCode}`)
      .then(
        (res) => {
          const courseId = res.data._id
          axios.put(`http://localhost:5000/instructors/enroll/${this.state.instructor.email}/${courseId}`)
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
            <InstructorCourse course={course} key={course.id}/>
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
    console.log(this.state.joinCode)
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
              <Form.Control placeholder="Enter join code" onChange={(e) => {this.setState({joinCode: e.target.value})}}/>
            </Form.Group>
            <Button variant="primary" type="click" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
}