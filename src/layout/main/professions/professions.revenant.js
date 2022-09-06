import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsRevenant() {
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
                    {/* Invocation */}
                    <TraitLine id={3} resettable selectable />
                    {/* Retribution */}
                    <TraitLine id={9} resettable selectable />
                    {/* Salvation */}
                    <TraitLine id={12} resettable selectable />
                    {/* Devastation */}
                    <TraitLine id={15} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={26557} /> {/* Vengeful Hammers */}
                    <Skill id={26679} /> {/* Forced Engagement */}
                    <Skill id={26821} /> {/* Protective Solace */}
                    <Skill id={26937} /> {/* Enchanted Daggers */}
                    <Skill id={26956} /> {/* Release Hammers */}
                    <Skill id={27025} /> {/* Natural Harmony */}
                    <Skill id={27107} /> {/* Impossible Odds */}
                    <Skill id={27322} /> {/* Pain Absorption */}
                    <Skill id={27372} /> {/* Soothing Stone */}
                    <Skill id={27505} /> {/* Banish Enchantment */}
                    <Skill id={27628} /> {/* Diminish Solace */}
                    <Skill id={27715} /> {/* Purifying Essence */}
                    <Skill id={27917} /> {/* Call to Anguish */}
                    <Skill id={28219} /> {/* Empowering Misery */}
                    <Skill id={28231} /> {/* Phase Traversal */}
                    <Skill id={28382} /> {/* Relinquish Power */}
                    <Skill id={28427} /> {/* Ventari's Will */}
                    <Skill id={28516} /> {/* Inspiring Reinforcement */}
                    <Skill id={29082} /> {/* Natural Harmony */}
                    <Skill id={29148} /> {/* Project Tranquility */}
                    <Skill id={29197} /> {/* Purifying Essence */}
                    <Skill id={29209} /> {/* Riposting Shadows */}
                    <Skill id={29310} /> {/* Protective Solace */}
                    <Skill id={31100} /> {/* Call to Anguish */}
                    <Skill id={50383} /> {/* Inspiring Reinforcement */}
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
                    {/* Herald */}
                    <TraitLine id={52} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={26644} /> {/* Facet of Strength */}
                    <Skill id={27014} /> {/* Facet of Elements */}
                    <Skill id={27080} /> {/* Gaze of Darkness */}
                    <Skill id={27162} /> {/* Elemental Blast */}
                    <Skill id={27220} /> {/* Facet of Light */}
                    <Skill id={27228} /> {/* Infuse Light */}
                    <Skill id={28113} /> {/* Burst of Strength */}
                    <Skill id={28379} /> {/* Facet of Darkness */}
                    <Skill id={51698} /> {/* Elemental Blast */}
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
                    {/* Renegade */}
                    <TraitLine id={63} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40485} /> {/* Icerazor's Ire */}
                    <Skill id={41220} /> {/* Darkrazor's Daring */}
                    <Skill id={42949} /> {/* Razorclaw's Rage */}
                    <Skill id={45686} /> {/* Breakrazor's Bastion */}
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
                    {/* Vindicator */}
                    <TraitLine id={69} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62680} /> {/* Selfless Spirit */}
                    <Skill id={62702} /> {/* Battle Dance */}
                    <Skill id={62719} /> {/* Selfish Spirit */}
                    <Skill id={62793} /> {/* Tree Song */}
                    <Skill id={62796} /> {/* Awakening */}
                    <Skill id={62832} /> {/* Nomad's Advance */}
                    <Skill id={62841} /> {/* Scavenger Burst */}
                    <Skill id={62878} /> {/* Reaver's Rage */}
                    <Skill id={62941} /> {/* Tree Song */}
                    <Skill id={62962} /> {/* Scavenger Burst */}
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

export default ProfessionsRevenant;
