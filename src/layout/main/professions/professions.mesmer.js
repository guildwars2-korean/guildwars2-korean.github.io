import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsMesmer() {
  return (
    <>
    <Container>
      <Row style={{paddingTop: 20}}>
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
                    {/* Dueling */}
                    <TraitLine id={1} resettable selectable />
                    {/* Domination */}
                    <TraitLine id={10} resettable selectable />
                    {/* Inspiration */}
                    <TraitLine id={23} resettable selectable />
                    {/* Illusions */}
                    <TraitLine id={24} resettable selectable />
                    {/* Chaos */}
                    <TraitLine id={45} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={10176} /> {/* Ether Feast */}
                    <Skill id={10177} /> {/* Mirror */}
                    <Skill id={10185} /> {/* Arcane Thievery */}
                    <Skill id={10187} /> {/* Veil */}
                    <Skill id={10197} /> {/* Portal Entre */}
                    <Skill id={10199} /> {/* Portal Exeunt */}
                    <Skill id={10200} /> {/* Blink */}
                    <Skill id={10201} /> {/* Decoy */}
                    <Skill id={10202} /> {/* Mirror Images */}
                    <Skill id={10203} /> {/* Null Field */}
                    <Skill id={10204} /> {/* Mantra of Distraction */}
                    <Skill id={10207} /> {/* Mantra of Resolve */}
                    <Skill id={10211} /> {/* Mantra of Pain */}
                    <Skill id={10213} /> {/* Mantra of Recovery */}
                    <Skill id={10232} /> {/* Signet of Domination */}
                    <Skill id={10234} /> {/* Signet of Midnight */}
                    <Skill id={10236} /> {/* Signet of Inspiration */}
                    <Skill id={10237} /> {/* Mantra of Concentration */}
                    <Skill id={10244} /> {/* Illusion of Life */}
                    <Skill id={10247} /> {/* Signet of Illusions */}
                    <Skill id={10267} /> {/* Phantasmal Disenchanter */}
                    <Skill id={10302} /> {/* Feedback */}
                    <Skill id={10341} /> {/* Phantasmal Defender */}
                    <Skill id={21750} /> {/* Signet of the Ether */}
                    <Skill id={25541} /> {/* Illusion of Life */}
                    <Skill id={29578} /> {/* Mimic */}
                    <Skill id={34326} /> {/* Feedback */}
                    <Skill id={50414} /> {/* Veil */}
                    <Skill id={50440} /> {/* Null Field */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row style={{paddingTop: 20}}>
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
                    {/* Chronomancer */}
                    <TraitLine id={40} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29526} /> {/* Well of Precognition */}
                    <Skill id={29856} /> {/* Well of Senility */}
                    <Skill id={30305} /> {/* Well of Eternity */}
                    <Skill id={30525} /> {/* Well of Calamity */}
                    <Skill id={30814} /> {/* Well of Action */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row style={{paddingTop: 20}}>
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
                    {/* Mirage */}
                    <TraitLine id={59} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40200} /> {/* False Oasis */}
                    <Skill id={41065} /> {/* Crystal Sands */}
                    <Skill id={42851} /> {/* Mirage Advance */}
                    <Skill id={43064} /> {/* Sand through Glass */}
                    <Skill id={44677} /> {/* Mirage Mirror */}
                    <Skill id={45046} /> {/* Illusionary Ambush */}
                    <Skill id={45666} /> {/* Mirage Retreat */}
                    <Skill id={50419} /> {/* Mirage Advance */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row style={{paddingTop: 20}}>
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
                    {/* Virtuoso */}
                    <TraitLine id={66} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={35637} /> {/* Sword of Decimation */}
                    <Skill id={43343} /> {/* Blade Renewal */}
                    <Skill id={45425} /> {/* Rain of Swords */}
                    <Skill id={62522} /> {/* Twin Blade Restoration */}
                    <Skill id={62553} /> {/* Rain of Swords */}
                    <Skill id={62573} /> {/* Psychic Force */}
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

export default ProfessionsMesmer;
