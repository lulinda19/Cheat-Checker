import React from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'

import Flag from './flag.component'

export default class CourseFlagList extends React.Component {
  constructor() {
    super()

    this.state = {
      updated: false
    }
  }

  onClick = () => {
    axios.put(`http://localhost:5000/courses/refreshFlags`)
      .then( res => {
        this.setState({
          updated: true
        });
      })
      .catch(err => console.log(err))
  }
  
  render () {
    let flagComponents = this.props.course.universalFlags.map(
      (flag) => (
        <div>
          <Flag flag={flag} />
          <br />
        </div>
      )
    )
    flagComponents = (flagComponents.length == 0) ? <h6>No flagged posts!</h6> : flagComponents
    return (
      <React.Fragment>
        <Alert show={this.state.updated} variant="success" dismissible onClose={() => this.setState({updated: false})}>
          Flags were updated successfully!
        </Alert>
        <Button variant="outline-dark" type="button" onClick={this.onClick}>Refresh Flags</Button>
        <br/>
        <br/>
        { flagComponents }
      </React.Fragment>
    )
  }
}