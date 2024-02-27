import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 pt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col className="text-end" md={6}>
            <h5>Follow Us</h5>
            <p>Facebook | Twitter | Instagram</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;