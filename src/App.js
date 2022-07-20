import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/global.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Choice from "./components/Choice";
import WorkProcess from "./components/WorkProcess";
import Team from "./components/Team";
import Join from "./components/Join";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";

import { useRef, useEffect } from "react";
import gsap from "gsap";

function App() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    gsap.fromTo(
      header,
      {
        duration: 2,
        y: 50,
        opacity: 0,
      },
      { y: 0, ease: "power2.out", duration: 1, opacity: 1, delay: 0.3 }
    );
  }, {});

  return (
    <div className="App">
      <Container>
        <div className="header" ref={headerRef}>
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
      <Banner />
      <Choice />
      <WorkProcess />
      <Team />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
