import React from "react";
import { LOGIN_PATH } from "../../src/paths";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useRouter } from "next/router";

const LoginScreen = () => {
  const router = useRouter();
  const goToLogin = () => router.push(LOGIN_PATH);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h1>Welcome to Everydaysurf</h1>
          <h2>Log all of your surf sessions here to crunch some data</h2>
        </Col>
        <Col md={4}>
          <div className="d-flex justify-content-center">
            <Button variant="success" onClick={goToLogin}>
              Log in or create an account
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
