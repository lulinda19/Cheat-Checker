import React from 'react'

import InstructorKeywords from './instructor-keywords.component'

export default class InstructorCourse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      course: props.course
    }
  }

  render() {
    const keywordList = this.state.course.universalKeywords.map(
      (keyword) => (
        <li>{keyword}</li>
      )
    )
    return(
      <React.Fragment>
        <h5>{this.state.course.name}</h5>
        <h6>Keywords:</h6>
        <ul>
          {keywordList}
        </ul>
        <InstructorKeywords course={this.state.course}/>
      </React.Fragment>
    )
  }
}