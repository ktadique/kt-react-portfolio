import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <Container fluid className="pageWrapper min-vh-100">
      <Container className="contact-section my-4 text-center" id="contact">
        <header className="section-header container p-5 text-center">
          <h1>
            <span className="underline">
              Contact Me<span className="emph">!</span>
            </span>
          </h1>
        </header>

        <Container className="contact-form container bg-dark rounded-lg  d-flex align-items-center mb-5">
          <Container className="contact-left container h-100 w-50 mr-3 text-center">
            <header className="mb-3">
              <h2>
                Say Hi<span className="emph">!</span>
              </h2>
            </header>
            <div className="form-desc d-flex flex-column text-center mb-5">
              <p>Got a project on your mind that you'd like to discuss?</p>
              <h5>
                Let me know<span className="emph">!</span>
              </h5>
            </div>
            <h5>Find me on my Socials:</h5>
            <div className="socials-bar">
              <Row xs={1} md={3} className="social-row row d-flex">
                <Col>
                  <a
                    href="https://github.com/ktadique"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.linkedin.com/in/kirsten-tadique/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </Col>
                <Col>
                  <a
                    href="mailto:kch.tadique@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <EmailIcon />
                  </a>
                </Col>
              </Row>
            </div>
          </Container>
          <Container className="contact-right container">
            <form>
              <div className="form-container p-5">
                <div className="form-group">
                  <div className="form-row d-flex flex-column">
                    <div className="col">
                      <label for="formName">Name:</label>
                      <input
                        id="formName"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example@email.com"
                  />
                </div>
                <div className="form-group">
                  <label for="messageFormTextarea">Message:</label>
                  <textarea
                    className="form-control"
                    id="messageFormTextarea"
                    rows="3"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <div className="form-group d-flex justify-content-center">
                  <div className="col-sm-10 text-center">
                    <button type="submit" className="btn btn-outline-light">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Contact;
