import React from "react";
import { Container, Col, Row, Badge, Table } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";

const DashboardScreen = ({ user, sessions }) => {
  return (
    <>
      <NavbarComponent user={user} />

      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="mt-2">
              <Badge bg="success">{user?.given_name}&apos;s dashboard</Badge>
            </h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>
            <div className="mt-2">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Duration</th>
                    <th>Waves&apos; height</th>
                    <th>Location</th>
                    <th>Rating out of 10</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((session, index) => (
                    <tr key={session._id}>
                      <td>{index + 1}</td>
                      <td>{session.duration}</td>
                      <td>{session.height}</td>
                      <td>{session.location}</td>
                      <td>{session.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardScreen;
