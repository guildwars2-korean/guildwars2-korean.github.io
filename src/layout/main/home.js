import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card } from 'react-bootstrap';

function Home() {
  return (
    <>
    <Container>
      <Row style={{paddingTop: 20}}>
        <Col md="6">
          <Card>
            <Card.Header>안내</Card.Header>
            <Card.Body>
              본 사이트는 길드워2 한글화 팬사이트입니다.<br></br>
              현재 지속적인 개발 중이니 많은 관심 부탁드립니다.<br></br>
              특성/스킬은 기본적인 번역 이후 구글 번역 API를 사용해 우선 번역해두었고,<br></br>
              이후 하나씩 직접 번역한 내용으로 업데이트 할 예정입니다.<br></br>
              의견 및 도움주실 분들께서는 <a href="https://discord.gg/m8XwaW4waa" target="_blank">개발/번역 디스코드</a>로 참여 부탁드립니다.
            </Card.Body>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <Card.Header>유용한 사이트 모음</Card.Header>
            <Card.Body>
              <ul>
                <li>
                  <a href="https://cafe.daum.net/koreanguildwars2">길드워2 한인 모임</a>
                </li>
                <li>
                  <a href="https://metabattle.com/">Metabattle</a>
                </li>
                <li>
                  <a href="https://snowcrows.com/">Snowcrows</a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{paddingTop: 20}}>
        <Col md="6">
          <Card>
            <Card.Header>한인 길드 리스트</Card.Header>
            <Card.Body>
              <ul>
                <li>
                  <a href="https://discord.gg/hZzJV2Y">This Is M [rn]</a>
                </li>
                <li>
                  <a href="https://discord.gg/KVuhmFuFeg">End of Melee [End]</a>
                </li>
                <li>
                  <a href="https://discord.gg/rJNa6EtuBC">Gamers World [kiwi]</a>
                </li>
                <li>
                  <a href="https://discord.gg/M6ErTnFwJP">La campanella [LC]</a>
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
