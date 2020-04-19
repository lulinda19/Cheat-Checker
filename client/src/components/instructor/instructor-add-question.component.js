import React, { Component } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
    this.onChangeHomeworkName = this.onChangeHomeworkName.bind(this);
    this.onChangeQuestionNumber = this.onChangeQuestionNumber.bind(this);
    this.onChangeQuestionText = this.onChangeQuestionText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      courseCode: '',
      homeworkName: '',
      questionNumber: '',
      questionText: '',
      failure: false
    }
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

  onChangeQuestionText(e) {
    this.setState({
      questionText: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const courseCode = this.state.courseCode;
    const homeworkName = this.state.homeworkName;
    const questionNumber = this.state.questionNumber;
    const questionText = this.state.questionText;
  
    axios.post(`http://localhost:5000/homeworks/addQuestion`, {
      joinCode: courseCode,
      homeworkName: homeworkName,
      questionNumber: questionNumber,
      questionText: questionText
    })
      .then(res => {
        if (res.status === 200) {
          // TODO: redirect to student home page
          window.location = '/instructor/home';
          console.log("Add question successfull!");
        }
      })
      .catch((err) => {
        this.setState({
          failure: true
        })
        console.log('Add question failed :(')
      });
  }

  render() {
    return (
      <div>
      <h3>Add New Homework Question</h3>
      {
        this.state.failure ?
        <Alert variant="danger" onClose={() => this.setState({ failure: false })} dismissible>
          <Alert.Heading>Could not add question!</Alert.Heading>
        </Alert>
        : null
      }
      <form onSubmit={this.onSubmit}>
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
          <label>Question Text: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.questionText}
              onChange={this.onChangeQuestionText}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Add Question" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}