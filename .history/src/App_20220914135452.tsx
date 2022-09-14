import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h1>Left</h1>
        </Col>
        <Col>
          <h1>Right</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
