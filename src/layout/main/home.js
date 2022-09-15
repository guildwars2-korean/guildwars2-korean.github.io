import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card } from 'react-bootstrap';
import Gw2card from '../../components/gw2card';
import DiscordWidget from '../discordWidget';

function Home() {
  return (
    <>
    <Container>
      <Row >
        {/* 안내 */}
        <Col md="6">
          <Gw2card header="안내" defaultActiveKey="0">
            <Card.Body>
              본 사이트는 길드워2 한글화 팬사이트입니다.<br></br>
              현재 지속적인 개발 중이니 많은 관심 부탁드립니다.<br></br>
              특성/스킬은 기본적인 번역 이후 구글 번역 API를 사용해 우선 번역해두었고,<br></br>
              이후 하나씩 직접 번역한 내용으로 업데이트 할 예정입니다.<br></br>
              의견 및 도움주실 분들께서는 <a href="https://discord.gg/m8XwaW4waa" target="_blank" rel="noreferrer" >개발/번역 디스코드</a>로 참여 부탁드립니다.<br></br>
            </Card.Body>
          </Gw2card>
        </Col>
        {/* 유용한 사이트 모음 */}
        <Col md="6">
        <Gw2card header="유용한 사이트 모음" defaultActiveKey="0">
            <Card.Body>
              <ul>
                <li>
                  <a href="https://cafe.daum.net/koreanguildwars2" target="_blank" rel="noreferrer">길드워2 한인 모임</a> 커뮤니티
                </li>
                <li>
                  <a href="https://gall.dcinside.com/mgallery/board/lists?id=guildwars2" target="_blank" rel="noreferrer">길드워2 갤러리</a> 커뮤니티
                </li>
                <li>
                  <a href="https://wiki.guildwars2.com/" target="_blank" rel="noreferrer">Guild Wars 2 Wiki</a> 공식 위키
                </li>
                <li>
                  <a href="https://metabattle.com/" target="_blank" rel="noreferrer">Metabattle</a> 빌드
                </li>
                <li>
                  <a href="https://snowcrows.com/" target="_blank" rel="noreferrer">Snowcrows</a> 레이드 빌드
                </li>
                <li>
                  <a href="https://www.deltaconnected.com/arcdps/" target="_blank" rel="noreferrer">arcdps</a> 애드온
                </li>
                <li>
                  <a href="http://www.gw2taco.com/" target="_blank" rel="noreferrer">TacO</a> 애드온
                </li>
                <li>
                  <a href="https://wiki.guildwars2.com/wiki/Event_timers" target="_blank" rel="noreferrer">Event timers</a> 월드보스, 이벤트 시간표
                </li>
                <li>
                  <a href="https://gw2crafts.net/" target="_blank" rel="noreferrer">gw2crafts</a> 제작 가이드
                </li>
                <li>
                  <a href="https://discretize.eu/" target="_blank" rel="noreferrer">discretize</a> 프랙탈 가이드
                </li>
                <li>
                  <a href="https://fast.farming-community.eu/" target="_blank" rel="noreferrer">fast.farming</a> 파밍 가이드
                </li>
              </ul>
            </Card.Body>
          </Gw2card>
        </Col>
        {/* 주요 업데이트 */}
        <Col md="6">
          <Gw2card header="주요 업데이트" defaultActiveKey="0">
            <Card.Body>
              <ul>
                <li>
                  [2022.09.15] 속성/분/컨디션 추가
                </li>
                <li>
                  [2022.09.12] 직업별 무기 스킬 추가
                </li>
                <li>
                  [2022.09.07] 스킬을 타입별(직업, 힐, 유틸리티, 엘리트) 분류
                </li>
                <li>
                  [2022.09.06] Beta 오픈
                </li>
              </ul>
            </Card.Body>
          </Gw2card>
        </Col>
        {/* 한인 길드 리스트 */}
        <Col md="6">
          <Gw2card header="한인 길드 리스트" defaultActiveKey="0">
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
                  <a href="https://discord.gg/9HQxRDKv4m" target="_blank" rel="noreferrer" >HOGU [EZGG]</a>
                </li>
                <li>
                  <a href="https://discord.gg/M6ErTnFwJP" target="_blank" rel="noreferrer" >La Campanella [LC]</a>
                </li>
                <li>
                  Never Die [ND]
                </li>
                <li>
                  <a href="https://discord.gg/r2mdc8D" target="_blank" rel="noreferrer" >This Is M [rn]</a>
                </li>
              </ul>
            </Card.Body>
          </Gw2card>
        </Col>
        {/* gw2kr.com 디스코드 */}
        {/* <Col md="6" className="discord">
          <DiscordWidget id="1007871222429786152"></DiscordWidget>
        </Col> */}
        {/* 정보 */}
        <Col md="6">
          <Gw2card header="정보">
            <Card.Body>
              <ul>
                <li>
                  만든 사람
                  <ul>
                    <li>basic.6395</li>
                  </ul>
                </li>
                <li>
                  도움 주신 분
                  <ul>
                    <li>Maglock.2631</li>
                    <li>SCVwar.3784</li>
                    <li>tarusia.7869</li>
                    <li>panterm.6825</li>
                    <li>myrddin.9251</li>
                  </ul>
                </li>
              </ul>
            </Card.Body>
          </Gw2card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Home;
