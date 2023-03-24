import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <Container className="about-section my-4 text-center" id="about">
      <Row className="section-header py-5 px-5 text-lg-left text-sm-center">
        <h1>
          <span className="underline">
            About Me<span className="emph">!</span>
          </span>
        </h1>
      </Row>
      <Row className="aboutme-desc">
        <Col>
          <img
            class="img-fluid"
            alt="Kirsten Memoji"
            src="/src/assets/img/kt.png"
            rounded
          />
        </Col>
        <Col>
          <h2>My name is Kirsten Tadique,</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            ullamcorper massa, eget ultricies lacus. Donec dignissim vitae nibh
            at maximus. Maecenas hendrerit, turpis sed scelerisque rutrum, orci
            tellus scelerisque ex, nec porttitor tellus erat at arcu. Curabitur
            blandit auctor nunc, sed facilisis nisl ullamcorper eu.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
