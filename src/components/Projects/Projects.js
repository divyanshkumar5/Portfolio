import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ForeCastify"
              description="A Flutter app that forecast weather with API integration. Integrated Open weather API which offers data for any location on Earth, covering over 200,000 cities worldwide. Implemented intuitive visualization using Lottie animations which are 25% faster and smooth. "
              ghLink="https://github.com/divyanshkumar5/forecastify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Vocation-Vertex"
              description="A Full Stack Job Application with Separate Admin Panel. Developed Full Stack Job Application Portal using MERN Stack and implemented a dedicated admin panel tailored 
              for job recruiters, this enhanced application traffic-control by 80%. Instigated an intuitive interface using Material-UI and Google's Material Design Principles, attaining a 25% rise in 
              user interaction. ."
              ghLink="https://github.com/divyanshkumar5/Vocation-Vertex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Demo.io"
              description="demo text"
              ghLink="https://github.com/demo"
              demoLink="https://demo.in"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
