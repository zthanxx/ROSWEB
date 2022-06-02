import React, { Component } from "react";
import { Col, Button, Container, Row } from "react-bootstrap";
import Connection from "./Connection";
import RobotState from "./RobotState";
import Teleoperation from "./Teleoperation";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <h1 className="text-center mt-3">Robot Control Page</h1>
          <Row>
            <Col>
              <Connection />
            </Col>
          </Row>
          <Row>
            <Col>
              <Teleoperation />
            </Col>
            <Col>
              <h1>Map</h1>
              <p>THis is for map</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <RobotState />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
