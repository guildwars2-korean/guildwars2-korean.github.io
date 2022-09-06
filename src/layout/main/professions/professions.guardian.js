import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsGuardian() {
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
                <Card>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Valor */}
                    <TraitLine id={13} resettable selectable />
                    {/* radiance */}
                    <TraitLine id={16} resettable selectable />
                    {/* Zeal */}
                    <TraitLine id={42} resettable selectable />
                    {/* Virtues */}
                    <TraitLine id={46} resettable selectable />
                    {/* Honor */}
                    <TraitLine id={49} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={21664} /> {/* Litany of Wrath */}
                    <Skill id={24414} /> {/* Signet of Mercy */}
                    <Skill id={31159} /> {/* Purging Flames */}
                    <Skill id={31295} /> {/* Sanctuary */}
                    <Skill id={41571} /> {/* Shield of the Avenger */}
                    <Skill id={43565} /> {/* Bow of Truth */}
                    <Skill id={44846} /> {/* Sword of Justice */}
                    <Skill id={46170} /> {/* Hammer of Wisdom */}
                    <Skill id={46600} /> {/* Bow of Truth */}
                    <Skill id={46750} /> {/* Bow of Truth */}
                    <Skill id={55019} /> {/* Sword of Justice */}
                    <Skill id={55027} /> {/* Sword of Justice */}
                    <Skill id={55035} /> {/* Shield of the Avenger */}
                    <Skill id={55037} /> {/* Shield of the Avenger */}
                    <Skill id={55040} /> {/* Hammer of Wisdom */}
                    <Skill id={55053} /> {/* Hammer of Wisdom */}
                    <Skill id={9083} /> {/* "Receive the Light!" */}
                    <Skill id={9084} /> {/* "Advance!" */}
                    <Skill id={9085} /> {/* "Save Yourselves!" */}
                    <Skill id={9093} /> {/* Bane Signet */}
                    <Skill id={9102} /> {/* Shelter */}
                    <Skill id={9125} /> {/* Hammer of Wisdom */}
                    <Skill id={9128} /> {/* Sanctuary */}
                    <Skill id={9150} /> {/* Signet of Judgment */}
                    <Skill id={9151} /> {/* Signet of Wrath */}
                    <Skill id={9152} /> {/* "Hold the Line!" */}
                    <Skill id={9153} /> {/* "Stand Your Ground!" */}
                    <Skill id={9158} /> {/* Signet of Resolve */}
                    <Skill id={9163} /> {/* Signet of Mercy */}
                    <Skill id={9168} /> {/* Sword of Justice */}
                    <Skill id={9175} /> {/* Bow of Truth */}
                    <Skill id={9182} /> {/* Shield of the Avenger */}
                    <Skill id={9187} /> {/* Purging Flames */}
                    <Skill id={9245} /> {/* Smite Condition */}
                    <Skill id={9246} /> {/* Merciful Intervention */}
                    <Skill id={9247} /> {/* Judge's Intervention */}
                    <Skill id={9248} /> {/* Contemplation of Purity */}
                    <Skill id={9251} /> {/* Wall of Reflection */}
                    <Skill id={9253} /> {/* Hallowed Ground */}
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
                <Card>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Dragonhunter */}
                    <TraitLine id={27} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29786} /> {/* Test of Faith */}
                    <Skill id={30025} /> {/* Purification */}
                    <Skill id={30364} /> {/* Procession of Blades */}
                    <Skill id={30553} /> {/* Fragments of Faith */}
                    <Skill id={30871} /> {/* Light's Judgment */}
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
                <Card>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Firebrand */}
                    <TraitLine id={62} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40915} /> {/* Mantra of Potence */}
                    <Skill id={41714} /> {/* Mantra of Solace */}
                    <Skill id={44080} /> {/* Mantra of Truth */}
                    <Skill id={45460} /> {/* Mantra of Lore */}
                    <Skill id={46148} /> {/* Mantra of Flame */}
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
                <Card>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Willbender */}
                    <TraitLine id={65} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62521} /> {/* Roiling Light */}
                    <Skill id={62549} /> {/* Heel Crack */}
                    <Skill id={62565} /> {/* Whirling Light */}
                    <Skill id={62608} /> {/* Flash Combo */}
                    <Skill id={62622} /> {/* Reversal of Fortune */}
                    <Skill id={62669} /> {/* Repose */}
                    <Skill id={62676} /> {/* Quick Retribution */}
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

export default ProfessionsGuardian;
