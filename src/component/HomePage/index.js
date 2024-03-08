/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

import "./index.css";
import logo1 from "../../assert/mylogo.png";
import image1 from "../../assert/developerimg.svg";
import { Button } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import Typewriter from "typewriter-effect";
import Resume from "../../assert/SeenivasanT.pdf";
import About from "../About";
import Projects from "../Projects";
import Experince from "../Experience";
import Contact from "../Contact";
import Footer from "../Footer";
const HomePage = () => {
  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      document.getElementById("btn-back-to-top").style.display = "block";
    } else {
      document.getElementById("btn-back-to-top").style.display = "none";
    }
  };

  window.addEventListener("scroll", scrollHandler);
  return (
    <>
      <Navbar expand="md" className="wp-2 ">
        <Container fluid>
          <Navbar.Brand href="/portfolio" className="d-flex align-items-center">
            <img
              alt="logo"
              src={logo1}
              loading="lazy"
              width="200"
              height="100"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav></Nav>
            <Nav className="justify-content-end flex-grow-1 gap-4  align-items-center">
              <Nav.Link href="/portfolio" className="navemanu">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="navemanu">
                About
              </Nav.Link>
              <Nav.Link href="#project" className="navemanu">
                Project
              </Nav.Link>
              <Nav.Link href="#experince" className="navemanu">
                Experince
              </Nav.Link>
              <Nav.Link href="#contact" className="navemanu">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar expand="md" className="p-2 ">
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              alt="logo"
              src={logo1}
              loading="lazy"
              width="100"
              height="100"
            ></img>
            <h2 className="mt-4" style={{ marginLeft: "-3vh" }}>
              EENIVASAN
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            className="w-100"
          >
            <Offcanvas.HomePage closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Navbar.Brand href="#" className="d-flex align-items-center">
                  <img
                    alt="logo"
                    src={logo1}
                    loading="lazy"
                    width="100"
                    height="100"
                  ></img>
                  <h2 className="mt-4" style={{ marginLeft: "-3vh" }}>
                    EENIVASAN
                  </h2>
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.HomePage>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 gap-4 pe-3 align-items-center">
                <Nav.Link href="/" className="navemanu">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="navemanu">
                  About
                </Nav.Link>
                <Nav.Link href="#project" className="navemanu">
                  Project
                </Nav.Link>
                <Nav.Link href="#experince" className="navemanu">
                  Experince
                </Nav.Link>
                <Nav.Link href="#contact" className="navemanu">
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}
      <Container className="info-container">
        <Row>
          <Col lg="5" className="d-flex flex-column justify-content-center p-2">
            <div className="mb-5" id="home">
              <h1 className="intro-title">Hello, I'm SEENIVASAN</h1>
              <h1 className="fluidz-48 mb-1x intro-desc">
                <Typewriter
                  options={{
                    strings: [
                      "I am Full Stack Developer!",
                      "I love coding",
                      "I develop websites",
                      "I develop mobile apps",
                      "Ready to fix your Bugs!",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </h1>
              <div className="w-100 d-flex justify-content-center pt-4">
                <Button
                  size={"large"}
                  variant="outlined"
                  sx={{ textTransform: "none" }}
                  style={{ width: "40%" }}
                  href={Resume}
                  download={"SeenivasanT.pdf"}
                  startIcon={
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 64 64"
                        id="download"
                      >
                        <path
                          d="M30.6,38.44a2,2,0,0,0,2.79,0l7-6.83a2,2,0,1,0-2.79-2.86L34,32.26V17a2,2,0,0,0-4,0V32.26l-3.6-3.51a2,2,0,0,0-2.79,2.86Z"
                          fill="#5670e5"
                          className="color000000 svgShape"
                        ></path>
                        <path
                          d="M43.24,36.27a2,2,0,0,0-2,2v2A2.74,2.74,0,0,1,38.5,43h-13a2.74,2.74,0,0,1-2.74-2.74v-2a2,2,0,0,0-4,0v2A6.75,6.75,0,0,0,25.5,47h13a6.75,6.75,0,0,0,6.74-6.74v-2A2,2,0,0,0,43.24,36.27Z"
                          fill="#5670e5"
                          className="color000000 svgShape"
                        ></path>
                        <path
                          d="M32,3A29,29,0,1,0,61,32,29,29,0,0,0,32,3Zm0,54A25,25,0,1,1,57,32,25,25,0,0,1,32,57Z"
                          fill="#5670e5"
                          className="color000000 svgShape"
                        ></path>
                      </svg>
                    </SvgIcon>
                  }
                >
                  Download CV
                </Button>
              </div>
            </div>
          </Col>
          <Col lg="7" className="d-flex flex-column justify-content-center">
            <img
              src={image1}
              alt="image1"
              width={"100%"}
              loading="lazy"
              height={"90%"}
            ></img>
          </Col>
        </Row>
      </Container>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="experince">
        <Experince />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>

      <a
        id="btn-back-to-top"
        href="#"
        className="btn btn-light btn-lg back-to-top rounded-lg "
        role="button"
      >
        <i className="fa fa-chevron-up"></i>
      </a>
    </>
  );
};

export default HomePage;
