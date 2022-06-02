import React, { Component } from "react";
import { Col, Button, Container, Row } from "react-bootstrap";
import Connection from "./Connection";
import RobotState from "./RobotState";
import Teleoperation from "./Teleoperation";
import Map from "./Map";

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
              <RobotState />
            </Col>
            <Col>
              <h1>Map</h1>
              <Map />
            </Col>
          </Row>

          <Row></Row>
        </Container>
      </div>
    );
  }
}
export default Home;
