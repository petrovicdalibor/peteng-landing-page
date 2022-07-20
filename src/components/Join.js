import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/Join.scss";

export default class Join extends Component {
  render() {
    return (
      <Container>
        <div className="join">
          <Row>
            <Col xs md="6">
              <h1 className="heading">Ready to join us?</h1>

              <a href="#" className="arr-btn">
                Contact us
              </a>
            </Col>
            <Col xs md="6">
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus.
              </p>
              <p className="pt-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
