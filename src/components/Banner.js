import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/Banner.scss";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Banner extends Component {
  render() {
    return (
      <Container>
        <div className="banner">
          <Row>
            <Col xs md={6}>
              <h1 className="heading">Grow your business with us</h1>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus.
              </p>
            </Col>
            <Col xs md={2} className="middle">
              <span className="scrollDown">
                <FontAwesomeIcon icon={faArrowLeft} /> Scroll Down
              </span>
            </Col>
            <Col xs md={4}>
              <div className="d-flex align-items-end flex-column">
                <img
                  src="/assets/images/image_1.jpg"
                  alt="Office"
                  className="mt-4"
                />
              </div>
            </Col>
          </Row>

          <Row className="showcase mt-4">
            <Col xs md={7} className="cards">
              <div className="sc-card ml-1">
                <h5>Product Designer</h5>
                <span>12 Projects</span>
              </div>
              <div className="sc-card">
                <h5>Branding Designer</h5>
                <span>8 Projects</span>
              </div>
              <div className="sc-card">
                <h5>Full Stack Developer</h5>
                <span>27 Projects</span>
              </div>
            </Col>
            <Col xs md={5} className="right">
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus.
              </p>

              <a href="#" className="btn btn-light btn-lg">
                Contact Us
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
