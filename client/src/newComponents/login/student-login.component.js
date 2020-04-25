import React, { Component } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import { StudentConsumer } from "../../context/StudentContext";
import StudentApp from '../studentapp/studentapp.component'

export default class StudentLogin extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      failure: false,
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const email = this.state.email;
    const password = this.state.password;
  
    axios.get(`http://localhost:5000/students/authenticate/${email}/${password}`)
      .then(res => {
        if (res.status === 200) {
          // TODO: remember who student is
          console.log("Authentication successfull!");
          window.location = '/studentapp';
        } else {
          this.setState({
            failure: true
          });
        }
      })
      .catch((err) => {
        this.setState({
          failure: true
        })
        console.log('Authentication failed :(')
      });
  }

  render() {
    return (
      <div>
      <br/>
      {
        this.state.failure ?
        <Alert variant="danger" onClose={() => this.setState({ failure: false })} dismissible>
          <Alert.Heading>Authentication failed!</Alert.Heading>
          <p>
            Incorrect email or password.
          </p>
        </Alert>
        : null
      }
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
      <a href="/instructor">I am an instructor</a>
    </div>
    )
  }
}