import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

import StudentHome from './student-home.component'
import StudentCourses from './student-courses.component'
import StudentProfile from './student-profile.component'
import StudentSubmit from './student-submit.component'

class StudentApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      student: {
        firstName: "Default",
        lastName: "User",
        email: "default@email.com",
        password: "defaultpassword",
        courses: []
      }
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:5000/students/email/${this.props.email}`)
      .then(res => {
        this.setState({
          student: res.data
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
        <h3>Cheat Checker for Students</h3>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="home" href="/studentapp/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="courses" href="/studentapp/courses">Courses</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="submit" href="/studentapp/submit">Submit</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="profile" href="/studentapp/profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/student">Log Out</Nav.Link>
          </Nav.Item>
        </Nav>
        <br/>
        <Switch>
          <Route path="/studentapp/home">
            <StudentHome student={this.state.student}/>
          </Route>
          <Route path="/studentapp/courses">
            <StudentCourses student={this.state.student}/>
          </Route>
          <Route path="/studentapp/submit">
            <StudentSubmit student={this.state.student}/>
          </Route>
          <Route path="/studentapp/profile">
            <StudentProfile student={this.state.student}/>
          </Route>
        </Switch>
      </Container>
     )
  }
}

export default StudentApp