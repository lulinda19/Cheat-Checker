import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

import InstructorHome from './instructor-home.component'
import InstructorCourses from './instructor-courses.component'
import InstructorProfile from './instructor-profile.component'
import InstructorAddQuestion from './instructor-add-question.component'

class InstructorApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      instructor: {
        firstName: "Default",
        lastName: "Instructor",
        email: "defaultInstructor@email.com",
        password: "defaultpassword",
        courses: []
      }
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:5000/instructors/email/${this.props.email}`)
      .then(res => {
        this.setState({
          instructor: res.data
        })
      })
      .catch(err => {
        console.log(err)
    })
  }

  render () {
    return(
      <Container>
        <br />
        <h3>Cheat Checker for Instructors</h3>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="home" href="/instructorapp/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="courses" href="/instructorapp/courses">Courses</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="add-question" href="/instructorapp/addQuestion">Add Question</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="profile" href="/instructorapp/profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/instructor">Log Out</Nav.Link>
          </Nav.Item>
        </Nav>
        <br/>
        <Switch>
          <Route path="/instructorapp/home">
            <InstructorHome instructor={this.state.instructor}/>
          </Route>
          <Route path="/instructorapp/courses">
            <InstructorCourses instructor={this.state.instructor}/>
          </Route>
          <Route path="/instructorapp/profile">
            <InstructorProfile instructor={this.state.instructor}/>
          </Route>
          <Route path="/instructorapp/addQuestion">
            <InstructorAddQuestion instructor={this.state.instructor}/>
          </Route>
        </Switch>
      </Container>
     )
  }
}

export default InstructorApp