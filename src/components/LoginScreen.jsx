import React from "react";
import { LOGIN_PATH } from "../../src/paths";
import Link from "next/link";
import { Container, Col, Row, Button } from "react-bootstrap";

const LoginScreen = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={3}>
          <div className="d-flex justify-content-center">
            <Button variant="light">
              <Link href={LOGIN_PATH}>Log in or create an account</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
