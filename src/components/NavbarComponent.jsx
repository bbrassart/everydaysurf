import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { DASHBOARD_PATH, LOGOUT_PATH, NEW_SESSION_PATH } from "../paths";
import Image from "next/image";

const NavbarComponent = ({ user }) => {
  console.log(user);

  const displayedName = user?.given_name || user?.nickname;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>EverydaySurf</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={DASHBOARD_PATH}>Dashboard</Nav.Link>
            <Nav.Link href={NEW_SESSION_PATH}>Log your session</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              id="collasible-nav-dropdown"
              title={
                user?.picture &&
                (user?.picture.includes("lh3.googleusercontent.com") ||
                  user?.picture.includes("s.gravatar.com")) ? (
                  <Image
                    className="thumbnail-image"
                    src={user?.picture}
                    alt="user pic"
                    width={50}
                    height={50}
                  />
                ) : (
                  <span>{displayedName}&apos;s settings</span>
                )
              }
            >
              <NavDropdown.Item href={LOGOUT_PATH}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
