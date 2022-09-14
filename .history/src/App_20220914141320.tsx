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
          <h1 className="text-danger fw-bold mt-3">
            Website <br /> under Construction
          </h1>

          <p className="text-muted">
            We are excited to announce that our new photography website is under
            construction! Stay tuned for updates on when the site will be up and
            running. In the meantime, follow us on social media for
            behind-the-scenes peeks of what's to come!
          </p>

          <Row>
            <Col md={6}>
              <InputGroup className="mb-3 ">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Col>
        <Col>
          <Image src={sideImage} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
