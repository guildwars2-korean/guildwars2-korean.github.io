import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsNecromancer() {
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
                    {/* Death Magic */}
                    <TraitLine id={2} resettable selectable />
                    {/* Corruption */}
                    <TraitLine id={14} resettable selectable />
                    {/* Blood Magic */}
                    <TraitLine id={19} resettable selectable />
                    {/* Curses */}
                    <TraitLine id={39} resettable selectable />
                    {/* Soul Reaping */}
                    <TraitLine id={50} resettable selectable />
                    {/* Spite */}
                    <TraitLine id={53} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={10527} /> {/* Well of Blood */}
                    <Skill id={10533} /> {/* Summon Bone Fiend */}
                    <Skill id={10540} /> {/* Putrid Explosion */}
                    <Skill id={10541} /> {/* Summon Bone Minions */}
                    <Skill id={10543} /> {/* Summon Flesh Wurm */}
                    <Skill id={10544} /> {/* Blood Is Power */}
                    <Skill id={10545} /> {/* Well of Corruption */}
                    <Skill id={10546} /> {/* Well of Suffering */}
                    <Skill id={10547} /> {/* Summon Blood Fiend */}
                    <Skill id={10548} /> {/* Consume Conditions */}
                    <Skill id={10562} /> {/* Plague Signet */}
                    <Skill id={10570} /> {/* Rigor Mortis */}
                    <Skill id={10577} /> {/* Taste of Death */}
                    <Skill id={10583} /> {/* Spectral Armor */}
                    <Skill id={10589} /> {/* Summon Shadow Fiend */}
                    <Skill id={10590} /> {/* Haunt */}
                    <Skill id={10600} /> {/* Necrotic Traversal */}
                    <Skill id={10602} /> {/* Corrupt Boon */}
                    <Skill id={10606} /> {/* Epidemic */}
                    <Skill id={10607} /> {/* Well of Darkness */}
                    <Skill id={10608} /> {/* Spectral Ring */}
                    <Skill id={10609} /> {/* Well of Power */}
                    <Skill id={10611} /> {/* Signet of Undeath */}
                    <Skill id={10612} /> {/* Signet of the Locust */}
                    <Skill id={10620} /> {/* Spectral Grasp */}
                    <Skill id={10622} /> {/* Signet of Spite */}
                    <Skill id={10670} /> {/* Well of Blood */}
                    <Skill id={10671} /> {/* Well of Corruption */}
                    <Skill id={10672} /> {/* Well of Darkness */}
                    <Skill id={10673} /> {/* Well of Power */}
                    <Skill id={10674} /> {/* Well of Suffering */}
                    <Skill id={10685} /> {/* Spectral Walk */}
                    <Skill id={10687} /> {/* Spectral Recall */}
                    <Skill id={10689} /> {/* Corrosive Poison Cloud */}
                    <Skill id={21762} /> {/* Signet of Vampirism */}
                    <Skill id={24544} /> {/* Signet of Undeath */}
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
                    {/* Reaper */}
                    <TraitLine id={34} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29414} /> {/* "You Are All Weaklings!" */}
                    <Skill id={29666} /> {/* "Nothing Can Save You!" */}
                    <Skill id={30488} /> {/* "Your Soul Is Mine!" */}
                    <Skill id={30670} /> {/* "Suffer!" */}
                    <Skill id={30772} /> {/* "Rise!" */}
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
                    {/* Scourge */}
                    <TraitLine id={60} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40274} /> {/* Trail of Anguish */}
                    <Skill id={41615} /> {/* Serpent Siphon */}
                    <Skill id={42917} /> {/* Sand Swell */}
                    <Skill id={42935} /> {/* Desiccate */}
                    <Skill id={43148} /> {/* Sand Flare */}
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
                    {/* Harbinger */}
                    <TraitLine id={64} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62514} /> {/* Elixir of Bliss */}
                    <Skill id={62530} /> {/* Elixir of Risk */}
                    <Skill id={62646} /> {/* Elixir of Ignorance */}
                    <Skill id={62662} /> {/* Elixir of Anguish */}
                    <Skill id={62667} /> {/* Elixir of Promise */}
                    <Skill id={68075} /> {/* Elixir of Ignorance */}
                    <Skill id={68081} /> {/* Elixir of Promise */}
                    <Skill id={68105} /> {/* Elixir of Risk */}
                    <Skill id={68113} /> {/* Elixir of Anguish */}
                    <Skill id={68132} /> {/* Elixir of Bliss */}
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

export default ProfessionsNecromancer;
