import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivangi </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently intern as a Ui/Ux designer at Greenverse Pvt. Ltd.
            <br />
            I am persuing B.tech from United College of Engineering & Research ,Prayagraj 
            in the field of Computer Science & Engineering.
            <br />
            <br />
            Professional Journey
            <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Greenverse Pvt.Ltd.  </span>Ui/Ux Designer with Zoho Developer 
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Apneehatti  </span>Ui/Ux Designer 
            </li>
          </ul>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> NCC Camps & Training
            </li>
            <li className="about-activity">
              <ImPointRight /> Art & Drawing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shivangi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
