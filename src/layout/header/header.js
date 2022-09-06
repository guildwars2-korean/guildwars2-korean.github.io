import React from 'react';
import './header.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/NavBar'
import NavDropdown from 'react-bootstrap/NavDropdown'


function Header(props) {
    return (
      <header className="sticky-top">
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">GW2</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="직업" id="dropdown-trait">
                        <NavDropdown.Item href='/professions/elementalist'>엘리멘탈리스트</NavDropdown.Item>
                        <NavDropdown.Item href='/professions/engineer'>엔지니어</NavDropdown.Item>
                        <NavDropdown.Item href='/professions/guardian'>가디언</NavDropdown.Item>
                        <NavDropdown.Item href='/professions/mesmer'>메스머</NavDropdown.Item>
                        <NavDropdown.Item href='/professions/necromancer'>네크로맨서</NavDropdown.Item>
                        <NavDropdown.Item href='/professions/ranger'>레인저</NavDropdown.Item>
                        <NavDropdown.Item href='/professions/revenant'>레버넌트</NavDropdown.Item>
                        <NavDropdown.Item href='/professions/thief'>시프</NavDropdown.Item>
                        <NavDropdown.Item href='/professions/warrior'>워리어</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
      </header>
    );
  }

export default Header;
