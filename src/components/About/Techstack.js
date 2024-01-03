import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import { FaFigma } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3,faBootstrap } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-svg-core/styles.css';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div className="html-css-icon">
        <FontAwesomeIcon icon={faHtml5} />
      </div>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <div className="html-css-icon">
        <FontAwesomeIcon icon={faCss3} />
      </div>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FontAwesomeIcon icon={faBootstrap} />
    </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaFigma />
    </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

    </Row>
  );
}

export default Techstack;
