import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Link className="text-decoration-none" to='/home'>
            <span className="text-black fs-4 fw-bold">Pioneer Library</span>
          </Link>
          <Nav className="ms-auto">
            <NavLink className="text-decoration-none mx-2 text-black fs-6 fw-bold" to='/home'>Home</NavLink>
            <NavLink className="text-decoration-none mx-2 text-black fs-6 fw-bold" to='/reviews'>Reviews</NavLink>
            <NavLink className="text-decoration-none mx-2 text-black fs-6 fw-bold" to='/dashboard'>Dashboard</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
