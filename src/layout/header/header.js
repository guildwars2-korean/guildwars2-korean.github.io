import React from 'react';
import './header.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/NavBar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import elementalist_icon from '../../images/Elementalist_icon_small.png'
import engineer_icon from '../../images/Engineer_icon_small.png'
import guardian_icon from '../../images/Guardian_icon_small.png'
import mesmer_icon from '../../images/Mesmer_icon_small.png'
import necromancer_icon from '../../images/Necromancer_icon_small.png'
import ranger_icon from '../../images/Ranger_icon_small.png'
import revenant_icon from '../../images/Revenant_icon_small.png'
import thief_icon from '../../images/Thief_icon_small.png'
import warrior_icon from '../../images/Warrior_icon_small.png'



function Header(props) {
    return (
      <header className="sticky-top" style={{marginBottom: 10}}>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">gw2kr.com</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="스킬/특성" id="dropdown-trait">
                        <NavDropdown.Item href='/professions/elementalist'>
                          <img alt="elementalist" src={elementalist_icon}/>&nbsp;
                          엘리멘탈리스트
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/engineer'>
                          <img alt="engineer" src={engineer_icon}/>&nbsp;
                          엔지니어
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/guardian'>
                          <img alt="guardian" src={guardian_icon}/>&nbsp;
                          가디언
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/mesmer'>
                          <img alt="mesmer" src={mesmer_icon}/>&nbsp;
                          메스머
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/necromancer'>
                          <img alt="necromancer" src={necromancer_icon}/>&nbsp;
                          네크로맨서
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/ranger'>
                          <img alt="ranger" src={ranger_icon}/>&nbsp;
                          레인저
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/revenant'>
                          <img alt="revenant" src={revenant_icon}/>&nbsp;
                          레버넌트
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/thief'>
                          <img alt="thief" src={thief_icon}/>&nbsp;
                          시프
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/professions/warrior'>
                          <img alt="warrior" src={warrior_icon}/>&nbsp;
                          워리어
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <a href="https://hits.seeyoufarm.com" style={{float: "right" }}><img alt="counter" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fguildwars2-korean.github.io&count_bg=%23212121&title_bg=%234D4D4D&icon=&icon_color=%23E7E7E7&title=%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=false"/></a>
            </Container>
        </Navbar>
      </header>
    );
  }

export default Header;
