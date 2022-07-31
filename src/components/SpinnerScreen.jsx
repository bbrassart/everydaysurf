import React from "react";
import { Container, Col, Spinner, Row } from "react-bootstrap";

const SpinnerScreen = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="success" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SpinnerScreen;
