import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../assets/styles/Team.scss";

export default class Team extends Component {
  render() {
    return (
      <Container>
        <div className="team">
          <Row>
            <Col xs md={7}>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus.
              </p>
            </Col>
            <Col xs md={5}>
              <h1 className="heading">Our great teams</h1>
            </Col>
          </Row>
          <Row className="members">
            <Col className="d-flex flex-column align-items-start">
              <div className="d-card">
                <img src="/assets/images/image_8.jpg" />
                <h4>Dean Winchester</h4>
                <p>Ghost Hunter</p>
              </div>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <div className="d-card">
                <img src="/assets/images/image_9.jpg" />
                <h4>Walter White</h4>
                <p>Great Chef</p>
              </div>
            </Col>
            <Col className="d-flex flex-column align-items-end">
              <div className="d-card">
                <img src="/assets/images/image_10.jpg" />
                <h4>Frank Castle</h4>
                <p>Badass Fighter</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
