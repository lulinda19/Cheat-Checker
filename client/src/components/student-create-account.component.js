import React, { Component } from 'react';
import axios from 'axios';

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
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

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const email = this.state.email;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
  
    axios.post(`http://localhost:5000/students/create`, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    })
      .then(res => {
        if (res.status === 200) {
          // TODO: redirect to student home page
          window.location = '/';
          console.log("Create student account successfull!");
        }
      })
      // TODO: handle authentication failure on front end
      .catch((err) => console.log('Create student account failed :('));
  }

  render() {
    return (
      <div>
      <h3>Create Student Account</h3>
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
          <label>First Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              />
        </div>

        <div className="form-group">
          <label>Last Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.LastName}
              onChange={this.onChangeLastName}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Account" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}