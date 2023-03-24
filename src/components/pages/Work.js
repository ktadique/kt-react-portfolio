import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "../ProjectCard";

function Projects() {
  return (
    <Container fluid className="pageWrapper min-vh-100">
      <Row className="project-section text-center" id="work">
        <Container className="section-header py-5 px-5 text-lg-right text-sm-center">
          <h1>
            <span className="underline">
              My Work<span className="emph">!</span>
            </span>
          </h1>
        </Container>
        <Container className="projects-container py-5 px-5 container-fluid">
          <Row xs={1} md={2} lg={3} className="row p-2">
            <ProjectCard />
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default Projects;
