import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

function App() {
  return (
    <Container className="height">
      <Row className="align-items-center">
        <Col>
          <h1>Left</h1>
        </Col>
        <Col>
          <Image src={'core/res/images/side-image.svg'} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
