import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Portal from './newComponents/login/portal.component'
import Landing from './newComponents/login/landing.component'
import StudentApp from './newComponents/studentapp/studentapp.component'
import InstructorApp from './newComponents/instructorapp/instructorapp.component'

import { StudentProvider } from "./context/StudentContext";


function NewApp () {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/student">
          <Portal type="student"/>
        </Route>
        <Route path="/instructor">
          <Portal type="instructor"/>
        </Route>
        <Route path="/studentapp">
          <StudentApp email="juicymango@seas.upenn.edu"/>
        </Route>
        <Router path="/instructorapp">
          <InstructorApp email="deskydesk@upenn.edu"/>
        </Router>
      </Switch>
    </Router>
  )
}

export default NewApp