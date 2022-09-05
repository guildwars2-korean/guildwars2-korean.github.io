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
      <Row>
        {/* 오리지널 / Original */}
        <Card>
          <Card.Header>Original</Card.Header>
          <Card.Body>
            <Row>
              <Col xs="6">
                {/* 특성 / Traits */}
                <Card>
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
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={14354} /> {/* Throw Bolas */}
                    <Skill id={14368} /> {/* Frenzy */}
                    <Skill id={14372} /> {/* "Shake It Off!" */}
                    <Skill id={14388} /> {/* Stomp */}
                    <Skill id={14389} /> {/* Healing Signet */}
                    <Skill id={14392} /> {/* Endure Pain */}
                    <Skill id={14401} /> {/* Mending */}
                    <Skill id={14402} /> {/* "To the Limit!" */}
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
                    <Skill id={21815} /> {/* Defiant Stance */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        {/* HoT / Heart of Thorns */}
        <Card>
          <Card.Header>HoT(Heart Of Thorns)</Card.Header>
          <Card.Body>
            <Row>
              <Col xs="6">
                {/* 특성 / Traits */}
                <Card>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Berserker */}
                    <TraitLine id={18} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29613} /> {/* Sundering Leap */}
                    <Skill id={29941} /> {/* Wild Blow */}
                    <Skill id={30074} /> {/* Shattering Blow */}
                    <Skill id={30189} /> {/* Blood Reckoning */}
                    <Skill id={30258} /> {/* Outrage */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        {/* PoF / Path of Fire */}
        <Card>
          <Card.Header>PoF(Path of Fire)</Card.Header>
          <Card.Body>
            <Row>
              <Col xs="6">
                {/* 특성 / Traits */}
                <Card>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Spellbreaker */}
                    <TraitLine id={61} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={41100} /> {/* Natural Healing */}
                    <Skill id={41919} /> {/* Imminent Threat */}
                    <Skill id={43123} /> {/* Break Enchantments */}
                    <Skill id={43745} /> {/* Sight beyond Sight */}
                    <Skill id={45380} /> {/* Featherfoot Grace */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        {/* EoD / End of Dragons */}
        <Card>
          <Card.Header>EoD(End of Dragons)</Card.Header>
          <Card.Body>
            <Row>
              <Col xs="6">
                {/* 특성 / Traits */}
                <Card>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Bladesworn */}
                    <TraitLine id={68} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62804} /> {/* Electric Fence */}
                    <Skill id={62960} /> {/* Dragonspike Mine */}
                    <Skill id={62967} /> {/* Flow Stabilizer */}
                    <Skill id={62978} /> {/* Combat Stimulant */}
                    <Skill id={68085} /> {/* Overcharged Cartridges */}
                    <Skill id={68128} /> {/* Detonate Cartridges */}
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
