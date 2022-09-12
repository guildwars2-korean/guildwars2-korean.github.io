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
      <Row style={{marginBottom: 10}}>
        {/* 오리지널 / Original */}
        <Card style={{padding: 0}}>
          <Card.Header>네크로맨서 : Original</Card.Header>
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
                                  <Skill id={10560} /> {/* Life Leech */}<br></br>
                                  <Skill id={10640} /> {/* Life Leech */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={10660} /> {/* Fear */}<br></br>
                                  <Skill id={10642} /> {/* Feeding Frenzy */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={10559} /> {/* Fetid Ground */}<br></br>
                                  <Skill id={10641} /> {/* Death Curse */}<br></br>
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
                                  <Skill id={10561} /> {/* Rending Claws */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={10528} /> {/* Ghastly Claws */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={10701} /> {/* Unholy Feast */}<br></br>
                                  <Skill id={38767} /> {/* Unholy Burst */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Dagger</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={10702} /> {/* Necrotic Slash */}<br></br>
                                  <Skill id={10703} /> {/* Necrotic Stab */}<br></br>
                                  <Skill id={10704} /> {/* Necrotic Bite */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={10563} /> {/* Life Siphon */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={10529} /> {/* Dark Pact */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={10705} /> {/* Deathly Swarm */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={10706} /> {/* Enfeebling Blood */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Focus</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={55038} /> {/* Soul Grasp */}<br></br>
                                  <Skill id={55050} /> {/* Soul Grasp */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={10555} /> {/* Spinal Shivers */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Scepter</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={10552} /> {/* Putrid Curse */}<br></br>
                                  <Skill id={10698} /> {/* Blood Curse */}<br></br>
                                  <Skill id={10699} /> {/* Rending Curse */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={10532} /> {/* Grasping Dead */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={10709} /> {/* Feast of Corruption */}<br></br>
                                  <Skill id={51647} /> {/* Devouring Darkness */}<br></br>
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
                                  <Skill id={10596} /> {/* Necrotic Grasp */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={19117} /> {/* Mark of Blood */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={10605} /> {/* Chillblains */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={19116} /> {/* Putrid Mark */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={19115} /> {/* Reaper's Mark */}<br></br>
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
                                  <Skill id={10556} /> {/* Wail of Doom */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={10557} /> {/* Locust Swarm */}<br></br>
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
                                  <Skill id={10617} /> {/* Reaper's Scythe */}<br></br>
                                  <Skill id={10692} /> {/* Cruel Strike */}<br></br>
                                  <Skill id={10693} /> {/* Wicked Strike */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={10694} /> {/* Wicked Spiral */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={10619} /> {/* Deadly Feast */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={10695} /> {/* Deadly Catch */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={10616} /> {/* Dark Spear */}<br></br>
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
                                  <Skill id={10623} /> {/* Crimson Tide */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={10624} /> {/* Feast */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={10625} /> {/* Foul Current */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={10628} /> {/* Sinking Tomb */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={10629} /> {/* Frozen Abyss */}<br></br>
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
              <Col xl="6" style={{marginBottom: 10}}>
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={10554} /> {/* Life Blast */}
                    <Skill id={10574} /> {/* Death Shroud */}
                    <Skill id={10585} /> {/* End Death Shroud */}
                    <Skill id={10588} /> {/* Doom */}
                    <Skill id={10594} /> {/* Life Transfer */}
                    <Skill id={10604} /> {/* Dark Path */}
                    <Skill id={10643} /> {/* Gathering Plague */}
                    <Skill id={10644} /> {/* Dark Water */}
                    <Skill id={10645} /> {/* Wave of Fear */}
                    <Skill id={10690} /> {/* Plague Blast */}
                    <Skill id={18504} /> {/* Dhuumfire */}
                    <Skill id={19504} /> {/* Tainted Shackles */}
                    <Skill id={24287} /> {/* Dhuumfire */}
                    <Skill id={29442} /> {/* Life Rend */}
                    <Skill id={29458} /> {/* Life Slash */}
                    <Skill id={29709} /> {/* Terrify */}
                    <Skill id={29958} /> {/* Infusing Terror */}
                    <Skill id={30278} /> {/* Life Reap */}
                    <Skill id={30504} /> {/* Soul Spiral */}
                    <Skill id={30557} /> {/* Executioner's Scythe */}
                    <Skill id={30792} /> {/* Reaper's Shroud */}
                    <Skill id={30825} /> {/* Death's Charge */}
                    <Skill id={30961} /> {/* Exit Reaper's Shroud */}
                    <Skill id={56916} /> {/* Dark Pursuit */}
                    <Skill id={62539} /> {/* Voracious Arc */}
                    <Skill id={62540} /> {/* Exit Harbinger Shroud */}
                    <Skill id={62563} /> {/* Vital Draw */}
                    <Skill id={62567} /> {/* Harbinger Shroud */}
                    <Skill id={62611} /> {/* Tainted Bolts */}
                    <Skill id={62621} /> {/* Dark Barrage */}
                    <Skill id={62672} /> {/* Devouring Cut */}
                    <Skill id={63448} /> {/* Voracious Dive */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={10527} /> {/* Well of Blood */}
                    <Skill id={10547} /> {/* Summon Blood Fiend */}
                    <Skill id={10548} /> {/* Consume Conditions */}
                    <Skill id={10577} /> {/* Taste of Death */}
                    <Skill id={10670} /> {/* Well of Blood */}
                    <Skill id={21762} /> {/* Signet of Vampirism */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={10533} /> {/* Summon Bone Fiend */}
                    <Skill id={10540} /> {/* Putrid Explosion */}
                    <Skill id={10541} /> {/* Summon Bone Minions */}
                    <Skill id={10543} /> {/* Summon Flesh Wurm */}
                    <Skill id={10544} /> {/* Blood Is Power */}
                    <Skill id={10545} /> {/* Well of Corruption */}
                    <Skill id={10546} /> {/* Well of Suffering */}
                    <Skill id={10562} /> {/* Plague Signet */}
                    <Skill id={10570} /> {/* Rigor Mortis */}
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
                    <Skill id={10671} /> {/* Well of Corruption */}
                    <Skill id={10672} /> {/* Well of Darkness */}
                    <Skill id={10673} /> {/* Well of Power */}
                    <Skill id={10674} /> {/* Well of Suffering */}
                    <Skill id={10685} /> {/* Spectral Walk */}
                    <Skill id={10687} /> {/* Spectral Recall */}
                    <Skill id={10689} /> {/* Corrosive Poison Cloud */}
                    <Skill id={24544} /> {/* Signet of Undeath */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={10549} /> {/* Plaguelands */}
                    <Skill id={10550} /> {/* Lich Form */}
                    <Skill id={10646} /> {/* Summon Flesh Golem */}
                    <Skill id={10647} /> {/* Charge */}
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
          <Card.Header>리퍼 : HoT(Heart Of Thorns)</Card.Header>
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
                                  <Skill id={29705} /> {/* Dusk Strike */}<br></br>
                                  <Skill id={30799} /> {/* Fading Twilight */}<br></br>
                                  <Skill id={29867} /> {/* Chilling Scythe */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={30163} /> {/* Gravedigger */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={30860} /> {/* Death Spiral */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={29855} /> {/* Nightfall */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={29740} /> {/* Grasping Darkness */}<br></br>
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
                    {/* Reaper */}
                    <TraitLine id={34} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={30488} /> {/* "Your Soul Is Mine!" */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29414} /> {/* "You Are All Weaklings!" */}
                    <Skill id={29666} /> {/* "Nothing Can Save You!" */}
                    <Skill id={30670} /> {/* "Suffer!" */}
                    <Skill id={30772} /> {/* "Rise!" */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={30105} /> {/* "Chilled to the Bone!" */}
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
          <Card.Header>스커지 : PoF(Path of Fire)</Card.Header>
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
                                  <Skill id={45846} /> {/* Harrowing Wave */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={44296} /> {/* Oppressive Collapse */}<br></br>
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
                    {/* Scourge */}
                    <TraitLine id={60} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40813} /> {/* Nefarious Favor */}
                    <Skill id={42297} /> {/* Manifest Sand Shade */}
                    <Skill id={43448} /> {/* Sand Cascade */}
                    <Skill id={44428} /> {/* Garish Pillar */}
                    <Skill id={44663} /> {/* Desert Shroud */}
                    <Skill id={44946} /> {/* Manifest Sand Shade */}
                    <Skill id={46473} /> {/* Manifest Sand Shade */}
                    <Skill id={46474} /> {/* Manifest Sand Shade */}
                    <Skill id={54870} /> {/* Sandstorm Shroud */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={43148} /> {/* Sand Flare */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={40274} /> {/* Trail of Anguish */}
                    <Skill id={41615} /> {/* Serpent Siphon */}
                    <Skill id={42917} /> {/* Sand Swell */}
                    <Skill id={42935} /> {/* Desiccate */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={42355} /> {/* Ghastly Breach */}
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
          <Card.Header>하빈저 : EoD(End of Dragons)</Card.Header>
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
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={62517} /> {/* Vicious Shot */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={62513} /> {/* Weeping Shots */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={62511} /> {/* Vile Blast */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
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
                    {/* Harbinger */}
                    <TraitLine id={64} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62667} /> {/* Elixir of Promise */}
                    <Skill id={68081} /> {/* Elixir of Promise */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62514} /> {/* Elixir of Bliss */}
                    <Skill id={62530} /> {/* Elixir of Risk */}
                    <Skill id={62646} /> {/* Elixir of Ignorance */}
                    <Skill id={62662} /> {/* Elixir of Anguish */}
                    <Skill id={68075} /> {/* Elixir of Ignorance */}
                    <Skill id={68105} /> {/* Elixir of Risk */}
                    <Skill id={68113} /> {/* Elixir of Anguish */}
                    <Skill id={68132} /> {/* Elixir of Bliss */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62655} /> {/* Elixir of Ambition */}
                    <Skill id={68090} /> {/* Elixir of Ambition */}
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
