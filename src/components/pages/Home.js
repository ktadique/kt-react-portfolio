import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import Typewriter from "typewriter-effect";

function Home() {
  const typeDev = (
    <Typewriter
      options={{
        strings: ["Front-End", "React JS"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );

  return (
    <Container fluid className="pageWrapper masthead min-vh-100" id="home">
      <Row className="heroRow">
        <Col>
          <img
            class="img-fluid"
            alt="Kirsten Memoji"
            src={require("../../assets/img/kt.png")}
            rounded
          />
        </Col>
        <Col className="my-5 heroText">
          <Container className="header-content">
            <p className="lead">Hi! My name is,</p>
            <h1>
              Kirsten Tadique<span className="emph">!</span>
            </h1>
            <div className="lead d-flex flex-row ">
              <p>I'm a creative&nbsp;</p>
              {typeDev}
              <p>&nbsp;Developer!</p>
            </div>
            <Button
              className="btn btn-outline-light btn-xl text-uppercase"
              href="#contact"
              role="button"
            >
              Say Hi!
            </Button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
