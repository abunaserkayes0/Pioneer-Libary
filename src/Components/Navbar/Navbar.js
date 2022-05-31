import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Header = () => {
  return (
    <div>
      <Navbar fixed="top" bg="light" variant="light" expand="lg">
        <Container>
          <Link className="text-decoration-none" to="/home">
            <span className="text-black fs-4 fw-bold">Pioneer Library</span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <NavLink
                className="text-decoration-none mx-2 text-black fs-6 fw-bold"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="text-decoration-none mx-2 text-black fs-6 fw-bold"
                to="/reviews"
              >
                Reviews
              </NavLink>
              <NavLink
                className="text-decoration-none mx-2 text-black fs-6 fw-bold"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className="text-decoration-none mx-2 text-black fs-6 fw-bold"
                to="/blog"
              >
                Blog
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
