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
                <Card style={{marginBottom: 10}}>
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
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={28134} /> {/* Legendary Assassin Stance */}
                    <Skill id={28195} /> {/* Legendary Centaur Stance */}
                    <Skill id={28419} /> {/* Legendary Dwarf Stance */}
                    <Skill id={28494} /> {/* Legendary Demon Stance */}
                    <Skill id={55029} /> {/* Ancient Echo */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={26937} /> {/* Enchanted Daggers */}
                    <Skill id={27372} /> {/* Soothing Stone */}
                    <Skill id={28219} /> {/* Empowering Misery */}
                    <Skill id={28427} /> {/* Ventari's Will */}
                    <Skill id={29148} /> {/* Project Tranquility */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={26557} /> {/* Vengeful Hammers */}
                    <Skill id={26679} /> {/* Forced Engagement */}
                    <Skill id={26821} /> {/* Protective Solace */}
                    <Skill id={26956} /> {/* Release Hammers */}
                    <Skill id={27025} /> {/* Natural Harmony */}
                    <Skill id={27107} /> {/* Impossible Odds */}
                    <Skill id={27322} /> {/* Pain Absorption */}
                    <Skill id={27505} /> {/* Banish Enchantment */}
                    <Skill id={27628} /> {/* Diminish Solace */}
                    <Skill id={27715} /> {/* Purifying Essence */}
                    <Skill id={27917} /> {/* Call to Anguish */}
                    <Skill id={28231} /> {/* Phase Traversal */}
                    <Skill id={28382} /> {/* Relinquish Power */}
                    <Skill id={28516} /> {/* Inspiring Reinforcement */}
                    <Skill id={29082} /> {/* Natural Harmony */}
                    <Skill id={29197} /> {/* Purifying Essence */}
                    <Skill id={29209} /> {/* Riposting Shadows */}
                    <Skill id={29310} /> {/* Protective Solace */}
                    <Skill id={31100} /> {/* Call to Anguish */}
                    <Skill id={50383} /> {/* Inspiring Reinforcement */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={26693} /> {/* Resist the Darkness */}
                    <Skill id={27356} /> {/* Energy Expulsion */}
                    <Skill id={27975} /> {/* Rite of the Great Dwarf */}
                    <Skill id={28287} /> {/* Embrace the Darkness */}
                    <Skill id={28406} /> {/* Jade Winds */}
                    <Skill id={29114} /> {/* Energy Expulsion */}
                    <Skill id={31294} /> {/* Jade Winds */}
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
                    {/* Herald */}
                    <TraitLine id={52} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={28085} /> {/* Legendary Dragon Stance */}
                    <Skill id={29371} /> {/* Facet of Nature */}
                    <Skill id={51667} /> {/* True Nature */}
                    <Skill id={51675} /> {/* True Nature */}
                    <Skill id={51696} /> {/* True Nature */}
                    <Skill id={51713} /> {/* True Nature */}
                    <Skill id={51714} /> {/* True Nature */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={27220} /> {/* Facet of Light */}
                    <Skill id={27228} /> {/* Infuse Light */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={26644} /> {/* Facet of Strength */}
                    <Skill id={27014} /> {/* Facet of Elements */}
                    <Skill id={27080} /> {/* Gaze of Darkness */}
                    <Skill id={27162} /> {/* Elemental Blast */}
                    <Skill id={28113} /> {/* Burst of Strength */}
                    <Skill id={28379} /> {/* Facet of Darkness */}
                    <Skill id={51698} /> {/* Elemental Blast */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={27760} /> {/* Facet of Chaos */}
                    <Skill id={28075} /> {/* Chaotic Release */}
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
                    {/* Renegade */}
                    <TraitLine id={63} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={41294} /> {/* Citadel Bombardment */}
                    <Skill id={41858} /> {/* Legendary Renegade Stance */}
                    <Skill id={42836} /> {/* Citadel Bombardment */}
                    <Skill id={44076} /> {/* Heroic Command */}
                    <Skill id={45537} /> {/* Orders from Above */}
                    <Skill id={46409} /> {/* Legendary Renegade Stance */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={45686} /> {/* Breakrazor's Bastion */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40485} /> {/* Icerazor's Ire */}
                    <Skill id={41220} /> {/* Darkrazor's Daring */}
                    <Skill id={42949} /> {/* Razorclaw's Rage */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={42752} /> {/* Dismiss Lieutenant Soulcleave */}
                    <Skill id={45773} /> {/* Soulcleave's Summit */}
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
                    {/* Vindicator */}
                    <TraitLine id={69} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62729} /> {/* Alliance Tactics */}
                    <Skill id={62749} /> {/* Legendary Alliance */}
                    <Skill id={62757} /> {/* Energy Meld */}
                    <Skill id={62891} /> {/* Legendary Alliance Stance */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62680} /> {/* Selfless Spirit */}
                    <Skill id={62719} /> {/* Selfish Spirit */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62702} /> {/* Battle Dance */}
                    <Skill id={62793} /> {/* Tree Song */}
                    <Skill id={62796} /> {/* Awakening */}
                    <Skill id={62832} /> {/* Nomad's Advance */}
                    <Skill id={62841} /> {/* Scavenger Burst */}
                    <Skill id={62878} /> {/* Reaver's Rage */}
                    <Skill id={62941} /> {/* Tree Song */}
                    <Skill id={62962} /> {/* Scavenger Burst */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62687} /> {/* Urn of Saint Viktor */}
                    <Skill id={62738} /> {/* Drop Urn of Saint Viktor */}
                    <Skill id={62942} /> {/* Spear of Archemorus */}
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
