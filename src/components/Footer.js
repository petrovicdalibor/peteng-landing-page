import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <h6>Peteng.io</h6>
          <ul className="f-navi">
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}
