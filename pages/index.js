import { useUser } from "@auth0/nextjs-auth0/";
import { DASHBOARD_PATH, LOGIN_PATH } from "../public/paths";
import Link from 'next/link'
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import { Container, Spinner, Col, Row, Button } from "react-bootstrap";

const Home = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && !isLoading) {
      router.push(DASHBOARD_PATH);
    }
  }, [user, isLoading, router]);

  const renderLoadingSpinner = <Spinner animation="grow" variant="success" />;

  const renderLoginButton = (
    <Button variant='light'>
      <Link href={LOGIN_PATH}>Log in or create an account</Link>
    </Button>
  );

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={3}>
          <div className='d-flex justify-content-center'>
            {isLoading ? renderLoadingSpinner : renderLoginButton}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;