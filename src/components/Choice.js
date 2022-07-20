import React, { Component } from "react";
import "../assets/styles/Choice.scss";

import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class Choice extends Component {
  render() {
    return (
      <Container>
        <div className="choice">
          <Row>
            <Col xs md="6">
              <img src="/assets/images/image_2.jpg" alt="Image 2" />

              <p className="mt-4">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus.
              </p>
            </Col>
            <Col xs md="6" className="right">
              <h1 className="heading">We are your best choice</h1>
              <div className="middle">
                <span className="scrollDown">
                  <FontAwesomeIcon icon={faArrowLeft} /> Scroll Down
                </span>
              </div>
              <div className="d-flex align-items-end flex-column">
                <img src="/assets/images/image_3.jpg" alt="Image 3" />
                <a href="#" className="btn btn-light btn-lg">
                  Contact Us
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
