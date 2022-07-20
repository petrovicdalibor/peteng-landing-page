import React, { Component } from "react";
import "../assets/styles/WorkProcess.scss";

import { Container, Row, Col } from "react-bootstrap";

export default class WorkProcess extends Component {
  render() {
    return (
      <Container>
        <div className="process">
          <Row>
            <Col xs md={6}>
              <h1 className="heading">Our work process</h1>
              <p className="mt-5">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33.
              </p>

              <div className="cards">
                <div className="p-card">
                  <div className="head">
                    <span>01</span>
                    <span>Analyze</span>
                  </div>
                  <img src="./assets/images/image_4.jpg" alt="Image-4" />
                </div>
                <div className="p-card">
                  <div className="head">
                    <span>03</span>
                    <span>Concept</span>
                  </div>
                  <img src="./assets/images/image_5.jpg" alt="Image-5" />
                </div>
              </div>
            </Col>
            <Col xs md={6}>
              <div className="cards mt-0">
                <div className="p-card mt-0">
                  <div className="head">
                    <span>02</span>
                    <span>Goals</span>
                  </div>
                  <img src="./assets/images/image_6.jpg" alt="Image-6" />
                </div>
                <div className="p-card">
                  <div className="head">
                    <span>04</span>
                    <span>Digitalize</span>
                  </div>
                  <img src="./assets/images/image_7.jpg" alt="Image-7" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
