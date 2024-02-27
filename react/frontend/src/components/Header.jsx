import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Omegle from "../assets/images/omegle.png";

export default function Header() {
  return (
    <div >
      <Navbar expand="lg" style={{ backgroundColor: "#0180FF" }}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={Omegle} height="50" width="150" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="text-light" as={Link} to="/pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
