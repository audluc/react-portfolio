import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Wrapper = () => {
  return (
    <Row>
      <Col>{props.children}</Col>
    </Row>
  );
};

export default Wrapper;
