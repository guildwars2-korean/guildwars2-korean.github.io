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
      <Row style={{marginBottom: 10}}>
        {/* 오리지널 / Original */}
        <Card style={{padding: 0}}>
          <Card.Header>레인저 : Original</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
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
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40729} /> {/* Worldly Impact */}
                    <Skill id={44626} /> {/* Spiritual Reprieve */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={12483} /> {/* Troll Unguent */}
                    <Skill id={12489} /> {/* Healing Spring */}
                    <Skill id={21773} /> {/* Water Spirit */}
                    <Skill id={21775} /> {/* Aqua Surge */}
                    <Skill id={31914} /> {/* "We Heal As One!" */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={12476} /> {/* Spike Trap */}
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
                    <Skill id={34309} /> {/* "Search and Rescue!" */}
                    <Skill id={51395} /> {/* Spike Trap */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={12516} /> {/* "Strength of the Pack!" */}
                    <Skill id={12569} /> {/* Spirit of Nature */}
                    <Skill id={12580} /> {/* Entangle */}
                    <Skill id={12596} /> {/* Nature's Renewal */}
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
          <Card.Header>드루이드 : HoT(Heart Of Thorns)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Druid */}
                    <TraitLine id={5} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={31411} /> {/* Release Celestial Avatar */}
                    <Skill id={31869} /> {/* Celestial Avatar */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={31407} /> {/* Glyph of Rejuvenation */}
                    <Skill id={31819} /> {/* Glyph of Rejuvenation */}
                    <Skill id={31867} /> {/* Glyph of Rejuvenation */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29558} /> {/* Glyph of the Tides */}
                    <Skill id={30238} /> {/* Glyph of the Tides */}
                    <Skill id={30448} /> {/* Glyph of the Tides */}
                    <Skill id={31322} /> {/* Glyph of Alignment */}
                    <Skill id={31348} /> {/* Glyph of Alignment */}
                    <Skill id={31401} /> {/* Glyph of Equality */}
                    <Skill id={31582} /> {/* Glyph of Unity */}
                    <Skill id={31607} /> {/* Glyph of Alignment */}
                    <Skill id={31658} /> {/* Glyph of Equality */}
                    <Skill id={31740} /> {/* Glyph of Unity */}
                    <Skill id={31746} /> {/* Glyph of Equality */}
                    <Skill id={31888} /> {/* Glyph of Unity */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={31677} /> {/* Glyph of the Stars */}
                    <Skill id={55024} /> {/* Glyph of the Stars */}
                    <Skill id={55046} /> {/* Glyph of the Stars */}
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
          <Card.Header>소울비스트 : PoF(Path of Fire)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Soulbeast */}
                    <TraitLine id={55} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40111} /> {/* Narcotic Spores */}
                    <Skill id={40255} /> {/* Smoke Assault */}
                    <Skill id={40588} /> {/* Primal Cry */}
                    <Skill id={40625} /> {/* Bite */}
                    <Skill id={41206} /> {/* Rain of Spikes */}
                    <Skill id={41406} /> {/* Maul */}
                    <Skill id={41461} /> {/* Devourer Retreat */}
                    <Skill id={41524} /> {/* Kick */}
                    <Skill id={41537} /> {/* Chomp */}
                    <Skill id={41575} /> {/* Tail Swipe */}
                    <Skill id={41837} /> {/* Dark Water */}
                    <Skill id={41908} /> {/* Wing Buffet */}
                    <Skill id={42042} /> {/* Quickening Screech */}
                    <Skill id={42717} /> {/* Protection */}
                    <Skill id={42797} /> {/* Charging Bite */}
                    <Skill id={42809} /> {/* Worldly Impact */}
                    <Skill id={42894} /> {/* Brutal Charge */}
                    <Skill id={42907} /> {/* Takedown */}
                    <Skill id={42944} /> {/* Beastmode */}
                    <Skill id={43014} /> {/* Leave Beastmode */}
                    <Skill id={43060} /> {/* Defy Pain */}
                    <Skill id={43068} /> {/* Tail Lash */}
                    <Skill id={43136} /> {/* Bite */}
                    <Skill id={43186} /> {/* Healing Cloud */}
                    <Skill id={43375} /> {/* Prelude Lash */}
                    <Skill id={43548} /> {/* Frenzied Attack */}
                    <Skill id={43671} /> {/* Poison Gas */}
                    <Skill id={43701} /> {/* Photosynthesize */}
                    <Skill id={43726} /> {/* Crippling Leap */}
                    <Skill id={43788} /> {/* Call Lightning */}
                    <Skill id={44097} /> {/* Entangling Web */}
                    <Skill id={44360} /> {/* Fear */}
                    <Skill id={44384} /> {/* Crippling Anguish */}
                    <Skill id={44514} /> {/* Maul */}
                    <Skill id={44617} /> {/* Harmonic Cry */}
                    <Skill id={44885} /> {/* Chomp */}
                    <Skill id={44991} /> {/* Swoop */}
                    <Skill id={45479} /> {/* Sharpen Spines */}
                    <Skill id={45743} /> {/* Charge */}
                    <Skill id={45797} /> {/* Unflinching Fortitude */}
                    <Skill id={46386} /> {/* Tail Lash */}
                    <Skill id={46432} /> {/* Brutal Charge */}
                    <Skill id={64038} /> {/* Wicked Bite */}
                    <Skill id={64699} /> {/* Jade Cannon */}
                    <Skill id={64882} /> {/* Undead Plague */}
                    <Skill id={66258} /> {/* Snap */}
                    <Skill id={66780} /> {/* Vampiric Bite */}
                    <Skill id={67382} /> {/* Phase Pounce */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={44948} /> {/* Bear Stance */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40498} /> {/* Vulture Stance */}
                    <Skill id={45142} /> {/* Griffon Stance */}
                    <Skill id={45789} /> {/* Dolyak Stance */}
                    <Skill id={45970} /> {/* Moa Stance */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={45717} /> {/* One Wolf Pack */}
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
          <Card.Header>언테임드 : EoD(End of Dragons)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Untamed */}
                    <TraitLine id={72} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={63094} /> {/* Enveloping Haze */}
                    <Skill id={63147} /> {/* Unleash Ranger */}
                    <Skill id={63209} /> {/* Venomous Outburst */}
                    <Skill id={63258} /> {/* Rending Vines */}
                    <Skill id={63344} /> {/* Unleash Pet */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={63319} /> {/* Perilous Gift */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={63130} /> {/* Nature's Binding */}
                    <Skill id={63157} /> {/* Exploding Spores */}
                    <Skill id={63195} /> {/* Unnatural Traversal */}
                    <Skill id={63256} /> {/* Mutate Conditions */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={63163} /> {/* Forest's Fortification */}
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
