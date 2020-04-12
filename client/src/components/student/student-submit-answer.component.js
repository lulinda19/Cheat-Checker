import React, { Component } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.onChangeHomeworkName = this.onChangeHomeworkName.bind(this);
    this.onChangeQuestionNumber = this.onChangeQuestionNumber.bind(this);
    this.onChangeAnswerText = this.onChangeAnswerText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      homeworkName: '',
      questionNumber: '',
      answerText: '',
      failure: false
    }
  }

  onChangeHomeworkName(e) {
    this.setState({
      homeworkName: e.target.value
    });
  }

  onChangeQuestionNumber(e) {
    this.setState({
      questionNumber: e.target.value
    });
  }

  onChangeAnswerText(e) {
    this.setState({
      answerText: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const homeworkName = this.state.homeworkName;
    const questionNumber = this.state.questionNumber;
    const answerText = this.state.answerText;
  
    axios.post(`http://localhost:5000/homeworks/addAnswer`, {
      homeworkName: homeworkName,
      questionNumber: questionNumber,
      answer: answerText
    })
      .then(res => {
        if (res.status === 200) {
          // TODO: redirect to student home page
          window.location = '/answersuccess';
          console.log("Add answer successfull!");
        }
      })
      .catch((err) => {
        this.setState({
          failure: true
        })
        console.log('Create student account failed :(')
      });
  }

  render() {
    return (
      <div>
      <h3>Create Student Account</h3>
      {
        this.state.failure ?
        <Alert variant="danger" onClose={() => this.setState({ failure: false })} dismissible>
          <Alert.Heading>Could not create student account!</Alert.Heading>
          <p>
            There is already an account with email {this.state.email}.
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