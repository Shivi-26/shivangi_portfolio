import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import echallan from "../../Assets/Projects/Echallan.png";
import apneehatti from "../../Assets/Projects/apneehatti.png";
import calendar from "../../Assets/Projects/Calendar.png";
import hotel from "../../Assets/Projects/Hotel.png";
import airbuddi from "../../Assets/Projects/green.png";
import remax from "../../Assets/Projects/Remax.png";

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
              imgPath={hotel}
              isBlog={false}
              title="Trippybaba tour"
              description="A comprehensive platform offering travel packages to enchanting destinations such as Dubai and Thailand, along with valuable insights through the Hotel Booking Analysis Dashboard, I have contributed to enhancing the overall user experience and decision-making capabilities of TrippyBaba's clients. "
              ghLink="https://github.com/Shivi-26/Trippybaba_Tour"
              demoLink="https://trippybaba-tour.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendar}
              isBlog={false}
              title="Customized Google Calendar"
              description="Create a fully responsive and customizable Google Calendar web application using React.js, Nodejs and Bootstrap. The application provides an intuitive and interactive interface for users to manage their schedules, events, and appointments seamlessly."
              ghLink="https://github.com/Shivi-26/google_calendar"
              demoLink="https://google-calendar-livid.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={echallan}
              isBlog={false}
              title="E-challan"
              description="A system for managing e-challans with admin and user sections, database integration, and online payment. Technologies used: HTML, CSS, JavaScript, Node.js, Express.js, MongoDB."
              ghLink="https://github.com/Shivi-26/E-Challan-Website"
              demoLink="https://e-challan-management-system.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apneehatti}
              isBlog={false}
              title="Apneehatti Ecommerce-Website"
              description="Designed the Apneehatti website to enhance the user experience. The project involved creating a fresh and modern look for the website's desktop and mobile versions. The design encompasses over 50 screens, including the home page, login, register, sale, checkout, product, and payment pages, among others."
              demoLink="https://www.figma.com/proto/cLMwnD65JogqewK1QF5YQH/Home?type=design&node-id=1-424&t=79UqajfhWrV9RH3z-0&scaling=min-zoom&page-id=0%3A1"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbuddi}
              isBlog={false}
              title="Greenverse Pvt.Ltd."
              description="Elevating air quality to new heights, the Greenverse Private Limited website is a testament to innovation in the realm of air purifiers and air quality monitors. Crafted with precision on Zoho and designed seamlessly on Figma, this project reflects the commitment of Greenverse to creating products that redefine the way we breathe."
              demoLink="https://www.figma.com/proto/cLMwn"
            />
          </Col>
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remax}
              isBlog={false}
              title="Remax"
              description="Led the design efforts for the Realassist.ai dashboard system, encompassing the creation of the home page and multiple specialized dashboards. These dashboards were meticulously designed to provide users with an intuitive interface for data analysis and decision-making. The project focused on improving user experience and productivity."
              demoLink="https://www.figma.com/proto/KYcnN8CLHtiRPDVz31f4yj/Untitled?type=design&node-id=21-94&t=pg9EzC3HMJ2B67Tm-0&scaling=min-zoom&page-id=0%3A1"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
