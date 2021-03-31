import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import crm from "../../Assets/Projects/crm.png";
import cart from "../../Assets/Projects/cart.png";
import github from "../../Assets/Projects/github.png";


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
              imgPath={crm}
              isBlog={false}
              title="Customer Management Software(CMS)"
              description=" CMS Application using Django framework which has a role-based user authentication for admin and customers and implemented all the curd functions in this project."
              link="https://github.com/maneeshmogallapu/crm1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="online cart"
              description="In this project we know how to handle api and access the data; we handle pexel api take laptop images to use for product images;"
              link="https://github.com/maneeshmogallapu/online-cart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Github repo finder"
              description="In this project we have user authication using firebase and geting details using github api."
              link="https://github.com/maneeshmogallapu/github"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
