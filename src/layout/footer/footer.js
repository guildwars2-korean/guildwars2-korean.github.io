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
              <Nav.Link href="#" style={{pointerEvents: "none", cursor: "default"}}>
                &nbsp;&nbsp;&nbsp;만든사람&nbsp;basic.6395&nbsp;&nbsp;&nbsp;
                |&nbsp;&nbsp;&nbsp;도움주신분&nbsp;Maglock.2631, SCVwar.3784
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </footer>
      </>
    );
  }

export default Footer;
