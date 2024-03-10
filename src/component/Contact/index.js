import { useState } from "react";
import React from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import { Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
import { Snackbar, Alert } from "@mui/material";
import location from "../../assert/location.svg";
import email from "../../assert/email.svg";
import phone from "../../assert/phone.svg";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const datas = new FormData(event.target);
    const setData = {
      name: datas.get("name"),
      email: datas.get("email"),
      phone: datas.get("phone"),
      message: datas.get("message"),
    };
    if (form.checkValidity() === true) {
      setLoading(true);
      try {
        emailjs
          // .send(
          //   "service_ze7myxd",
          //   "template_6q5v50q",//seeni
          //   setData,
          //   "nBhJogNaWi_cjEl2B"
          // )
          .send(
            "service_3rbfhes",
            "template_cz8j6yx", //20110090
            setData,
            "omIfpE4XU2GhQMUjp"
          )
          .then(() => {
            setLoading(false);
            setOpenSuccess(true);
          });
      } catch (err) {
        setOpenError(true);
      }
    }

    setValidated(true);
  };
  return (
    <>
      <h1
        style={{
          letterSpacing: "2px",
          marginTop: "10vh",
          fontFamily: '"Arvo", serif',
        }}
      >
        Contact Me
      </h1>
      <Container className="mt-5">
        <Snackbar
          open={openSuccess}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Message Send Successfull!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={handleCloseError}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Something wrong try again!
          </Alert>
        </Snackbar>
        <Row>
          <Col lg="6">
            <Container className="contact-form">
              <h3 style={{ fontFamily: '"Inconsolata", monospace' }}>
                Get in Touch with Me
              </h3>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} className="mt-3">
                  <Form.Label htmlFor="name">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    minLength="3"
                    id="name"
                    maxLength="40"
                    name="name"
                    autoComplete="off"
                    className="contact-input"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Name is a required field.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} className="mt-3">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    className="contact-input"
                    minLength="4"
                    maxLength="40"
                    id="email"
                    name="email"
                    autoComplete="off"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} className="mt-3">
                  <Form.Label htmlFor="phone">Phone No</Form.Label>
                  <Form.Control
                    type="tel"
                    minLength="10"
                    maxength="40"
                    placeholder="Your Phone No"
                    pattern="^[1-9]\d{9}"
                    name="phone"
                    required
                    id="phone"
                    autoComplete="off"
                    className="contact-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Phone No.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} className="mt-3">
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    minLength="4"
                    maxLength="1000"
                    name="message"
                    autoComplete="off"
                    required
                    id="message"
                    className="contact-textarea"
                  />
                  <Form.Control.Feedback type="invalid">
                    Enter Something.
                  </Form.Control.Feedback>
                </Form.Group>
                {loading ? (
                  <Button variant="primary" disabled className="mt-3">
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Sending...
                  </Button>
                ) : (
                  <Button type="submit" className="mt-3">
                    Send Message
                  </Button>
                )}
              </Form>
            </Container>
          </Col>

          <Col lg="5" className="p-5 ">
            <div className="d-flex flex-column gap-4 text-start p-3">
              <h3 style={{ fontFamily: '"Inconsolata", monospace' }}>
                Contact details
              </h3>

              <div className=" contact-data d-flex align-items-center gap-4">
                <img
                  src={location}
                  alt="location"
                  width={40}
                  height={40}
                  loading="lazy"
                ></img>
                <span
                  className="text-lg  text-ternary-dark dark:text-ternary-light h5"
                  style={{ fontFamily: "GeneralSans-Regular" }}
                >
                  2890/5 muniswaran colony sivakasi, TamilNadhu, India
                </span>
              </div>
              <div className="contact-data d-flex align-items-center gap-4">
                <img
                  src={email}
                  alt="email"
                  width={40}
                  height={40}
                  loading="lazy"
                ></img>
                <span
                  className="text-lg  text-ternary-dark dark:text-ternary-light h5"
                  style={{ fontFamily: "GeneralSans-Regular" }}
                >
                  seenivasan90it@gmail.com
                </span>
              </div>
              <div className="contact-data d-flex align-items-center gap-4">
                <img
                  src={phone}
                  alt="phone"
                  width={40}
                  height={40}
                  loading="lazy"
                ></img>
                <span
                  className="text-lg  text-ternary-dark dark:text-ternary-light h5"
                  style={{ fontFamily: "GeneralSans-Regular" }}
                >
                  +91 9677978279
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Contact;
