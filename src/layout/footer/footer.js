import React from 'react';
import './footer.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/NavBar'

function Footer(props) {
    return (
      <>
      <footer className="footer">
        <Navbar bg="light" variant="light" fixed="bottom">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </footer>
      </>
    );
  }

export default Footer;
