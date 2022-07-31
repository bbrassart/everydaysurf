import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { DASHBOARD_PATH, ADD_SESSION_PATH } from "../paths";

const NewSessionScreen = ({user}) => {
  const router = useRouter();
  const [duration, setDuration] = useState('');
  const [height, setHeight] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');

  const createSession = async () => {
    const res = await fetch(ADD_SESSION_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        duration,
        height,
        location,
        rating,
        userId: user.sub,
      }),
    });
    const data = await res.json();
    router.push(DASHBOARD_PATH);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createSession();
  };
  return (
    <>
      <NavbarComponent user={user} />
      <Row>
        <Col>
          <Form className="m-5">
            <Form.Group className="mb-3" controlId="duration">
              <Form.Label>Session duration</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter duration"
                value={duration}
                onChange={({ target }) => setDuration(target.value)}
              />
              <Form.Text className="text-muted">
                Duration of your session in minutes
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="height">
              <Form.Label>Waves&apos; height</Form.Label>
              <Form.Control
                type="number"
                required
                placeholder="Enter waves' height"
                value={height}
                onChange={({ target }) => setHeight(target.value)}
              />
              <Form.Text className="text-muted">
                Maximum height of set waves during the session
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Rating out of 10</Form.Label>
              <Form.Control
                type="number"
                required
                placeholder="Rating"
                value={rating}
                onChange={({ target }) => setRating(target.value)}
              />
              <Form.Text className="text-muted">
                Rate your session from 0 being the worst of your life to 10 to
                being the absolute best.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="string"
                required
                placeholder="Location"
                value={location}
                onChange={({ target }) => setLocation(target.value)}
              />
              <Form.Text className="text-muted">
                Name of the surf&apos;s spot
              </Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(event) => onSubmit(event)}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default NewSessionScreen;
