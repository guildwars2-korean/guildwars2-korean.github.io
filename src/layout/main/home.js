import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card } from 'react-bootstrap';

function Home() {
  return (
    <>
    <Container>
      <Row style={{marginBottom: 10}}>
        {/* 안내 */}
        <Col md="6">
          <Card style={{marginBottom: 10}}>
            <Card.Header>안내</Card.Header>
            <Card.Body>
              본 사이트는 길드워2 한글화 팬사이트입니다.<br></br>
              현재 지속적인 개발 중이니 많은 관심 부탁드립니다.<br></br>
              특성/스킬은 기본적인 번역 이후 구글 번역 API를 사용해 우선 번역해두었고,<br></br>
              이후 하나씩 직접 번역한 내용으로 업데이트 할 예정입니다.<br></br>
              의견 및 도움주실 분들께서는 <a href="https://discord.gg/m8XwaW4waa" target="_blank" rel="noreferrer" >개발/번역 디스코드</a>로 참여 부탁드립니다.
            </Card.Body>
          </Card>
        </Col>
        {/* 유용한 사이트 모음 */}
        <Col md="6">
        <Card style={{marginBottom: 10}}>
            <Card.Header>유용한 사이트 모음</Card.Header>
            <Card.Body>
              <ul>
                <li>
                  <a href="https://cafe.daum.net/koreanguildwars2" target="_blank" rel="noreferrer">길드워2 한인 모임</a>
                </li>
                <li>
                  <a href="https://metabattle.com/" target="_blank" rel="noreferrer">Metabattle</a>
                </li>
                <li>
                  <a href="https://snowcrows.com/" target="_blank" rel="noreferrer">Snowcrows</a>
                </li>
                <li>
                  <a href="https://wiki.guildwars2.com/" target="_blank" rel="noreferrer">Guild Wars 2 Wiki</a>
                </li>
                <li>
                  <a href="https://www.deltaconnected.com/arcdps/" target="_blank" rel="noreferrer">arcdps</a>
                </li>
                <li>
                  <a href="http://www.gw2taco.com/" target="_blank" rel="noreferrer">TacO</a>
                </li>
                <li>
                  <a href="https://wiki.guildwars2.com/wiki/Event_timers" target="_blank" rel="noreferrer">Event timers</a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        {/* 주요 업데이트 */}
        <Col md="6">
          <Card style={{marginBottom: 10}}>
            <Card.Header>주요 업데이트</Card.Header>
            <Card.Body>
              <ul>
                <li>
                  [2022.09.07] 스킬을 타입별(직업, 힐, 유틸리티, 엘리트) 분류
                </li>
                <li>
                  [2022.09.06] Beta 오픈
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        {/* 한인 길드 리스트 */}
        <Col md="6">
          <Card style={{marginBottom: 10}}>
            <Card.Header>한인 길드 리스트</Card.Header>
            <Card.Body>
              <ul>
                <li>
                  Dcinside [DC]
                </li>
                <li>
                  El Rosen Ritter [RR]
                </li>
                <li>
                  <a href="https://discord.gg/KVuhmFuFeg" target="_blank" rel="noreferrer" >End of Melee [End]</a>
                </li>
                <li>
                  <a href="https://discord.gg/rJNa6EtuBC" target="_blank" rel="noreferrer" >Gamers World [kiwi]</a>
                </li>
                <li>
                  <a href="https://discord.gg/M6ErTnFwJP" target="_blank" rel="noreferrer" >La Campanella [LC]</a>
                </li>
                <li>
                  Never Die [ND]
                </li>
                <li>
                  <a href="https://discord.gg/hZzJV2Y" target="_blank" rel="noreferrer" >This Is M [rn]</a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Home;
