import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css';
import 'discretize-monorepo-root/typeface-menomonia';

import Gw2card from '../../../components/gw2card';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Attribute, Boon, Condition, ControlEffect, CommonEffect } from 'discretize-monorepo-root/gw2-ui';

function AttributesAndBoonsAndConditions() {
  return (
    <>
    <Container>
      <Row xl="12">
        <Col xl="3">
          <Gw2card header="속성" defaultActiveKey="0">
            <Card.Body>
              <Attribute name="Power" text="파워"/><br></br>
              <Attribute name="Precision" /><br></br>
              <Attribute name="Toughness" /><br></br>
              <Attribute name="Vitality" /><br></br>
              <Attribute name="Concentration" /><br></br>
              <Attribute name="Condition Damage" /><br></br>
              <Attribute name="Expertise" /><br></br>
              <Attribute name="Ferocity" /><br></br>
              <Attribute name="Healing Power" /><br></br>
              <Attribute name="Armor" /><br></br>
              <Attribute name="Boon Duration" /><br></br>
              <Attribute name="Critical Chance" /><br></br>
              <Attribute name="Critical Damage" /><br></br>
              <Attribute name="Condition Duration" /><br></br>
              <Attribute name="Health" /><br></br>
              <Attribute name="Agony Resistance" /><br></br>
              <Attribute name="Gold Find" /><br></br>
              <Attribute name="Karma Gain" /><br></br>
              <Attribute name="Magic Find" /><br></br>
              <Attribute name="XP Gain" /><br></br>
            </Card.Body>
          </Gw2card>
        </Col>
        <Col xl="2">
          <Gw2card header="분" defaultActiveKey="0">
            <Card.Body>
              <Boon name="Aegis" /><br></br>
              <Boon name="Alacrity" /><br></br>
              <Boon name="Fury" /><br></br>
              <Boon name="Might" /><br></br>
              <Boon name="Protection" /><br></br>
              <Boon name="Quickness" /><br></br>
              <Boon name="Regeneration" /><br></br>
              <Boon name="Resistance" /><br></br>
              <Boon name="Resolution" /><br></br>
              <Boon name="Stability" /><br></br>
              <Boon name="Swiftness" /><br></br>
              <Boon name="Vigor" /><br></br>
            </Card.Body>
          </Gw2card>
        </Col>
        <Col xl="2">
          <Gw2card header="컨디션" defaultActiveKey="0">
            <Card.Body>
              <Condition name="Bleeding" /><br></br>
              <Condition name="Blinded" /><br></br>
              <Condition name="Burning" /><br></br>
              <Condition name="Chilled" /><br></br>
              <Condition name="Confusion" /><br></br>
              <Condition name="Crippled" /><br></br>
              <Condition name="Fear" /><br></br>
              <Condition name="Immobile" /><br></br>
              <Condition name="Poisoned" /><br></br>
              <Condition name="Slow" /><br></br>
              <Condition name="Taunt" /><br></br>
              <Condition name="Torment" /><br></br>
              <Condition name="Vulnerability" /><br></br>
              <Condition name="Weakness" /><br></br>
            </Card.Body>
          </Gw2card>
        </Col>
        <Col xl="2">
          <Gw2card header="CC" defaultActiveKey="0">
            <ControlEffect name="Daze" /><br></br>
            <ControlEffect name="Float" /><br></br>
            <ControlEffect name="Knockback" /><br></br>
            <ControlEffect name="Knockdown" /><br></br>
            <ControlEffect name="Launch" /><br></br>
            <ControlEffect name="Pull" /><br></br>
            <ControlEffect name="Sink" /><br></br>
            <ControlEffect name="Stun" /><br></br>
          </Gw2card>
        </Col>
        <Col xl="3">
          <Gw2card header="일반 효과" defaultActiveKey="0">
            <CommonEffect name="Agony" /><br></br>
            <CommonEffect name="Barrier" /><br></br>
            <CommonEffect name="Blight" /><br></br>
            <CommonEffect name="Exposed" /><br></br>
            <CommonEffect name="Invulnerability" /><br></br>
            <CommonEffect name="Revealed" /><br></br>
            <CommonEffect name="Rigorous Certainty" /><br></br>
            <CommonEffect name="Stealth" /><br></br>
            <CommonEffect name="Stun Break" /><br></br>
            <CommonEffect name="Superspeed" /><br></br>
            <CommonEffect name="Unblockable" /><br></br>
          </Gw2card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default AttributesAndBoonsAndConditions;
