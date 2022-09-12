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
          <Card.Header>레버넌트 : Original</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12" style={{marginBottom: 10}}>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>다운 스킬</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={28180} /> {/* Essence Sap */}<br></br>
                                  <Skill id={31723} /> {/* Essence Sap */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={27063} /> {/* Forceful Displacement */}<br></br>
                                  <Skill id={31727} /> {/* Forceful Displacement */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={27792} /> {/* Vengeful Blast */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Axe</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={28029} /> {/* Frigid Blitz */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={28409} /> {/* Temporal Rift */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Hammer</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={28549} /> {/* Hammer Bolt */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={28253} /> {/* Coalescence of Ruin */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={27976} /> {/* Phase Smash */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={27665} /> {/* Field of the Mists */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={28110} /> {/* Drop the Hammer */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Mace</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={26666} /> {/* Manifest Toxin */}<br></br>
                                  <Skill id={26730} /> {/* Anguish Swipe */}<br></br>
                                  <Skill id={27066} /> {/* Misery Swipe */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={28357} /> {/* Searing Fissure */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={27964} /> {/* Echoing Eruption */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Staff</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={29002} /> {/* Rejuvenating Assault */}<br></br>
                                  <Skill id={29180} /> {/* Rapid Swipe */}<br></br>
                                  <Skill id={29331} /> {/* Forceful Bash */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={29145} /> {/* Mender's Rebuke */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={29288} /> {/* Warding Rift */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={29321} /> {/* Renewing Wave */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={28978} /> {/* Surge of the Mists */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Sword</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={28964} /> {/* Rift Slash */}<br></br>
                                  <Skill id={29057} /> {/* Preparation Thrust */}<br></br>
                                  <Skill id={29256} /> {/* Brutal Blade */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={29233} /> {/* Chilling Isolation */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={26699} /> {/* Unrelenting Assault */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={28472} /> {/* Shackling Wave */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={27074} /> {/* Deathstrike */}<br></br>
                                  <Skill id={28625} /> {/* Deathstrike */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Spear</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={28714} /> {/* Spear of Anguish */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={28915} /> {/* Rapid Assault */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={28797} /> {/* Frigid Discharge */}<br></br>
                                  <Skill id={28827} /> {/* Venomous Sphere */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={28692} /> {/* Igniting Brand */}<br></br>
                                  <Skill id={28815} /> {/* Devour Brand */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={28930} /> {/* Rift Containment */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Trident</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={50395} /> {/* Mistsfire */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={50456} /> {/* Portal Fire */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={50390} /> {/* Rift of Pain */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={50410} /> {/* Reckoning Blast */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={50483} /> {/* Torrential Mists */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Card.Body>
                  </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
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
              <Col xl="6" style={{marginBottom: 10}}>
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
          <Card.Header>헤럴드 : HoT(Heart Of Thorns)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12" style={{marginBottom: 10}}>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Shield</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={29386} /> {/* Envoy of Exuberance */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={28262} /> {/* Crystal Hibernation */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Card.Body>
                  </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Herald */}
                    <TraitLine id={52} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
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
          <Card.Header>레네게이드 : PoF(Path of Fire)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12" style={{marginBottom: 10}}>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Shortbow</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={40497} /> {/* Shattershot */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={40175} /> {/* Bloodbane Path */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={41829} /> {/* Sevenshot */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={43993} /> {/* Spiritcrush */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={41820} /> {/* Scorchrazor */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Card.Body>
                  </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Renegade */}
                    <TraitLine id={63} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
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
          <Card.Header>빈디케이터 : EoD(End of Dragons)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12" style={{marginBottom: 10}}>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Greatsword</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={62913} /> {/* Mist Swing */}<br></br>
                                  <Skill id={62688} /> {/* Mist Slash */}<br></br>
                                  <Skill id={62752} /> {/* Arcing Mists */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={62692} /> {/* Mist Unleashed */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={62895} /> {/* Phantom's Onslaught */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={62921} /> {/* Imperial Guard */}<br></br>
                                  <Skill id={62828} /> {/* True Strike */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={62929} /> {/* Eternity's Requiem */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Card.Body>
                  </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Vindicator */}
                    <TraitLine id={69} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
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
