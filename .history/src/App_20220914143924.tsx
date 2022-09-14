import React from "react";
import {
  Container,
  Col,
  Row,
  Image,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap";
import logo from "./core/res/images/logo.svg";
import sideImage from "./core/res/images/side-image.svg";

function App() {
  return (
    <Container className="min-vh-100">
      <Row className="min-vh-100 align-items-center">
        <Col>
          <Image src={logo} />
          <h1 className="text-danger fw-bold mt-4">
            Website <br /> under Construction
          </h1>

          <p className="text-muted">
            We are excited to announce that our new photography website is under
            construction! Stay tuned for updates on when the site will be up and
            running. In the meantime, follow us on social media for
            behind-the-scenes peeks of what's to come!
          </p>

          <InputGroup size="lg" className="mt-4 mb-3 shadow-sm">
            <Form.Control
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="basic-addon2"
            />
            <Button variant="danger" id="button-addon2">
              Get notified
            </Button>
          </InputGroup>
        </Col>
        <Col className="d-none d-lg-block">
          <Image src={sideImage} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
