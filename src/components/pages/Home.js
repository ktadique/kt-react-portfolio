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
    <Container className="container masthead h-100" id="home">
      <Row className="row d-flex mx-auto h-100 align-items-center justify-content-center">
        <Col className="col-lg-6 col-sm-12">
          <div className="header-content">
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
