import { useState } from "react";
import React from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import { Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
import { Snackbar, Alert } from "@mui/material";

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

              <div className="d-flex align-items-center gap-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="contact-icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span
                  className="text-lg  text-ternary-dark dark:text-ternary-light h5"
                  style={{ fontFamily: "GeneralSans-Regular" }}
                >
                  2890/5 muniswaran colony sivakasi, TamilNadhu, India
                </span>
              </div>
              <div className="d-flex align-items-center gap-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="contact-icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span
                  className="text-lg  text-ternary-dark dark:text-ternary-light h5"
                  style={{ fontFamily: "GeneralSans-Regular" }}
                >
                  seenivasan90it@gmail.com
                </span>
              </div>
              <div className="d-flex align-items-center gap-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="contact-icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
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
