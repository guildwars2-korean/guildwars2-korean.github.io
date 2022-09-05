import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsRanger() {
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
                    {/* Marksmanship */}
                    <TraitLine id={8} resettable selectable />
                    {/* Nature Magic */}
                    <TraitLine id={25} resettable selectable />
                    {/* Skirmishing */}
                    <TraitLine id={30} resettable selectable />
                    {/* Beastmastery */}
                    <TraitLine id={32} resettable selectable />
                    {/* Wildness Survival */}
                    <TraitLine id={33} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={12476} /> {/* Spike Trap */}
                    <Skill id={12483} /> {/* Troll Unguent */}
                    <Skill id={12489} /> {/* Healing Spring */}
                    <Skill id={12491} /> {/* Signet of the Wild */}
                    <Skill id={12492} /> {/* Frost Trap */}
                    <Skill id={12493} /> {/* Storm Spirit */}
                    <Skill id={12494} /> {/* Lightning Reflexes */}
                    <Skill id={12495} /> {/* Stone Spirit */}
                    <Skill id={12496} /> {/* Viper's Nest */}
                    <Skill id={12497} /> {/* Frost Spirit */}
                    <Skill id={12498} /> {/* Sun Spirit */}
                    <Skill id={12499} /> {/* Flame Trap */}
                    <Skill id={12500} /> {/* Signet of Stone */}
                    <Skill id={12501} /> {/* Muddy Terrain */}
                    <Skill id={12502} /> {/* Signet of Renewal */}
                    <Skill id={12533} /> {/* Viper's Nest */}
                    <Skill id={12535} /> {/* Frost Trap */}
                    <Skill id={12537} /> {/* Sharpening Stone */}
                    <Skill id={12542} /> {/* Signet of the Hunt */}
                    <Skill id={12550} /> {/* Quickening Zephyr */}
                    <Skill id={12570} /> {/* Flame Trap */}
                    <Skill id={12592} /> {/* Solar Flare */}
                    <Skill id={12593} /> {/* Cold Snap */}
                    <Skill id={12594} /> {/* Call Lightning */}
                    <Skill id={12595} /> {/* Quicksand */}
                    <Skill id={12631} /> {/* "Protect Me!" */}
                    <Skill id={12632} /> {/* "Guard!" */}
                    <Skill id={12633} /> {/* "Sic 'Em!" */}
                    <Skill id={21773} /> {/* Water Spirit */}
                    <Skill id={21775} /> {/* Aqua Surge */}
                    <Skill id={31914} /> {/* "We Heal As One!" */}
                    <Skill id={34309} /> {/* "Search and Rescue!" */}
                    <Skill id={51395} /> {/* Spike Trap */}
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
                    {/* Druid */}
                    <TraitLine id={5} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29558} /> {/* Glyph of the Tides */}
                    <Skill id={30238} /> {/* Glyph of the Tides */}
                    <Skill id={30448} /> {/* Glyph of the Tides */}
                    <Skill id={31322} /> {/* Glyph of Alignment */}
                    <Skill id={31348} /> {/* Glyph of Alignment */}
                    <Skill id={31401} /> {/* Glyph of Equality */}
                    <Skill id={31407} /> {/* Glyph of Rejuvenation */}
                    <Skill id={31582} /> {/* Glyph of Unity */}
                    <Skill id={31607} /> {/* Glyph of Alignment */}
                    <Skill id={31658} /> {/* Glyph of Equality */}
                    <Skill id={31740} /> {/* Glyph of Unity */}
                    <Skill id={31746} /> {/* Glyph of Equality */}
                    <Skill id={31819} /> {/* Glyph of Rejuvenation */}
                    <Skill id={31867} /> {/* Glyph of Rejuvenation */}
                    <Skill id={31888} /> {/* Glyph of Unity */}
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
                    {/* Soulbeast */}
                    <TraitLine id={55} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40498} /> {/* Vulture Stance */}
                    <Skill id={44948} /> {/* Bear Stance */}
                    <Skill id={45142} /> {/* Griffon Stance */}
                    <Skill id={45789} /> {/* Dolyak Stance */}
                    <Skill id={45970} /> {/* Moa Stance */}
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
                    {/* Untamed */}
                    <TraitLine id={72} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6">
                {/* 스킬 / Skills */}
                <Card>
                  <Card.Header>스킬</Card.Header>
                  <Card.Body>
                    <Skill id={63130} /> {/* Nature's Binding */}
                    <Skill id={63157} /> {/* Exploding Spores */}
                    <Skill id={63195} /> {/* Unnatural Traversal */}
                    <Skill id={63256} /> {/* Mutate Conditions */}
                    <Skill id={63319} /> {/* Perilous Gift */}
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

export default ProfessionsRanger;
