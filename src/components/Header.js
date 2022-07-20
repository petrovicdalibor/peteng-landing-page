import React, { Component, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../assets/styles/Header.scss";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <div className="header">
          <div className="logo">
            <h6>Peteng.io</h6>
          </div>
          <div className="navig">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}
