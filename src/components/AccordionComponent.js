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
                  <li className="list-inline-item flex-fill p-0 m-0">
                    <a href="tel:+1209-256-7841">209-256-7841</a>
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
                  <Card.Img variant="top" src="assets\images\start_page.png" />
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
                  <Button
                    href="#"
                    variant="warning"
                    block
                    size="lg"
                    type="button"
                  >
                    https://ancient-earth-94263.herokuapp.com/
                  </Button>
                  <Card.Body>
                    <Card.Link href="https://github.com/audluc/Project-2"></Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="assets\images\screenshot-burger.png"
                  />
                  <Card.Body>
                    <Card.Title>Burger</Card.Title>
                    <Card.Text>
                      Eat-Da-Burger! is a restaurant app that lets users input
                      the names of burgers they'd like to eat. Whenever a user
                      submits a burger's name, your app will display the burger
                      on the left side of the page -- waiting to be devoured.
                      Each burger in the waiting area also has a Devour it!
                      button. When the user clicks it, the burger will move to
                      the right side of the page.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Technologies used: MySQL, Node, Express, Handlebars, Media
                      Queries and a homemade ORM
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Button
                      href="https://github.com/audluc/burger"
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
                      https://stormy-savannah-69546.herokuapp.com/
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src="assets\images\noteTaker.png" />
                  <Card.Body>
                    <Card.Title>Note-Taker</Card.Title>
                    <Card.Text>
                      This app allows users to enter notes or reminders. These
                      notes and reminders will save until deleted by user.
                      Essentially, keeping the user more organized and prepared.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Technologies used: Express, CSS, JSON
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Button
                      href="https://github.com/audluc/Note-Taker"
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
                      https://ancient-journey-92327.herokuapp.com
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="assets\images\chuckScreenshot.png"
                  />
                  <Card.Body>
                    <Card.Title>Chuck Norris Fan Page</Card.Title>
                    <Card.Text>
                      This app allows Chuck Norris Fans to immerse themselves
                      into everything Chuck Norris. Providing the user with
                      GIFS, Jokes, Quotes and Movie Posters all about the
                      legend, Chuck Norris.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Technologies used: HTML, CSS, Javascript, JQuery, AJAX,
                      Bulma
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Button
                      href="https://github.com/audluc/The-Magic-D-Project"
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
                      https://the-magic-dragon.github.io/The-Magic-D-Project-/
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src="assets\images\codeQuiz.png" />
                  <Card.Body>
                    <Card.Title>Code Quiz</Card.Title>
                    <Card.Text>
                      App is a quiz that includes a timer, high score keeper to
                      include initials, multiple choice answers, and when
                      answered incorrectly the time decreases dramatically. I
                      created questions with alerts for the answers Created a
                      variable for the countdown timer Function for the start of
                      the games as well as coordinating with the timer Function
                      designating the timer is down to zero and the game is over
                      Console logs to show the coding Added an event listener
                      with click function to enable the correct answer If the
                      answer is incorrect the timer is depleted by 10 seconds as
                      a penalty for the incorrect answer
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Technologies used: HTML, CSS, Javascript, JQuery, Media
                      Queries
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Button
                      href="https://github.com/audluc/Code-Quiz"
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
                      https://audluc.github.io/Code-Quiz/
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src="assets\images\screenshot.png" />
                  <Card.Body>
                    <Card.Title>Workday Scheduler</Card.Title>
                    <Card.Text>
                      Create a working calendar that includes the currrent day
                      display, timeblocks for standard business hours; these
                      hours would turn a different color to represent; past,
                      present, and future in regards to the current time, a save
                      button for each of the hour increments, and the ability to
                      save and recall data entered into the time blocks as todos
                      for your day. The code includes; Current date, local
                      storage, color change depending on time, textarea for
                      calendar, save button, recalling data input
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Technologies used: HTML, CSS, Javascript, JQuery, Media
                      Queries
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Button
                      href="https://github.com/audluc/Work-Day-Scheduler"
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
                      https://audluc.github.io/Work-Day-Scheduler/
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
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
            <h5>
              Owned and Operated <small>2006 to 2013</small>
            </h5>
            <h6>
              TADS Unlimited <small>Valley Springs, CA</small>
            </h6>
            <ul>
              <li>
                Successful E-Commerce business operating six simultaneous
                websites
              </li>
              <li>
                Integrated the building of websites, controlling the financials
                and inventory, authored contracts with dropship suppliers.
              </li>
            </ul>
            <hr className="my-3" />
            <h3 className="p-2 mb-3 ml-0 pl-0 border-bottom border-dark">
              Education
            </h3>
            <ul>
            <h5>Full-Stack Web Development Certification Bootcamp</h5>
            <h6>
              University of California, Davis <small>2020</small>
            </h6>
            </ul>
            <ul>
            <h5>Crime and Intelligence Analysis Certification</h5>
            <h6>
              Department of Justice/Sacramento State University
              <small> 2015 </small>
            </h6>
            </ul>
            <ul>
            <h5>Bachelor's Degree in Management</h5>
            <h6>
              Saint Mary's College <small>June, 2008</small>
            </h6>
            </ul>
            <h3 className="p-2 mb-3 ml-0 pl-0 border-bottom border-dark">
              Technical Skills
            </h3>
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
