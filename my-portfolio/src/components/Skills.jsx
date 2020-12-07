import React from "react";
import SkillItem from "./SkillItem";
import "bootstrap/dist/css/bootstrap.css";

import { Row, Col, Container } from "react-bootstrap";
function Skills() {
  return (
    <Container fluid align="center" className="skills__container">
      <h2>Skills</h2>
      <hr />
      <Row>
        <Col className="p-4" align="center" xs={6} md={4}>
          <SkillItem skillIcon="fab fa-css3 fa-3x" skillName="CSS3" />
        </Col>
        <Col className="p-4" align="center" xs={6} md={4}>
          <SkillItem skillIcon="fab fa-html5 fa-3x" skillName="HTML5" />
        </Col>
        <Col className="p-4" align="center" xs={6} md={4}>
          <SkillItem skillIcon="fab fa-js fa-3x" skillName="JavaScript" />
        </Col>
        <Col className="p-4" align="center" xs={6} md={4}>
          <SkillItem skillIcon="fab fa-react fa-3x" skillName="React.js" />
        </Col>
        <Col className="p-4" align="center" xs={6} md={4}>
          <SkillItem
            skillIcon="fab fa-python fa-3x"
            skillName="Python programming"
          />
        </Col>
        <Col className="p-4" align="center" xs={6} md={4}>
          <SkillItem
            skillIcon="fas fa-code-branch fa-3x"
            skillName="Version Control with GIT"
          />
        </Col>
        <Col className="p-4" align="center" xs={6} md={4}>
          <SkillItem skillIcon="fab fa-node fa-3x" skillName="NodeJs" />
        </Col>
        <Col className="p-4" align="center" xs={6} md={4}>
          <SkillItem skillIcon="fas fa-database fa-3x" skillName="DataBase" />
        </Col>
        <Col className="p-4" align="center" xs={6} md={4}>
          <SkillItem
            skillIcon="fas fa-mobile-alt fa-3x"
            skillName="Responsive Design"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
