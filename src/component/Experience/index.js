/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import ExperinceIng from "../../assert/skills.png";
import maitsys from "../../assert/maitsyslogo.png";
const Experince = () => {
  const company_profile = [
    //add new company in 0 position
    {
      companyName: "Maitsys",
      companyImage: maitsys,
      Job: "Full Stack Developer",
      workingType: "Full-time",
      startMon: 1,
      startYear: 2024,
      endMon: false, //like 3
      endYear: false, //like-2025
      currentWorking: true,
      companylinkedin: "https://www.linkedin.com/company/maitsys",
      location: "Madurai, Tamil Nadu, India ",
    },

    // {
    //   companyName: "Maitsys",
    //   companyImage: maitsys,
    //   Job: "Full Stack Developer",
    //   workingType: "Full-time",
    //   startMon: 1,
    //   startYear: 2024,
    //   endMon: 3, //like 3
    //   endYear: 2027, //like-2025
    //   currentWorking: true,
    //   location: "Madurai, Tamil Nadu, India ",
    // },
  ];
  const mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const Calculate_months = (d1, d2, endMon) => {
    var months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();

    if (d1.getDate() <= d2.getDate()) months += 1;

    if (endMon === false) {
      if (months >= 12) {
        var mon = months % 12;
        const year = (months / 12) | 0;
        return `${year} yer ${mon >= 1 ? mon + " mos" : ""}`;
      } else {
        return `${months + 1} mos`;
      }
    } else {
      return `${mS[endMon - 1]} ${d2.getFullYear()} · ${(months / 12) | 0} mos`;
    }
  };

  return (
    <>
      <Container fluid>
        <h1
          style={{
            letterSpacing: "2px",
            marginTop: "15vh",
            fontFamily: '"Arvo", serif',
          }}
        >
          My Experince
        </h1>
        <p
          style={{
            fontFamily: '"Merriweather", serif',
            fontSize: "95%",
            letterSpacing: "1px",
            color: "gray",
          }}
        >
          My experience as a full-stack developer has provided me with a wide
          range of skills in both front-end and back-end development.
        </p>
        <Row className="mt-5">
          {/* desktop view */}
          <Col className="experince-desktop mt-3">
            <div className="d-flex w-100">
              <Timeline position="alternate-reverse" id="experince-desktop">
                {company_profile.map((value, index) => (
                  <TimelineItem key={index} style={{ width: "60%" }}>
                    <TimelineSeparator>
                      <TimelineDot
                        className={
                          value.endYear === false
                            ? " bg-success"
                            : " bg-warning"
                        }
                      ></TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <a
                        href={value.companylinkedin}
                        target="_blank"
                        rel="noreferrer"
                        id="companyweb"
                      />
                      <div className="d-flex">
                        <img
                          alt={value.companyName}
                          src={value.companyImage}
                          width={"80"}
                          height={"80"}
                          loading="lazy"
                          className="project-model-view"
                          onClick={() =>
                            document.getElementById("companyweb").click()
                          }
                        ></img>
                        <div className="text-start mt-2">
                          <h4
                            style={{
                              fontFamily: '"Roboto", sans-serif',
                              fontSize: "clamp(10px,3vh,25px)",
                              fontWeight: "500",
                            }}
                          >
                            {value.Job}
                          </h4>
                          <p>
                            {value.companyName} · {value.workingType}
                          </p>
                          <p className="text-secondary">
                            {mS[value.startMon - 1]} {value.startYear} -{" "}
                            {value.endMon === false
                              ? `Present · ${Calculate_months(
                                  new Date(value.startYear, value.startMon),
                                  new Date(
                                    new Date().getFullYear(),
                                    new Date().getMonth() + 1
                                  ),
                                  value.endMon
                                )}`
                              : `${Calculate_months(
                                  new Date(value.startYear, value.startMon),
                                  new Date(value.endYear, value.endMon),
                                  value.endMon
                                )}`}
                          </p>
                          <p className="text-secondary">{value.location}</p>

                          <strong className="d-flex align-items-center">
                            {" "}
                            <img
                              src={ExperinceIng}
                              alt=""
                              width={"25"}
                              height={"25"}
                              className="p-1"
                            ></img>
                            Skills : Full Stack Development
                          </strong>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                ))}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent></TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </Col>
          {/* mobile view */}
          <Col className="experince-res mt-3">
            <div className="d-flex w-100" id="experince-res">
              <Timeline
                className="d-flex align-items-start"
                style={{
                  marginLeft: "-3vh",
                  width: "90%",
                }}
                hidden
              >
                {company_profile.map((value, index) => (
                  <TimelineItem key={index} style={{ width: "0%" }}>
                    <TimelineSeparator>
                      <TimelineDot
                        className={
                          value.endYear === false
                            ? " bg-success"
                            : " bg-warning"
                        }
                      ></TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div
                        style={{
                          display: "flex",
                          width: "150%",
                          marginLeft: "-1vh",
                        }}
                      >
                        <img
                          alt={value.companyName}
                          src={value.companyImage}
                          width={"80"}
                          height={"80"}
                          className="project-model-view"
                          loading="lazy"
                        ></img>
                        <div className="text-start mt-2">
                          <h4
                            style={{
                              fontFamily: '"Roboto", sans-serif',
                              fontSize: "clamp(10px,3vh,25px)",
                              fontWeight: "500",
                            }}
                          >
                            {value.Job}
                          </h4>
                          <p>
                            {value.companyName} · {value.workingType}
                          </p>
                          <p className="text-secondary">
                            {mS[value.startMon - 1]} {value.startYear} -{" "}
                            {value.endMon === false
                              ? `Present · ${Calculate_months(
                                  new Date(value.startYear, value.startMon),
                                  new Date(
                                    new Date().getFullYear(),
                                    new Date().getMonth() + 1
                                  ),
                                  value.endMon
                                )}`
                              : `${Calculate_months(
                                  new Date(value.startYear, value.startMon),
                                  new Date(value.endYear, value.endMon),
                                  value.endMon
                                )}`}
                          </p>
                          <p className="text-secondary">{value.location}</p>

                          <strong className="d-flex align-items-center">
                            {" "}
                            <img
                              src={ExperinceIng}
                              alt=""
                              width={"25"}
                              height={"25"}
                              className="p-1"
                            ></img>
                            Skills : Full Stack Development
                          </strong>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                ))}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent></TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </Col>
          {/* <Col lg="4">
            <img alt="" src={ExperinceIng} width={"300"} height={"250"}></img>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Experince;
