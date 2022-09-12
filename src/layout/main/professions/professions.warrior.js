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
          <Card.Header>워리어 : Original</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12" style={{marginBottom: 10}}>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Downed</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={14390} /> {/* Throw Rock */}<br></br>
                                  <Skill id={14463} /> {/* Punch */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={14464} /> {/* Kick */}<br></br>
                                  <Skill id={14515} /> {/* Hammer Toss */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={14391} /> {/* Vengeance */}<br></br>
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
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={14369} /> {/* Chop */}<br></br>
                                  <Skill id={14370} /> {/* Double Chop */}<br></br>
                                  <Skill id={14371} /> {/* Triple Chop */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={14421} /> {/* Cyclone Axe */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={14398} /> {/* Throw Axe */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={14418} /> {/* Dual Strike */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14399} /> {/* Whirling Axe */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Greatsword</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={14356} /> {/* Greatsword Swing */}<br></br>
                                  <Skill id={14373} /> {/* Greatsword Slice */}<br></br>
                                  <Skill id={14374} /> {/* Brutal Strike */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={14554} /> {/* Hundred Blades */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={14447} /> {/* Whirlwind Attack */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={14510} /> {/* Bladetrail */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14446} /> {/* Rush */}<br></br>
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
                                  <Skill id={14358} /> {/* Hammer Swing */}<br></br>
                                  <Skill id={14384} /> {/* Hammer Bash */}<br></br>
                                  <Skill id={14385} /> {/* Hammer Smash */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={14386} /> {/* Fierce Blow */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={14482} /> {/* Hammer Shock */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={14359} /> {/* Staggering Blow */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14511} /> {/* Backbreaker */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Longbow</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={14431} /> {/* Dual Shot */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={14519} /> {/* Fan of Fire */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={14381} /> {/* Arcing Arrow */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={14505} /> {/* Smoldering Arrow */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14504} /> {/* Pin Down */}<br></br>
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
                                  <Skill id={14376} /> {/* Mace Smash */}<br></br>
                                  <Skill id={14377} /> {/* Mace Bash */}<br></br>
                                  <Skill id={14378} /> {/* Pulverize */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={14507} /> {/* Counterblow */}<br></br>
                                  <Skill id={14548} /> {/* Adrenaline Rush */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={14503} /> {/* Pommel Bash */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={14518} /> {/* Crushing Blow */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14415} /> {/* Tremor */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Rifle</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={14432} /> {/* Fierce Shot */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={14416} /> {/* Volley */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={14472} /> {/* Explosive Shell */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={14395} /> {/* Brutal Shot */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14360} /> {/* Rifle Butt */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
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
                                  <Skill id={14361} /> {/* Shield Bash */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14362} /> {/* Shield Stance */}<br></br>
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
                                  <Skill id={14363} /> {/* Hamstring */}<br></br>
                                  <Skill id={14364} /> {/* Sever Artery */}<br></br>
                                  <Skill id={14365} /> {/* Gash */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={14366} /> {/* Savage Leap */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={14497} /> {/* Final Thrust */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={14498} /> {/* Impale */}<br></br>
                                  <Skill id={14501} /> {/* Rip */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14400} /> {/* Riposte */}<br></br>
                                  <Skill id={14557} /> {/* Adrenaline Rush */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Warhorn</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={14393} /> {/* Charge */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14394} /> {/* Call of Valor */}<br></br>
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
                                  <Skill id={14437} /> {/* Stab */}<br></br>
                                  <Skill id={14438} /> {/* Jab */}<br></br>
                                  <Skill id={14439} /> {/* Impale */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={14440} /> {/* Mariner's Frenzy */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={14448} /> {/* Barbed Pull */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={14441} /> {/* Parry */}<br></br>
                                  <Skill id={14555} /> {/* Adrenaline Rush */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14480} /> {/* Tsunami Slash */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Speargun</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={14552} /> {/* Mariner's Shot */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={14466} /> {/* Puncture Shot */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={14481} /> {/* Split Shot */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={14467} /> {/* Knot Shot */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={14465} /> {/* Repeating Shot */}<br></br>
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
              <Col xl="6" style={{marginBottom: 10}}>
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
          <Card.Header>버서커 : HoT(Heart Of Thorns)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12" style={{marginBottom: 10}}>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Torch</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={29845} /> {/* Blaze Breaker */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={29940} /> {/* Flames of War */}<br></br>
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
                    {/* Berserker */}
                    <TraitLine id={18} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
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
          <Card.Header>스펠브레이커 : PoF(Path of Fire)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12" style={{marginBottom: 10}}>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Dagger</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={42745} /> {/* Precise Cut */}<br></br>
                                  <Skill id={40275} /> {/* Keen Strike */}<br></br>
                                  <Skill id={40560} /> {/* Focused Slash */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={46233} /> {/* Aura Slicer */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={44937} /> {/* Disrupting Stab */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={44004} /> {/* Wastrel's Ruin */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={45160} /> {/* Bladestorm */}<br></br>
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
                    {/* Spellbreaker */}
                    <TraitLine id={61} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
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
          <Card.Header>블레이드스원 : EoD(End of Dragons)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12" style={{marginBottom: 10}}>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Pistol</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={62697} /> {/* Gunstinger */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={62800} /> {/* Dragon's Roar */}<br></br>
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
                    {/* Bladesworn */}
                    <TraitLine id={68} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
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
