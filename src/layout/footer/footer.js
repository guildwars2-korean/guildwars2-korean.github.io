import React from 'react';
import './footer.css'

import discordIcon from '../../discord.svg'

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
              <Nav.Link href="https://discord.gg/hZzJV2Y"><img src={discordIcon} width={30} /> [rn] This is M</Nav.Link>
              <Nav.Link href="#" style={{pointerEvents: "none", cursor: "default"}}>/&nbsp;&nbsp;basic.6395</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </footer>
      </>
    );
  }

export default Footer;
