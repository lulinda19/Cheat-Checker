import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'

import StudentLogin from './student-login.component'
import InstructorLogin from './instructor-login.component'
import CreateStudentAccount from './student-create-account.component'
import CreateInstructorAccount from './instructor-create-account.component'

function Portal (props) {
  const text = props.type === "student" ? "Students" : "Instructors"
  const login = props.type === "student" ? <StudentLogin /> : <InstructorLogin />
  const createAccount = props.type == "student" ? <CreateStudentAccount /> : <CreateInstructorAccount />
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Cheat Checker for {text}</Card.Title>
          <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Login">
              {login}
            </Tab>
            <Tab eventKey="createAccount" title="Create Account">
              {createAccount}
            </Tab>
          </Tabs>
          <br />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Portal