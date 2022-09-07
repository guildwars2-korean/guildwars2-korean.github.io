import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css';
import 'discretize-monorepo-root/typeface-menomonia';

import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsElementalist() {
  return (
    <>
    <Container>
      <Row style={{marginBottom: 10}}>
        {/* 오리지널 / Original */}
        <Card style={{padding: 0}}>
          <Card.Header>Original</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="6" style={{marginBottom: 10}}>
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Water */}
                    <TraitLine id={17} resettable selectable />
                    {/* Earth */}
                    <TraitLine id={26} resettable selectable />
                    {/* Fire */}
                    <TraitLine id={31} resettable selectable />
                    {/* Arcane */}
                    <TraitLine id={37} resettable selectable />
                    {/* Air */}
                    <TraitLine id={41} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={5492} /> {/* Fire Attunement */}
                    <Skill id={5493} /> {/* Water Attunement */}
                    <Skill id={5494} /> {/* Air Attunement */}
                    <Skill id={5495} /> {/* Earth Attunement */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={21656} /> {/* Arcane Brilliance */}
                    <Skill id={34609} /> {/* Glyph of Elemental Harmony */}
                    <Skill id={34651} /> {/* Glyph of Elemental Harmony */}
                    <Skill id={34724} /> {/* Glyph of Elemental Harmony */}
                    <Skill id={34743} /> {/* Glyph of Elemental Harmony */}
                    <Skill id={5503} /> {/* Signet of Restoration */}
                    <Skill id={5507} /> {/* Ether Renewal */}
                    <Skill id={5569} /> {/* Glyph of Elemental Harmony */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={15795} /> {/* Mist Form */}
                    <Skill id={22572} /> {/* Arcane Wave */}
                    <Skill id={24407} /> {/* Renewal of Fire */}
                    <Skill id={24409} /> {/* Renewal of Air */}
                    <Skill id={24410} /> {/* Renewal of Water */}
                    <Skill id={24411} /> {/* Renewal of Earth */}
                    <Skill id={25486} /> {/* Glyph of Lesser Elementals */}
                    <Skill id={25487} /> {/* Glyph of Lesser Elementals */}
                    <Skill id={25495} /> {/* Glyph of Lesser Elementals */}
                    <Skill id={25497} /> {/* Glyph of Lesser Elementals */}
                    <Skill id={34637} /> {/* Glyph of Elemental Power */}
                    <Skill id={34714} /> {/* Glyph of Elemental Power */}
                    <Skill id={34736} /> {/* Glyph of Elemental Power */}
                    <Skill id={34772} /> {/* Glyph of Elemental Power */}
                    <Skill id={49056} /> {/* Signet of Water */}
                    <Skill id={50447} /> {/* Lightning Flash */}
                    <Skill id={5502} /> {/* Glyph of Lesser Elementals */}
                    <Skill id={5506} /> {/* Glyph of Elemental Power */}
                    <Skill id={5535} /> {/* Cleansing Fire */}
                    <Skill id={5536} /> {/* Lightning Flash */}
                    <Skill id={5539} /> {/* Arcane Blast */}
                    <Skill id={5540} /> {/* Conjure Flame Axe */}
                    <Skill id={5542} /> {/* Signet of Fire */}
                    <Skill id={5546} /> {/* Conjure Earth Shield */}
                    <Skill id={5554} /> {/* Mist Form */}
                    <Skill id={5567} /> {/* Conjure Frost Bow */}
                    <Skill id={5570} /> {/* Signet of Water */}
                    <Skill id={5571} /> {/* Signet of Earth */}
                    <Skill id={5572} /> {/* Signet of Air */}
                    <Skill id={5573} /> {/* Glyph of Renewal */}
                    <Skill id={5624} /> {/* Conjure Lightning Hammer */}
                    <Skill id={5635} /> {/* Arcane Power */}
                    <Skill id={5638} /> {/* Arcane Wave */}
                    <Skill id={5639} /> {/* Armor of Earth */}
                    <Skill id={5641} /> {/* Arcane Shield */}
                    <Skill id={5734} /> {/* Glyph of Storms */}
                    <Skill id={5735} /> {/* Ice Storm */}
                    <Skill id={5736} /> {/* Firestorm */}
                    <Skill id={5737} /> {/* Lightning Storm */}
                    <Skill id={5738} /> {/* Sandstorm */}
                    <Skill id={5760} /> {/* Renewal of Air */}
                    <Skill id={5761} /> {/* Renewal of Earth */}
                    <Skill id={5762} /> {/* Renewal of Fire */}
                    <Skill id={5763} /> {/* Renewal of Water */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={25480} /> {/* Shocking Bolt */}
                    <Skill id={25488} /> {/* Glyph of Elementals */}
                    <Skill id={25489} /> {/* Glyph of Elementals */}
                    <Skill id={25490} /> {/* Glyph of Elementals */}
                    <Skill id={25491} /> {/* Glyph of Elementals */}
                    <Skill id={25492} /> {/* Crashing Waves */}
                    <Skill id={25498} /> {/* Stomp */}
                    <Skill id={25499} /> {/* Flame Barrage */}
                    <Skill id={44918} /> {/* Lesser Fiery Eruption */}
                    <Skill id={5516} /> {/* Conjure Fiery Greatsword */}
                    <Skill id={5534} /> {/* Tornado */}
                    <Skill id={5602} /> {/* Whirlpool */}
                    <Skill id={5666} /> {/* Glyph of Elementals */}
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
                    {/* Tempest */}
                    <TraitLine id={48} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29415} /> {/* Overload Water */}
                    <Skill id={29618} /> {/* Overload Earth */}
                    <Skill id={29706} /> {/* Overload Fire */}
                    <Skill id={29719} /> {/* Overload Air */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29535} /> {/* "Wash the Pain Away!" */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29948} /> {/* "Flash-Freeze!" */}
                    <Skill id={30047} /> {/* "Eye of the Storm!" */}
                    <Skill id={30432} /> {/* "Aftershock!" */}
                    <Skill id={30662} /> {/* "Feel the Burn!" */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29968} /> {/* "Rebound!" */}
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
                    {/* Weaver */}
                    <TraitLine id={56} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={44239} /> {/* Aquatic Stance */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40183} /> {/* Primordial Stance */}
                    <Skill id={44612} /> {/* Unravel */}
                    <Skill id={44926} /> {/* Stone Resonance */}
                    <Skill id={45746} /> {/* Twist of Fate */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={43638} /> {/* Weave Self */}
                    <Skill id={44637} /> {/* Tailored Victory */}
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
                    {/* Catalyst */}
                    <TraitLine id={67} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62723} /> {/* Deploy Jade Sphere */}
                    <Skill id={62813} /> {/* Deploy Jade Sphere */}
                    <Skill id={62837} /> {/* Deploy Jade Sphere */}
                    <Skill id={62940} /> {/* Deploy Jade Sphere */}
                    <Skill id={63396} /> {/* Deploy Jade Sphere */}
                    <Skill id={63416} /> {/* Deploy Jade Sphere */}
                    <Skill id={63439} /> {/* Deploy Jade Sphere */}
                    <Skill id={63454} /> {/* Deploy Jade Sphere */}
                    <Skill id={63458} /> {/* Deploy Jade Sphere */}
                    <Skill id={63459} /> {/* Deploy Jade Sphere */}
                    <Skill id={63461} /> {/* Deploy Jade Sphere */}
                    <Skill id={63472} /> {/* Deploy Jade Sphere */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62827} /> {/* Soothing Water */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62698} /> {/* Shattering Ice */}
                    <Skill id={62826} /> {/* Fortified Earth */}
                    <Skill id={62965} /> {/* Relentless Fire */}
                    <Skill id={62982} /> {/* Invigorating Air */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62725} /> {/* Elemental Celerity */}
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

export default ProfessionsElementalist;
