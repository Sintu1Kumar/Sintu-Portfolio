import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects } from "../../Assets/data";

function Projects() {
  const items = projects.map((item) => item.imgPath);
  console.log(items);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((item) => {
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={item.imgPath}
                  title={item.title}
                  description={item.description}
                  gitLink={item.gitLink}
                  demoLink={item.demoLink ? item.demoLink : ""}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
