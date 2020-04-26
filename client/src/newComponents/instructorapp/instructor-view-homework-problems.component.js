import React from 'react'
import axios from 'axios'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'

import CourseHomeworkList from "./course-homework-question-list.component"

export default class InstructorViewQuestions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      instructor: props.instructor,
      courses: []
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
            <CourseHomeworkList course={course} key={course.id}/>
          </Tab.Pane>
        )
    )
    return (
      <React.Fragment>
        <h5>Homework Questions for Each Course</h5>
        <br/>
        <Tab.Container id="left-tabs-example">
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
      </React.Fragment>
    )
  }
}