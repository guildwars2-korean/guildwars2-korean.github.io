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
      <header className="sticky-top" style={{marginBottom: 20}}>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">guildwars2-korean.github.io</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="직업" id="dropdown-trait">
                        <NavDropdown.Item href='/professions/elementalist'>
                          <img alt="elementalist" src="https://wiki.guildwars2.com/images/4/4e/Elementalist_icon_small.png"/>&nbsp;
                          엘리멘탈리스트
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/engineer'>
                          <img alt="engineer" src="https://wiki.guildwars2.com/images/0/07/Engineer_icon_small.png"/>&nbsp;
                          엔지니어
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/guardian'>
                          <img alt="guardian" src="https://wiki.guildwars2.com/images/c/c7/Guardian_icon_small.png"/>&nbsp;
                          가디언
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/mesmer'>
                          <img alt="mesmer" src="https://wiki.guildwars2.com/images/7/79/Mesmer_icon_small.png"/>&nbsp;
                          메스머
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/necromancer'>
                          <img alt="necromancer" src="https://wiki.guildwars2.com/images/1/10/Necromancer_icon_small.png"/>&nbsp;
                          네크로맨서
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/ranger'>
                          <img alt="ranger" src="https://wiki.guildwars2.com/images/1/1e/Ranger_icon_small.png"/>&nbsp;
                          레인저
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/revenant'>
                          <img alt="revenant" src="https://wiki.guildwars2.com/images/4/4c/Revenant_icon_small.png"/>&nbsp;
                          레버넌트
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/thief'>
                          <img alt="thief" src="https://wiki.guildwars2.com/images/a/a0/Thief_icon_small.png"/>&nbsp;
                          시프
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/warrior'>
                          <img alt="warrior" src="https://wiki.guildwars2.com/images/4/45/Warrior_icon_small.png"/>&nbsp;
                          워리어
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <a href="https://hits.seeyoufarm.com" style={{float: "right" }}><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fguildwars2-korean.github.io&count_bg=%23212121&title_bg=%234D4D4D&icon=&icon_color=%23E7E7E7&title=%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=true"/></a>
            </Container>
        </Navbar>
      </header>
    );
  }

export default Header;
