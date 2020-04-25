import React, { Component } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

export default class StudentSubmitAnswers extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
    this.onChangeHomeworkName = this.onChangeHomeworkName.bind(this);
    this.onChangeQuestionNumber = this.onChangeQuestionNumber.bind(this);
    this.onChangeAnswerText = this.onChangeAnswerText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      courseCode: '',
      homeworkName: '',
      questionNumber: '',
      answerText: '',
      failure: false
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeCourseCode(e) {
    this.setState({
      courseCode: e.target.value
    });
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
  
    const email = this.state.email;
    const courseCode = this.state.courseCode;
    const homeworkName = this.state.homeworkName;
    const questionNumber = this.state.questionNumber;
    const answerText = this.state.answerText;
  
    axios.post(`http://localhost:5000/homeworks/addAnswer`, {
      email: email,
      joinCode: courseCode,
      homeworkName: homeworkName,
      questionNumber: questionNumber,
      answer: answerText
    })
      .then(res => {
        if (res.status === 200) {
          // TODO: redirect to student home page
          window.location = '/student/home';
          console.log("Add answer successfull!");
        } else {
          this.setState({
            failure: true
          })
          console.log('Add answer failed')
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
      <h3>Add Answer to Homework Question</h3>
      {
        this.state.failure ?
        <Alert variant="danger" onClose={() => this.setState({ failure: false })} dismissible>
          <Alert.Heading>Could not add answer!</Alert.Heading>
        </Alert>
        : null
      }
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Your email: </label>
           <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group"> 
          <label>Course Number: </label>
           <input  type="text"
              required
              className="form-control"
              value={this.state.courseCode}
              onChange={this.onChangeCourseCode}
              />
        </div>
        <div className="form-group">
          <label>Homework Name: </label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.homeworkName}
              onChange={this.onChangeHomeworkName}
              />
        </div>

        <div className="form-group">
          <label>Question Number: </label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.questionNumber}
              onChange={this.onChangeQuestionNumber}
              />
        </div>

        <div className="form-group">
          <label>Answer Text</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.answerText}
              onChange={this.onChangeAnswerText}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Add Answer" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}