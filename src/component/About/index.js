/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./index.css";
import aboutimg from "../../assert/image5.png";
import education from "../../assert/image6.png";
import instagram from "../../assert/instagram.svg";
import linkedin from "../../assert/linkedin.svg";
import JAVA_certificate from "../../assert/JAVA-certificate.jpg";
import js_certificate_guvi from "../../assert/js-guvi-certificate.png";
import react_certificate from "../../assert/react_certificate.jpg";
import node_certificate from "../../assert/nodejs_certificate.jpg";
import sql_certificate from "../../assert/SQL_certificate.jpg";
import js_certificate from "../../assert/Js_Certificate.jpg";
import Reactjs from "../../assert/react.svg";
import Html from "../../assert/html.svg";
import Css from "../../assert/css.svg";
import Bootstrap from "../../assert/bootstrap.svg";
import Xml from "../../assert/xml.svg";
import javaScript from "../../assert/javascript.svg";
import javaScript1 from "../../assert/javascript-1.svg";
import Java from "../../assert/java.svg";
import NodeJs from "../../assert/node-js.svg";
import Experss from "../../assert/express.svg";
import CProream from "../../assert/c-program.svg";
import SQL from "../../assert/database.png";
import python from "../../assert/python.svg";
import MySql from "../../assert/mysql.svg";
import postgresql from "../../assert/postgresql.svg";
import Firebase from "../../assert/firebase.svg";
import Sqlite from "../../assert/sqlite.svg";
import GitHub from "../../assert/github.svg";
import GitHub1 from "../../assert/github1.svg";
import Git from "../../assert/git.svg";
import APIs from "../../assert/apis.svg";
import Json from "../../assert/json.svg";
import Android from "../../assert/android.svg";
import Vscode from "../../assert/vscode.svg";
import Eclipse from "../../assert/eclipse.svg";
import PyCharm from "../../assert/pycharm.svg";

const About = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const certificate = [
    {
      img: JAVA_certificate,
      Title: "Infosys | Springboard",
      skills: "JAVA",
    },
    {
      img: js_certificate,
      Title: "AICET Pupilfirst",
      skills: "Java Script",
    },
    {
      img: js_certificate_guvi,
      Title: "Guvi",
      skills: "Java Script",
    },
    {
      img: node_certificate,
      Title: "AICET Pupilfirst",
      skills: "Node js",
    },
    {
      img: react_certificate,
      Title: "Linkedin",
      skills: "React Js",
    },
    {
      img: sql_certificate,
      Title: "Linkedin",
      skills: "SQL",
    },
  ];
  const MyFrontendskills = [
    {
      img: Reactjs,
      name: "React JS",
    },
    {
      img: Html,
      name: "Html",
    },
    {
      img: Css,
      name: "Css",
    },
    {
      img: javaScript1,
      name: "Java Script",
    },
    {
      img: Bootstrap,
      name: "Bootstrap",
    },
    {
      img: Xml,
      name: "Xml",
    },
  ];
  const MyBackendSkills = [
    {
      img: Java,
      name: "Java",
    },
    {
      img: javaScript,
      name: "Java Script",
    },
    {
      img: NodeJs,
      name: "Node Js",
    },
    {
      img: Experss,
      name: "Experss Js",
    },
    {
      img: SQL,
      name: "Sql",
    },
    {
      img: CProream,
      name: "C Program",
    },
    {
      img: python,
      name: "Python",
    },
  ];
  const MyDatabaseSkills = [
    {
      img: MySql,
      name: "MySql",
    },
    {
      img: postgresql,
      name: "Postgresql",
    },
    {
      img: Firebase,
      name: "Firebase",
    },
    {
      img: Sqlite,
      name: "Sqlite",
    },
  ];
  const OtherSkills = [
    {
      img: GitHub,
      name: "GitHub",
    },
    {
      img: Git,
      name: "Git",
    },
    {
      img: APIs,
      name: "API's",
    },
    {
      img: Json,
      name: "JSON",
    },
    {
      img: Vscode,
      name: "Vscode",
    },

    {
      img: Eclipse,
      name: "Eclipse",
    },
    {
      img: Android,
      name: "Android",
    },
    {
      img: PyCharm,
      name: "PyCharm",
    },
  ];
  const [modalShow, setModalShow] = React.useState(false);
  const [certificate_object, setCertificate] = React.useState({});
  const handle_open_model = (certificateObject) => {
    setModalShow(true);
    setCertificate(certificateObject);
  };

  return (
    <>
      <Container fluid>
        <h1
          style={{
            letterSpacing: "2px",
            padding: "50px",
            fontFamily: '"Arvo", serif',
          }}
          id="about"
        >
          About
        </h1>
        {/* <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <Box
              sx={{
                maxWidth: { xs: 620, sm: 980 },
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
              >
                <Tab label="About Me" />
                <Tab label="Education" />
                <Tab label="Skills" />
                <Tab label="Certificates" />
              </Tabs>
            </Box>
          </Col>
        </Row> */}

        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <Box className="d-flex align-items-center flex-column w-100">
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    maxWidth: { xs: 620, sm: 980 },
                  }}
                  className="d-flex justify-content-center w-100"
                >
                  <TabList
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                  >
                    <Tab label="About Me" value="1" className="about-tab" />
                    <Tab label="Education" value="2" className="about-tab" />
                    <Tab label="Skills" value="3" className="about-tab" />
                    <Tab label="Certificates" value="4" className="about-tab" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Container fluid>
                    <Row>
                      <Col lg="4">
                        <img
                          className="about-image-side"
                          src={aboutimg}
                          alt="about"
                          loading="lazy"
                          width="100%"
                          height="100%"
                        ></img>
                      </Col>
                      <Col className="anout-me d-flex align-items-center justify-content-center w-100">
                        <div className="text-start">
                          <h1
                            style={{
                              fontFamily: '"Merriweather", serif',
                              color: "gray",
                            }}
                          >
                            Hi I'm Seenivasan T,
                          </h1>
                          <p className="font-noto-sans font-monospace">
                            I am{" "}
                            <strong style={{ textDecoration: "underline" }}>
                              Full Stack Developer
                            </strong>{" "}
                            with expertise in{" "}
                            <strong style={{ textDecoration: "underline" }}>
                              Web development
                            </strong>{" "}
                            and{" "}
                            <strong style={{ textDecoration: "underline" }}>
                              mobile application development
                            </strong>
                            (Java || React JS || Node JS || SQL ||Js || Firebase
                            || Android || API's ). Passionate about crafting
                            seamless user experiences and solving complex
                            backend challenges. Dedicated to continuous learning
                            and staying updated on emerging technologies. Eager
                            to contribute to impactful projects and collaborate
                            with cross-functional teams.
                          </p>
                          <p className="font-noto-sans font-monospace">
                            In addition, I have completed an{" "}
                            <strong style={{ textDecoration: "underline" }}>
                              AICET (All India Council for Technical Education )
                            </strong>{" "}
                            web development course, where I gained valuable
                            hands-on experience in web technologies. During the
                            course, I developed a website using Js,API's,
                            Node.js ,React.js and PostgreSQL, employing the
                            concept of EJS templating. Additionally, I've worked
                            on various projects{" "}
                            <a href="#project">My projects</a>. I am eager to
                            apply what I've learned to real-world projects and
                            continue growing in the field.
                          </p>
                          <div className="d-flex flex-column w-100 justify-content-center">
                            <h3 className="text-muted font-merriweather">
                              FIND ME ON
                            </h3>
                            <p>
                              Feel free to <strong>connect</strong> with me!
                            </p>

                            <div className="about-connect-me">
                              <img
                                alt="linkedin"
                                loading="lazy"
                                src={linkedin}
                                width={"35"}
                                height={"35"}
                                onClick={() =>
                                  (window.location.href =
                                    "https://www.linkedin.com/in/seenivasan-t-47219328b/")
                                }
                              ></img>
                              <img
                                alt="github"
                                loading="lazy"
                                src={GitHub1}
                                width={"30"}
                                height={"30"}
                                onClick={() =>
                                  (window.location.href =
                                    "https://github.com/SEENIVASANIT")
                                }
                              ></img>
                              <img
                                alt="instagram"
                                loading="lazy"
                                src={instagram}
                                width={"30"}
                                height={"30"}
                                onClick={() =>
                                  (window.location.href =
                                    "https://www.instagram.com/__seenivasan___/")
                                }
                              ></img>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </TabPanel>
                <TabPanel value="2">
                  <Container>
                    <Row>
                      <Col lg="4">
                        <img
                          className="about-image-side"
                          src={education}
                          alt="education"
                          loading="lazy"
                          width="100%"
                          height="100%"
                        ></img>
                      </Col>
                      <Col>
                        <Row>
                          <Col
                            lg="6"
                            className="d-flex justify-content-center align-items-center vh-50"
                            style={{
                              height: "50vh",
                            }}
                          >
                            <div className="text-start">
                              <h1
                                style={{
                                  color: "grey",
                                  letterSpacing: "1px",
                                  fontFamily: '"Merriweather", serif',
                                }}
                              >
                                College
                              </h1>
                              <div>
                                <div className="education-box">
                                  <h6 className="text-dark">
                                    HINDUSTHAN COLLEGE OF ENGINEERING AND
                                    TECHNOLOGY, COIMBATORE
                                  </h6>
                                  <p className="text-secondary">
                                    Bachelor of Technology in Information
                                    Technology (CGPA: 8.56)
                                  </p>
                                  <h5 className="text-dark">
                                    Duration: 2020-2024
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col
                            lg="6"
                            className="d-flex justify-content-center align-items-center"
                          >
                            <div className="text-start">
                              <h1
                                style={{
                                  color: "grey",
                                  letterSpacing: "1px",
                                  fontFamily: '"Merriweather", serif',
                                }}
                              >
                                School
                              </h1>
                              <div className="education-box">
                                <h6
                                  style={{ letterSpacing: "3px" }}
                                  className="text-dark"
                                >
                                  S.H.N.V.HR.SEC.SCHOOL SIVAKASI
                                </h6>
                                <dl>
                                  <dt className="text-secondary">
                                    HSC(Higher Secondary School)
                                  </dt>
                                  <dd className="text-dark">
                                    Duration: 2019-2020
                                  </dd>

                                  <dt className="text-secondary">
                                    SSLC (Secondary School Leaving Certificate)
                                  </dt>
                                  <dd className="text-dark">
                                    Duration: 2017-2018
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </TabPanel>
                <TabPanel value="3">
                  <Container fluid>
                    <Row className="text-start">
                      <h1
                        style={{
                          color: "grey",
                          letterSpacing: "1px",
                          fontFamily: '"Merriweather", serif',
                        }}
                      >
                        Frontend
                      </h1>
                      <Col className="skills-section">
                        {MyFrontendskills.map((value, index) => {
                          return (
                            <div
                              key={index}
                              className="d-flex flex-column align-items-center"
                            >
                              <img
                                src={value.img}
                                alt={value.name}
                                loading="lazy"
                                width={"50"}
                                height={"50"}
                              ></img>
                              <p>{value.name}</p>
                            </div>
                          );
                        })}
                      </Col>
                    </Row>
                    <Row className="text-start">
                      <h1
                        style={{
                          color: "grey",
                          letterSpacing: "1px",
                          fontFamily: '"Merriweather", serif',
                        }}
                      >
                        Backend
                      </h1>
                      <Col className="skills-section">
                        {MyBackendSkills.map((value, index) => {
                          return (
                            <div
                              key={index}
                              className="d-flex flex-column align-items-center"
                            >
                              <img
                                src={value.img}
                                alt={value.name}
                                loading="lazy"
                                width={"50"}
                                height={"50"}
                              ></img>
                              <p>{value.name}</p>
                            </div>
                          );
                        })}
                      </Col>
                    </Row>
                    <Row className="text-start">
                      <h1
                        style={{
                          color: "grey",
                          letterSpacing: "1px",
                          fontFamily: '"Merriweather", serif',
                        }}
                      >
                        Database
                      </h1>
                      <Col className="skills-section">
                        {MyDatabaseSkills.map((value, index) => {
                          return (
                            <div
                              key={index}
                              className="d-flex flex-column align-items-center"
                            >
                              <img
                                src={value.img}
                                alt={value.name}
                                loading="lazy"
                                width={"50"}
                                height={"50"}
                              ></img>
                              <p>{value.name}</p>
                            </div>
                          );
                        })}
                      </Col>
                    </Row>
                    <Row className="text-start">
                      <h1
                        style={{
                          color: "grey",
                          letterSpacing: "1px",
                          fontFamily: '"Merriweather", serif',
                        }}
                      >
                        Others
                      </h1>
                      <Col className="skills-section">
                        {OtherSkills.map((value, index) => {
                          return (
                            <div
                              key={index}
                              className="d-flex flex-column align-items-center"
                            >
                              <img
                                src={value.img}
                                alt={value.name}
                                loading="lazy"
                                width={"50"}
                                height={"50"}
                              ></img>
                              <p>{value.name}</p>
                            </div>
                          );
                        })}
                      </Col>
                    </Row>
                  </Container>
                </TabPanel>
                <TabPanel value="4">
                  <div className="certificate-continer">
                    {certificate.map((value, index) => {
                      return (
                        <div key={index}>
                          <img
                            alt={value.Title}
                            width={"350"}
                            height={"250"}
                            className="project-model-view"
                            src={value.img}
                            onClick={() => handle_open_model(value)}
                          ></img>
                          <h5
                            className="mt-4"
                            style={{ color: "grey", letterSpacing: "1px" }}
                          >
                            {value.Title}
                          </h5>
                          <p>
                            <strong>Skills :</strong> {value.skills}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </Col>
        </Row>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {certificate_object.Title} || skills: {certificate_object.skills}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              alt={certificate_object.Title}
              width={"100%"}
              height={"90%"}
              style={{ cursor: "pointer" }}
              src={certificate_object.img}
            ></img>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};
export default About;
