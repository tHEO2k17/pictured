import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

function App() {
  return (
    <Container className="min-vh-100">
      <Row className="min-vh-100 align-items-center">
        <Col>
          <Image src={"./core/res/images/logo.svg"} />
          <h1>Left</h1>
        </Col>
        <Col>
          <Image src={"./core/res/images/side-image.svg"} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
