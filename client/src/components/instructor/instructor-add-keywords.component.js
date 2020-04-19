import React, { Component } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
    this.onChangeKeywords = this.onChangeKeywords.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      courseCode: '',
      keywords:'',
      failure: false
    }
  }

  onChangeCourseCode(e) {
    this.setState({
      courseCode: e.target.value
    });
  }

  onChangeKeywords(e) {
    this.setState({
      keywords: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const courseCode = this.state.courseCode;
    const keywords = this.state.keywords;
    const arr = keywords.split(",");
  
    axios.post(`http://localhost:5000/courses/addKeywords`, {
      joinCode: courseCode,
      keywords: arr
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
          <Alert.Heading>Could not add keywords!</Alert.Heading>
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
          <label>Universal Keywords (enter a list of keywords separated by commas): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.keywords}
              onChange={this.onChangeKeywords}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Add Keywords" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}