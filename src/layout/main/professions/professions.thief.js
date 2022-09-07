import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsThief() {
  return (
    <>
    <Container>
      <Row style={{marginBottom: 10}}>
        {/* 오리지널 / Original */}
        <Card style={{padding: 0}}>
          <Card.Header>Original</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Shadow Arts */}
                    <TraitLine id={20} resettable selectable />
                    {/* Deadly Arts */}
                    <TraitLine id={28} resettable selectable />
                    {/* Critical Strikes */}
                    <TraitLine id={35} resettable selectable />
                    {/* Trikery */}
                    <TraitLine id={44} resettable selectable />
                    {/* Acrobatics */}
                    <TraitLine id={54} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={13014} /> {/* Steal */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={13021} /> {/* Withdraw */}
                    <Skill id={13027} /> {/* Hide in Shadows */}
                    <Skill id={13050} /> {/* Signet of Malice */}
                    <Skill id={21778} /> {/* Skelk Venom */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={13002} /> {/* Shadowstep */}
                    <Skill id={13020} /> {/* Scorpion Wire */}
                    <Skill id={13026} /> {/* Prepare Thousand Needles */}
                    <Skill id={13028} /> {/* Caltrops */}
                    <Skill id={13035} /> {/* Roll for Initiative */}
                    <Skill id={13037} /> {/* Spider Venom */}
                    <Skill id={13038} /> {/* Prepare Shadow Portal */}
                    <Skill id={13044} /> {/* Blinding Powder */}
                    <Skill id={13046} /> {/* Assassin's Signet */}
                    <Skill id={13055} /> {/* Skale Venom */}
                    <Skill id={13056} /> {/* Prepare Seal Area */}
                    <Skill id={13057} /> {/* Prepare Pitfall */}
                    <Skill id={13060} /> {/* Signet of Shadows */}
                    <Skill id={13062} /> {/* Signet of Agility */}
                    <Skill id={13064} /> {/* Infiltrator's Signet */}
                    <Skill id={13065} /> {/* Smoke Screen */}
                    <Skill id={13066} /> {/* Haste */}
                    <Skill id={13093} /> {/* Devourer Venom */}
                    <Skill id={13096} /> {/* Ice Drake Venom */}
                    <Skill id={13099} /> {/* Seal Area */}
                    <Skill id={13106} /> {/* Shadow Return */}
                    <Skill id={13117} /> {/* Shadow Refuge */}
                    <Skill id={16435} /> {/* Shadow Portal */}
                    <Skill id={45672} /> {/* Shadow Swap */}
                    <Skill id={56880} /> {/* Pitfall */}
                    <Skill id={56898} /> {/* Thousand Needles */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={13082} /> {/* Thieves Guild */}
                    <Skill id={13085} /> {/* Dagger Storm */}
                    <Skill id={13132} /> {/* Basilisk Venom */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row style={{marginBottom: 10}}>
        {/* HoT / Heart of Thorns */}
        <Card style={{padding: 0}}>
          <Card.Header>HoT(Heart Of Thorns)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Daredevil */}
                    <TraitLine id={7} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={55031} /> {/* Swipe */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={30400} /> {/* Channeled Vigor */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={30369} /> {/* Impairing Daggers */}
                    <Skill id={30519} /> {/* Reflexive Strike */}
                    <Skill id={30568} /> {/* Distracting Daggers */}
                    <Skill id={30661} /> {/* Bandit's Defense */}
                    <Skill id={30693} /> {/* Palm Strike */}
                    <Skill id={30868} /> {/* Fist Flurry */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29516} /> {/* Impact Strike */}
                    <Skill id={29639} /> {/* Finishing Blow */}
                    <Skill id={30077} /> {/* Uppercut */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row style={{marginBottom: 10}}>
        {/* PoF / Path of Fire */}
        <Card style={{padding: 0}}>
          <Card.Header>PoF(Path of Fire)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Deadeye */}
                    <TraitLine id={58} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={39960} /> {/* Steal Warmth */}
                    <Skill id={40133} /> {/* Steal Resistance */}
                    <Skill id={40888} /> {/* Steal Precision */}
                    <Skill id={40903} /> {/* Steal Health */}
                    <Skill id={40904} /> {/* Steal Strength */}
                    <Skill id={42863} /> {/* Steal Time */}
                    <Skill id={43373} /> {/* Steal Durability */}
                    <Skill id={43390} /> {/* Deadeye's Mark */}
                    <Skill id={43768} /> {/* Steal Defenses */}
                    <Skill id={44526} /> {/* Steal Mobility */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={45088} /> {/* Malicious Restoration */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={41158} /> {/* Shadow Flare */}
                    <Skill id={41205} /> {/* Binding Shadow */}
                    <Skill id={41372} /> {/* Mercy */}
                    <Skill id={46335} /> {/* Shadow Gust */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={45508} /> {/* Shadow Meld */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row style={{marginBottom: 10}}>
        {/* EoD / End of Dragons */}
        <Card style={{padding: 0}}>
          <Card.Header>EoD(End of Dragons)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Specter */}
                    <TraitLine id={71} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={63067} /> {/* Siphon */}
                    <Skill id={63155} /> {/* Enter Shadow Shroud */}
                    <Skill id={63251} /> {/* Exit Shadow Shroud */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={63292} /> {/* Well of Gloom */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={63230} /> {/* Well of Silence */}
                    <Skill id={63276} /> {/* Well of Sorrow */}
                    <Skill id={63294} /> {/* Well of Tears */}
                    <Skill id={63323} /> {/* Well of Bounty */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={63275} /> {/* Shadowfall */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
    </>
  );
}

export default ProfessionsThief;
