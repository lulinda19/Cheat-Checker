import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Flag(props) {
  const homework = props.homework

  return(
    <Card bg="light">
      <Card.Body>
        <h5>Homework Name: {homework.name}</h5>
        <h6>Homework Questions: {homework.questions}</h6>
      </Card.Body>
    </Card>
  )
}