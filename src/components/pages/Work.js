import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../ProjectCard";

function Projects() {
  return (
    <div>
      <section class="project-section my-4 text-center" id="work">
        <header class="section-header py-5 px-5 text-lg-right text-sm-center">
          <h1>
            <span class="underline">
              My Work<span class="emph">!</span>
            </span>
          </h1>
        </header>
        <Container class="projects-container py-5 px-5 container-fluid">
          <Row xs={1} md={3} class="row p-2">
            <ProjectCard />
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Projects;
