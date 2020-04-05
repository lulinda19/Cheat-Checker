import React, { Component } from 'react';
import axios from 'axios';

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: ''
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
          // TODO: redirect to student home page
          window.location = '/';
          console.log("Authentication successfull!");
        }
      })
      // TODO: handle authentication failure on front end
      .catch((err) => console.log('Authentication failed :('));
  }

  render() {
    return (
      <div>
      <h3>Login</h3>
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
    </div>
    )
  }
}