import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { DASHBOARD_PATH, LOGOUT_PATH, NEW_SESSION_PATH } from "../paths";

const NavbarComponent = ({ user }) => {
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
              title={`${displayedName}'s settings`}
              id="collasible-nav-dropdown"
              className="float-end"
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
