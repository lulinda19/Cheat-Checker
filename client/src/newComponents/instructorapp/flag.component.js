import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Flag(props) {
  const flag = props.flag
  const date = new Date(0)
  const utcSec = Number(props.flag.date)
  date.setUTCSeconds(utcSec)
  return(
    <Card bg="light">
      <Card.Body>
        <h5>Question Title: {flag.title}</h5>
        <h6>🗓️ {date.toLocaleDateString()}</h6>
        Question ID: {flag.questionId}
        <br/>
        StackExchange User: {flag.user}
        <br/>
        🔗 <Card.Link href={flag.url} target="_blank">{flag.url}</Card.Link>
      </Card.Body>
    </Card>
  )
}