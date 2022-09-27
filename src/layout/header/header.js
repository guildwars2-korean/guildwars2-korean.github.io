import React from 'react';
import './header.css'

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import elementalist_icon from '../../images/Elementalist_icon_small.png'
import engineer_icon from '../../images/Engineer_icon_small.png'
import guardian_icon from '../../images/Guardian_icon_small.png'
import mesmer_icon from '../../images/Mesmer_icon_small.png'
import necromancer_icon from '../../images/Necromancer_icon_small.png'
import ranger_icon from '../../images/Ranger_icon_small.png'
import revenant_icon from '../../images/Revenant_icon_small.png'
import thief_icon from '../../images/Thief_icon_small.png'
import warrior_icon from '../../images/Warrior_icon_small.png'

import logo from '../../images/favicon.png'



function Header(props) {
    return (
      <header className="sticky-top" style={{marginBottom: 10}}>
        <Navbar bg="dark" variant="dark" style={{width: "100%"}}>
            <Container>
              <img  alt="logo" src={logo} style={{height: "24px", width: "24px"}} />&nbsp;
              <Navbar.Brand href="/" style={{fontSize: "1.1em"}}>gw2kr.com</Navbar.Brand>
              <Nav className="me-auto" style={{width: "100%", fontSize: "0.9em"}}>
                <Nav.Link href="/attributesAndBoonsAndConditions" style={{flex: "left"}}>속성/분/컨디션</Nav.Link>
                <NavDropdown title="스킬/특성" id="dropdown-skill-trait">
                    <NavDropdown.Item href='/skillsAndTraits/elementalist'>
                      <img alt="elementalist" src={elementalist_icon}/>&nbsp;
                      엘리멘탈리스트
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/skillsAndTraits/engineer'>
                      <img alt="engineer" src={engineer_icon}/>&nbsp;
                      엔지니어
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/skillsAndTraits/guardian'>
                      <img alt="guardian" src={guardian_icon}/>&nbsp;
                      가디언
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/skillsAndTraits/mesmer'>
                      <img alt="mesmer" src={mesmer_icon}/>&nbsp;
                      메스머
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/skillsAndTraits/necromancer'>
                      <img alt="necromancer" src={necromancer_icon}/>&nbsp;
                      네크로맨서
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/skillsAndTraits/ranger'>
                      <img alt="ranger" src={ranger_icon}/>&nbsp;
                      레인저
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/skillsAndTraits/revenant'>
                      <img alt="revenant" src={revenant_icon}/>&nbsp;
                      레버넌트
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/skillsAndTraits/thief'>
                      <img alt="thief" src={thief_icon}/>&nbsp;
                      시프
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/skillsAndTraits/warrior'>
                      <img alt="warrior" src={warrior_icon}/>&nbsp;
                      워리어
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/board" style={{flex: "left"}}>댓글</Nav.Link>
              </Nav>
              <a href="https://hits.seeyoufarm.com" style={{float: "right" }}><img alt="counter" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fguildwars2-korean.github.io&count_bg=%23212121&title_bg=%234D4D4D&icon=&icon_color=%23E7E7E7&title=%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=false"/></a>
            </Container>
        </Navbar>
      </header>
    );
  }

export default Header;
