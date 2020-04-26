import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Flag(props) {
  const homework = props.homework

  const questionDisplay = props.homework.questions.map(
    (question) => <li>{question.questionText}</li>
  )

  return(
    <Card bg="light">
      <Card.Body>
        <h5>Homework Name: {homework.name}</h5>
        <h6>Homework Questions:</h6>
        <ul>{questionDisplay}</ul>
      </Card.Body>
    </Card>
  )
}