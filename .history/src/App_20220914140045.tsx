import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

function App() {
  return (
    <Container className="min-vh-100">
      <Row className="min-vh-100 align-items-center">
        <Col>
          <Image src={"./core/res/images/logo.svg"} />
          <h1 className="text-danger fw-20">
            Website <br /> under Construction
          </h1>
          <p className="text-muted">
            We are excited to announce that our new photography website is under
            construction! Stay tuned for updates on when the site will be up and
            running. In the meantime, follow us on social media for
            behind-the-scenes peeks of what's to come!
          </p>
        </Col>
        <Col>
          <Image src={"./core/res/images/side-image.svg"} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
