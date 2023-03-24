import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import projectData from "../data/projectData.json";

const ProjectCard = () => {
  return (
    <>
      {projectData.map((proj) => (
        <Col className="projectCardWrapper" key={proj.key}>
          <Card className=" rounded-lg " id={proj.id}>
            <Card.Img src={proj.img} className="card-img w-100" />
            <Card.Body className="card-body card-img-overlay card-img-overlay--blur">
              <h5 className="card-title">{proj.title}</h5>
              <Card.Text className="card-text">{proj.desc}</Card.Text>
              <h6 className="card-subtitle mb-2">.HTML .CSS Bootstrap</h6>
              <Button
                type="button"
                className="btn btn-outline-light"
                href={proj.deployed}
              >
                Live
              </Button>
              <Button
                type="button"
                className="btn btn-outline-light"
                href={proj.github}
              >
                Github
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ProjectCard;

/*  */
