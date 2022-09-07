import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsWarrior() {
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
                    {/* Strength */}
                    <TraitLine id={4} resettable selectable />
                    {/* Tactics */}
                    <TraitLine id={11} resettable selectable />
                    {/* Defense */}
                    <TraitLine id={22} resettable selectable />
                    {/* Arms */}
                    <TraitLine id={36} resettable selectable />
                    {/* Discipline */}
                    <TraitLine id={51} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={14353} /> {/* Eviscerate */}
                    <Skill id={14367} /> {/* Flurry */}
                    <Skill id={14375} /> {/* Arcing Slice */}
                    <Skill id={14387} /> {/* Earthshaker */}
                    <Skill id={14396} /> {/* Kill Shot */}
                    <Skill id={14414} /> {/* Skull Crack */}
                    <Skill id={14422} /> {/* Eviscerate */}
                    <Skill id={14423} /> {/* Eviscerate */}
                    <Skill id={14424} /> {/* Eviscerate */}
                    <Skill id={14425} /> {/* Skull Crack */}
                    <Skill id={14426} /> {/* Skull Crack */}
                    <Skill id={14427} /> {/* Skull Crack */}
                    <Skill id={14428} /> {/* Flurry */}
                    <Skill id={14429} /> {/* Flurry */}
                    <Skill id={14430} /> {/* Flurry */}
                    <Skill id={14443} /> {/* Whirling Strike */}
                    <Skill id={14469} /> {/* Forceful Shot */}
                    <Skill id={14470} /> {/* Forceful Shot */}
                    <Skill id={14471} /> {/* Forceful Shot */}
                    <Skill id={14473} /> {/* Kill Shot */}
                    <Skill id={14474} /> {/* Kill Shot */}
                    <Skill id={14475} /> {/* Kill Shot */}
                    <Skill id={14506} /> {/* Combustive Shot */}
                    <Skill id={14512} /> {/* Earthshaker */}
                    <Skill id={14513} /> {/* Earthshaker */}
                    <Skill id={14514} /> {/* Earthshaker */}
                    <Skill id={14520} /> {/* Combustive Shot */}
                    <Skill id={14521} /> {/* Combustive Shot */}
                    <Skill id={14522} /> {/* Combustive Shot */}
                    <Skill id={14544} /> {/* Forceful Shot */}
                    <Skill id={14545} /> {/* Arcing Slice */}
                    <Skill id={14546} /> {/* Arcing Slice */}
                    <Skill id={14547} /> {/* Arcing Slice */}
                    <Skill id={14549} /> {/* Whirling Strike */}
                    <Skill id={14550} /> {/* Whirling Strike */}
                    <Skill id={14551} /> {/* Whirling Strike */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={14389} /> {/* Healing Signet */}
                    <Skill id={14401} /> {/* Mending */}
                    <Skill id={14402} /> {/* "To the Limit!" */}
                    <Skill id={21815} /> {/* Defiant Stance */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={14354} /> {/* Throw Bolas */}
                    <Skill id={14368} /> {/* Frenzy */}
                    <Skill id={14372} /> {/* "Shake It Off!" */}
                    <Skill id={14388} /> {/* Stomp */}
                    <Skill id={14392} /> {/* Endure Pain */}
                    <Skill id={14403} /> {/* "For Great Justice!" */}
                    <Skill id={14404} /> {/* Signet of Might */}
                    <Skill id={14405} /> {/* Banner of Strength */}
                    <Skill id={14406} /> {/* Berserker Stance */}
                    <Skill id={14407} /> {/* Banner of Discipline */}
                    <Skill id={14408} /> {/* Banner of Tactics */}
                    <Skill id={14409} /> {/* "Fear Me!" */}
                    <Skill id={14410} /> {/* Signet of Fury */}
                    <Skill id={14412} /> {/* Balanced Stance */}
                    <Skill id={14413} /> {/* Dolyak Signet */}
                    <Skill id={14479} /> {/* Signet of Stamina */}
                    <Skill id={14502} /> {/* Kick */}
                    <Skill id={14516} /> {/* Bull's Charge */}
                    <Skill id={14528} /> {/* Banner of Defense */}
                    <Skill id={14570} /> {/* Banner of Defense */}
                    <Skill id={14571} /> {/* Banner of Discipline */}
                    <Skill id={14572} /> {/* Banner of Strength */}
                    <Skill id={14573} /> {/* Banner of Tactics */}
                    <Skill id={14575} /> {/* "On My Mark!" */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={14355} /> {/* Signet of Rage */}
                    <Skill id={14419} /> {/* Battle Standard */}
                    <Skill id={14483} /> {/* Rampage */}
                    <Skill id={14569} /> {/* Battle Standard */}
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
                    {/* Berserker */}
                    <TraitLine id={18} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29644} /> {/* Gun Flame */}
                    <Skill id={29679} /> {/* Skull Grinder */}
                    <Skill id={29852} /> {/* Arc Divider */}
                    <Skill id={29923} /> {/* Scorched Earth */}
                    <Skill id={30185} /> {/* Berserk */}
                    <Skill id={30435} /> {/* Berserk */}
                    <Skill id={30682} /> {/* Flaming Flurry */}
                    <Skill id={30851} /> {/* Decapitate */}
                    <Skill id={30879} /> {/* Rupturing Smash */}
                    <Skill id={30989} /> {/* Burning Shackles */}
                    <Skill id={31048} /> {/* Wild Whirl */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={30189} /> {/* Blood Reckoning */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29613} /> {/* Sundering Leap */}
                    <Skill id={29941} /> {/* Wild Blow */}
                    <Skill id={30074} /> {/* Shattering Blow */}
                    <Skill id={30258} /> {/* Outrage */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={30343} /> {/* Head Butt */}
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
                    {/* Spellbreaker */}
                    <TraitLine id={61} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={39972} /> {/* Silencer */}
                    <Skill id={40601} /> {/* Earthshaker */}
                    <Skill id={41110} /> {/* Skull Crack */}
                    <Skill id={41283} /> {/* Boon Crusher */}
                    <Skill id={41330} /> {/* Forceful Shot */}
                    <Skill id={41543} /> {/* Wounding Strike */}
                    <Skill id={41746} /> {/* Whirling Strike */}
                    <Skill id={42041} /> {/* Kill Shot */}
                    <Skill id={42494} /> {/* Flurry */}
                    <Skill id={42707} /> {/* Arcing Slice */}
                    <Skill id={42803} /> {/* Combustive Shot */}
                    <Skill id={43488} /> {/* Fleeting Stability */}
                    <Skill id={43566} /> {/* Eviscerate */}
                    <Skill id={44165} /> {/* Full Counter */}
                    <Skill id={44397} /> {/* Dissonance */}
                    <Skill id={45252} /> {/* Breaching Strike */}
                    <Skill id={46044} /> {/* Magehunter Strike */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={41100} /> {/* Natural Healing */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={41919} /> {/* Imminent Threat */}
                    <Skill id={43123} /> {/* Break Enchantments */}
                    <Skill id={43745} /> {/* Sight beyond Sight */}
                    <Skill id={45380} /> {/* Featherfoot Grace */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={45333} /> {/* Winds of Disenchantment */}
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
                    {/* Bladesworn */}
                    <TraitLine id={68} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62745} /> {/* Unsheathe Gunsaber */}
                    <Skill id={62803} /> {/* Dragon Trigger */}
                    <Skill id={62857} /> {/* ((996787)) */}
                    <Skill id={62861} /> {/* Sheathe Gunsaber */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62978} /> {/* Combat Stimulant */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62804} /> {/* Electric Fence */}
                    <Skill id={62960} /> {/* Dragonspike Mine */}
                    <Skill id={62967} /> {/* Flow Stabilizer */}
                    <Skill id={68085} /> {/* Overcharged Cartridges */}
                    <Skill id={68128} /> {/* Detonate Cartridges */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62901} /> {/* Tactical Reload */}
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

export default ProfessionsWarrior;
