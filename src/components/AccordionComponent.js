import React from "react";
import { Accordion, Card } from "react-bootstrap";
import RecipeReviewCard from "./ProfileContect"
const AccordionComponent = () => {
  return (
    <Accordion defaultActiveKey="0" className="w-100 bg-secondary customAccordion">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-secondary">
          <h3>Profile</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0" className="bg-light text-dark">
          <Card.Body><RecipeReviewCard/></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1" className="w-100 bg-secondary">
          <h3>Portfolio</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1" className="bg-light text-dark">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2" className="w-100 bg-secondary">
          <h3>Resume</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2" className="w-100 bg-light text-dark">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AccordionComponent;
