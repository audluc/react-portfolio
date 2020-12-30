import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  Accordion,
  Card,
  Row,
  Image,
  Button,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import RecipeReviewCard from "./ProfileContect";
const AccordionComponent = () => {
  return (
    <Accordion
      defaultActiveKey="0"
      className="w-100 bg-secondary customAccordion"
    >
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="bg-secondary"
        >
          <h3>Profile</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0" className="bg-light text-dark">
          <Card.Body>
            <Row>
              <Col md={4}>
                <Image src="assets/images/adagenais.jpg" fluid rounded />
                <ul className="list-inline my-3 d-flex justify-content-evenly">
                  <li className="list-inline-item flex-fill p-0 m-0">
                    <SocialIcon url="https://github.com/audluc" />
                  </li>
                  <li className="list-inline-item flex-fill p-0 m-0">
                    <SocialIcon url="https://www.linkedin.com/in/audra-dagenais-a44375b3/" />
                  </li>
                  <li className="list-inline-item flex-fill p-0 m-0">
                    <SocialIcon url="mailto:audluc44@gmail.com" />
                  </li>
                </ul>
              </Col>
              <Col md={8}>
                <h2>Audra Dagenais</h2>
                <h4>Full Stack Developer</h4>
                <hr />
                <p>
                  As a new Full-Stack Developer, I plan on hitting the ground
                  running. Currently, I have 7+ years as a Crime and
                  Intelligence Analyst. This position has offered me an
                  opportunity to "think outside of the box and be able to get
                  creative with problem solving. With the Software Development
                  skills obtained, as well as my Analytical skillset, I will not
                  only find the solution to a problem, I will be able to code it
                  successfully.
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="1"
          className="w-100 bg-secondary"
        >
          <h3>Portfolio</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1" className="bg-light text-dark">
          <Card.Body>
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="assets\images\start_page.png"
                  />
                  <Card.Body>
                    <Card.Title>Food Bank Finder</Card.Title>
                    <Card.Text>
                      This app allows users to enter their California zip code
                      and the top 3 food bank locations will return. These
                      locations can then be saved and accessed later. The Google
                      map will also plot the locations on the map giving the
                      user a visual of where they are located.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Technologies used: React, Node, API's, Heroku, Bootstrap
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Button
                      href="https://github.com/audluc/Food-Bank-Finder"
                      variant="dark"
                      block
                      size="lg"
                      type="button"
                    >
                      Github
                    </Button>
                    <Button
                      href="#"
                      variant="warning"
                      block
                      size="lg"
                      type="button"
                    >
                      https://calm-ridge-31543.herokuapp.com/
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="assets\images\form_generator_screenshot.png"
                  />
                  <Card.Body>
                    <Card.Title>Form Generator</Card.Title>
                    <Card.Text>
                      Form Generator is an app used to generate a form for a
                      client by pulling out information stored in database or
                      adding a client's information and store in database for
                      future use. In our project we have used the DMV form and
                      1040 form.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Technologies Used: Sequelize, Node, Express and
                      Handlebars. Handlebars is used to generate the HTML page.
                      Node and Sequelize is used to query and route data in the
                      app.
                    </ListGroupItem>
                  </ListGroup>
                  <Button
                      href="https://github.com/audluc/Project-2"
                      variant="dark"
                      block
                      size="lg"
                      type="button"
                    >
                      Github
                    </Button>
                  <Card.Body>
                    <Card.Link href="https://github.com/audluc/Project-2"></Card.Link>
                    <Card.Link href="#">
                      "https://ancient-earth-94263.herokuapp.com"
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="2"
          className="w-100 bg-secondary"
        >
          <h3>Resume</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2" className="w-100 bg-light text-dark">
          <Card.Body>
            <h3 className="p-2 mb-3 ml-0 pl-0 border-bottom border-dark">
              Experience
            </h3>
            <h5>
              Sheriff Service Technician <small>2013 to Present</small>
            </h5>
            <h6>
              Calaveras County Sheriff’s Office <small>San Andreas, CA</small>
            </h6>
            <ul>
              <li>
                Analyze crimes to identify perpetrators while working in
                coordination with Investigative agents
              </li>
              <li>
                Produce Intelligence reports regarding crime trends and hot
                spots within jurisdictions
              </li>
            </ul>
            <hr className="my-3" />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AccordionComponent;

//Calaveras County Sheriff’s Office - San Andreas, CA
//Sheriff Service Technician, 2013 to Present
//Analyze crimes to identify perpetrators while working in coordination with Investigative agents
//Produce Intelligence reports regarding crime trends and hot spots within jurisdictions
