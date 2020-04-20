import React, {Component} from 'react';
import Tab from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';

export default class StudentCourseList extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   courseNames: []
    // }
  }

  // componentDidMount () {
  //   axios.get(`http://localhost:5000/courses/getCourse/5e9b4af81c9d4400003fc3a7`)
  //     .then(res => {
  //       let courseName = res.data.courseName;
  //       this.setState({
  //         courseNames: [courseName]
  //       })
  //     })
  //     .catch()
  // }

  render () {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">CIS160</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">MATH240</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <p>CIS160</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <p>MATH240</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    );
  }
}