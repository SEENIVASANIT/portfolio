import React from "react";
import "./index.css";
import GitHub from "../../assert/githubout.svg";
import instagram from "../../assert/instagram-out.svg";
import Linkedin from "../../assert/linkedin1.svg";
import Twitter from "../../assert/twitter.svg";

import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <hr></hr>

        <Row>
          {/* <Col
            lg="4"
            className=" d-flex align-items-center justify-content-center"
          >
            <div className="d-flex align-items-center">
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
            </div>
          </Col> */}
          <Col className="d-flex flex-column align-items-center justify-content-center p-5">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  letterSpacing: "2px",

                  fontFamily: '"Arvo", serif',
                  padding: "10px",
                }}
              >
                Follow me
              </h1>
              <div className="d-flex" style={{ gap: "30px" }}>
                <div className="follow-me">
                  <img
                    src={GitHub}
                    alt="Github"
                    width={"100%"}
                    height={"100%"}
                    loading="lazy"
                    onClick={() =>
                      (window.location.href = "https://github.com/SEENIVASANIT")
                    }
                  ></img>
                </div>
                <div className="follow-me">
                  <img
                    src={instagram}
                    alt="instagram"
                    loading="lazy"
                    width={"100%"}
                    height={"100%"}
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/__seenivasan___/")
                    }
                  ></img>
                </div>
                <div className="follow-me">
                  <img
                    src={Linkedin}
                    alt="linkedin"
                    loading="lazy"
                    width={"100%"}
                    height={"100%"}
                    onClick={() =>
                      (window.location.href =
                        "https://www.linkedin.com/in/seenivasan-t-47219328b/")
                    }
                  ></img>
                </div>
                <div className="follow-me">
                  <img
                    src={Twitter}
                    alt="twitter"
                    width={"100%"}
                    height={"100%"}
                    loading="lazy"
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/__seenivasan___/")
                    }
                  ></img>
                </div>
              </div>
            </div>
            <h4
              className="text-lg  text-ternary-dark dark:text-ternary-light h5 "
              style={{
                fontFamily: "GeneralSans-Regular",
                color: "gray",
                marginTop: "10vh",
              }}
            >
              © 2024 ReactJs Portfolio.SEENIVASAN T
            </h4>
          </Col>
          {/* <Col
            lang="5"
            className="d-flex  align-items-center justify-content-center p-5"
          >
            
          </Col> */}
        </Row>
      </Container>
    </>
  );
};
export default Footer;
