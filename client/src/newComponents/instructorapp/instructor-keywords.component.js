import React, { Component } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

export default class InstructorKeywords extends Component {
  constructor(props) {
    super(props);

    this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
    this.onChangeKeywords = this.onChangeKeywords.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      courseCode: props.course.joinCode,
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
  
    const courseCode = this.state.courseCode;
    const keywords = this.state.keywords;
    const arr = keywords.split(",");
  
    axios.post(`http://localhost:5000/courses/addKeywords`, {
      joinCode: courseCode,
      keywords: arr
    })
      .then(res => {
        if (res.status === 200) {
          console.log("Add keyword successfull!");
        }
      })
      .catch((err) => {
        this.setState({
          failure: true
        })
        console.log('Add keyword failed :(')
      });
  }

  render() {
    return (
      <div>
      <h6>Add Keywords:</h6>
      {
        this.state.failure ?
        <Alert variant="danger" onClose={() => this.setState({ failure: false })} dismissible>
          <p>Could not add keywords!</p>
        </Alert>
        : null
      }
      <form onSubmit={this.onSubmit}>
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