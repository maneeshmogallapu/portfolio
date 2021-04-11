import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/RESUME.pdf";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="INTERNSHIP | CODEGNAN"
              date="MAY 2020 – JUNE 2020"
              content={[
                "In Internship program I have worked as a Django Intern and as a part of this internship I have done study on Customer Management Software(CMS)Application.",
              ]}
              />
              <h3 className="resume-title">CERTIFICATIONS</h3>
              <Resumecontent
                title=""
                content={[
                  "ReactJS developer Bootcamp – Learn code online",
                  "FullStack Django Developer – Learn code online",
                  "Problem Solving (Basic)-HackerRank",
                  "Java (Basic)-HackerRank",
                ]}
              />
            

          </Col>
          
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="M.Tech (software Engineering) | VIT-AP "
              date="2017 – PRESENT"
              content={[`CGPA: 7.89 (Till 7th Sem)`]}
            />
            <Resumecontent
              title="Intermediate | SRI CHAITHANYA JUNIOR COLLEGE"
              date="2015 – 2017 "
              content={["Precentage: 86%"]}
            />
            <Resumecontent
              title="HIGH SCHOOL | SRI CHAITHANYA HIGH SCHOOL "
              date="2015 "
              content={["GPA: 8.7"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
