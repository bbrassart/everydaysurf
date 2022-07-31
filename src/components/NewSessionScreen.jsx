import React from "react";
import NavbarComponent from "./NavbarComponent";
import { Form, Button, Row, Col } from "react-bootstrap";
import {useRouter} from "next/router";
import { DASHBOARD_PATH } from "../paths";

const NewSessionScreen = ({ user }) => {
  const router = useRouter();

  const onSubmit = () => {
    event.preventDefault();
    router.push(DASHBOARD_PATH);
  };
  return (
    <>
      <NavbarComponent user={user} />
      <Row>
        <Col>
          <Form className="m-5">
            <Form.Group className="mb-3" controlId="duration">
              <Form.Label>Session duration</Form.Label>
              <Form.Control type="number" placeholder="Enter duration" />
              <Form.Text className="text-muted">
                Duration of your session in minutes
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="height">
              <Form.Label>Waves&apos; height</Form.Label>
              <Form.Control type="number" placeholder="Enter waves' height" />
              <Form.Text className="text-muted">
                Maximum height of set waves during the session
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Rating out of 10</Form.Label>
              <Form.Control type="number" placeholder="Rating" />
              <Form.Text className="text-muted">
                Rate your session from 0 being the worst of your life to 10 to
                being the absolute best.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Rating" />
              <Form.Text className="text-muted">
                Name of the surf&apos;s spot
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(event) => onSubmit(event)}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default NewSessionScreen;
