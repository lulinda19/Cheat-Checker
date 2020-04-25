import React from 'react'

class StudentCourse extends React.Component {
  render () {
    const instructorList = this.props.course.instructors.map(
      (instructor) => (
        <li>{instructor}</li>
      )
    )
    return (
      <React.Fragment>
        <h5>{this.props.course.name}</h5>
        <h6>Instructors</h6>
        <ul>
          {instructorList}
        </ul>
      </React.Fragment>
    )
  }
}

export default StudentCourse