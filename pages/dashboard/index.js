import React from "react";
import { LOGOUT_PATH } from "../../public/paths";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { Container, Col, Spinner, Row, Button, Navbar } from "react-bootstrap";

const Dashboard = () => {
  const { user, isLoading } = useUser();

  const renderSpinner = (
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

  const renderDashboard = (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href={LOGOUT_PATH}>Log out</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <div className="d-flex justify-content-center">
              <h1 className="mt-4">
                Hi {user?.name}! Welcome to your Dashboard
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );

  return isLoading ? renderSpinner : renderDashboard;
};

export default Dashboard;

export const getServerSideProps = withPageAuthRequired();
