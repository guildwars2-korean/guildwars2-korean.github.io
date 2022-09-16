import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import Gw2card from '../../../components/gw2card';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsGuardian() {
  return (
    <>
    <Container>
      <Row >
        {/* 오리지널 / Original */}
        <Gw2card header="가디언 : Original" defaultActiveKey="0">
          <Card.Body>
            <center>
              <img src="https://wiki.guildwars2.com/images/thumb/8/88/Guardian_04_concept_art.png/350px-Guardian_04_concept_art.png"></img>
            </center>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  <Card.Body>
                      <Gw2card header="다운 스킬">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={9149} /> {/* Wrath */}<br></br>
                                  <Skill id={9212} /> {/* Shackle */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={9096} /> {/* Wave of Light */}<br></br>
                                  <Skill id={9211} /> {/* Reveal the Depths */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={9095} /> {/* Symbol of Judgment */}<br></br>
                                  <Skill id={9210} /> {/* Renewing Current */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Focus">
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={9112} /> {/* Ray of Judgment */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={9082} /> {/* Shield of Wrath */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Greatsword">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={9137} /> {/* Strike */}<br></br>
                                  <Skill id={9138} /> {/* Vengeful Strike */}<br></br>
                                  <Skill id={9139} /> {/* Wrathful Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={9081} /> {/* Whirling Wrath */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={9080} /> {/* Leap of Faith */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={9146} /> {/* Symbol of Resolution */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={9147} /> {/* Binding Blade */}<br></br>
                                  <Skill id={9226} /> {/* Pull */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Hammer">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={9159} /> {/* Hammer Swing */}<br></br>
                                  <Skill id={9160} /> {/* Hammer Bash */}<br></br>
                                  <Skill id={9161} /> {/* Symbol of Protection */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={9194} /> {/* Mighty Blow */}<br></br>
                                  <Skill id={53482} /> {/* Glacial Blow */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={9260} /> {/* Zealot's Embrace */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={9124} /> {/* Banish */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={9195} /> {/* Ring of Warding */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Mace">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={9108} /> {/* Faithful Strike */}<br></br>
                                  <Skill id={9109} /> {/* True Strike */}<br></br>
                                  <Skill id={9110} /> {/* Pure Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={9111} /> {/* Symbol of Faith */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={9086} /> {/* Protector's Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Scepter">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={9098} /> {/* Orb of Wrath */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={9090} /> {/* Symbol of Punishment */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={9099} /> {/* Chains of Light */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Shield">
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={9087} /> {/* Shield of Judgment */}<br></br>
                                  <Skill id={15834} /> {/* Shield of Judgment */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={9091} /> {/* Shield of Absorption */}<br></br>
                                  <Skill id={9224} /> {/* Shield of Absorption */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Staff">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={9122} /> {/* Bolt of Wrath */}<br></br>
                                  <Skill id={51645} /> {/* Seeking Judgment */}<br></br>
                                  <Skill id={51660} /> {/* Searing Light */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={9140} /> {/* Holy Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={9143} /> {/* Symbol of Swiftness */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={9265} /> {/* Empower */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={9144} /> {/* Line of Warding */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Sword">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={9105} /> {/* Sword of Wrath */}<br></br>
                                  <Skill id={9106} /> {/* Sword Arc */}<br></br>
                                  <Skill id={9227} /> {/* Sword Wave */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={9097} /> {/* Symbol of Blades */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={9107} /> {/* Zealot's Defense */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Torch">
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={9089} /> {/* Zealot's Fire */}<br></br>
                                  <Skill id={9104} /> {/* Zealot's Flame */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={9088} /> {/* Cleansing Flame */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Spear">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={9189} /> {/* Spear of Light */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={9190} /> {/* Zealot's Flurry */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={9191} /> {/* Brilliance */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={9192} /> {/* Symbol of Spears */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={9193} /> {/* Wrathful Grasp */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Trident">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={9205} /> {/* Light Ball */}<br></br>
                                  <Skill id={50392} /> {/* Judgment of Light */}<br></br>
                                  <Skill id={50399} /> {/* Detonate Light */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={9207} /> {/* Purify */}<br></br>
                                  <Skill id={9234} /> {/* Purifying Blast */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={9208} /> {/* Symbol of Light */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={9209} /> {/* Refraction */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={9206} /> {/* Weight of Justice */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                    </Card.Body>
                  </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 특성 / Traits */}
                <Gw2card header="특성">
                  <Card.Body>
                    {/* Valor */}
                    <TraitLine id={13} resettable selectable />
                    {/* radiance */}
                    <TraitLine id={16} resettable selectable />
                    {/* Zeal */}
                    <TraitLine id={42} resettable selectable />
                    {/* Virtues */}
                    <TraitLine id={46} resettable selectable />
                    {/* Honor */}
                    <TraitLine id={49} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  <Card.Body>
                    <Skill id={9115} /> {/* Virtue of Justice */}
                    <Skill id={9120} /> {/* Virtue of Resolve */}
                    <Skill id={9118} /> {/* Virtue of Courage */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  <Card.Body>
                    <Skill id={21664} /> {/* Litany of Wrath */}
                    <Skill id={9083} /> {/* "Receive the Light!" */}
                    <Skill id={9102} /> {/* Shelter */}
                    <Skill id={9158} /> {/* Signet of Resolve */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  <Card.Body>
                    <Skill id={24414} /> {/* Signet of Mercy */}
                    <Skill id={31159} /> {/* Purging Flames */}
                    <Skill id={31295} /> {/* Sanctuary */}
                    <Skill id={41571} /> {/* Shield of the Avenger */}
                    <Skill id={43565} /> {/* Bow of Truth */}
                    <Skill id={44846} /> {/* Sword of Justice */}
                    <Skill id={46170} /> {/* Hammer of Wisdom */}
                    <Skill id={46600} /> {/* Bow of Truth */}
                    <Skill id={46750} /> {/* Bow of Truth */}
                    <Skill id={55019} /> {/* Sword of Justice */}
                    <Skill id={55027} /> {/* Sword of Justice */}
                    <Skill id={55035} /> {/* Shield of the Avenger */}
                    <Skill id={55037} /> {/* Shield of the Avenger */}
                    <Skill id={55040} /> {/* Hammer of Wisdom */}
                    <Skill id={55053} /> {/* Hammer of Wisdom */}
                    <Skill id={9084} /> {/* "Advance!" */}
                    <Skill id={9085} /> {/* "Save Yourselves!" */}
                    <Skill id={9093} /> {/* Bane Signet */}
                    <Skill id={9125} /> {/* Hammer of Wisdom */}
                    <Skill id={9128} /> {/* Sanctuary */}
                    <Skill id={9150} /> {/* Signet of Judgment */}
                    <Skill id={9151} /> {/* Signet of Wrath */}
                    <Skill id={9152} /> {/* "Hold the Line!" */}
                    <Skill id={9153} /> {/* "Stand Your Ground!" */}
                    <Skill id={9163} /> {/* Signet of Mercy */}
                    <Skill id={9168} /> {/* Sword of Justice */}
                    <Skill id={9175} /> {/* Bow of Truth */}
                    <Skill id={9182} /> {/* Shield of the Avenger */}
                    <Skill id={9187} /> {/* Purging Flames */}
                    <Skill id={9245} /> {/* Smite Condition */}
                    <Skill id={9246} /> {/* Merciful Intervention */}
                    <Skill id={9247} /> {/* Judge's Intervention */}
                    <Skill id={9248} /> {/* Contemplation of Purity */}
                    <Skill id={9251} /> {/* Wall of Reflection */}
                    <Skill id={9253} /> {/* Hallowed Ground */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  <Card.Body>
                    <Skill id={29965} /> {/* "Feel My Wrath!" */}
                    <Skill id={30461} /> {/* Signet of Courage */}
                    <Skill id={9154} /> {/* Renewed Focus */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* HoT / Heart of Thorns */}
        <Gw2card header="드래곤헌터 : HoT(Heart Of Thorns)">
          <Card.Body>
            <center>
              <img src="https://wiki.guildwars2.com/images/thumb/e/eb/Spec_image_Dragonhunter.jpg/370px-Spec_image_Dragonhunter.jpg"></img>
            </center>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  <Card.Body>
                      <Gw2card header="Longbow">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={30471} /> {/* Puncture Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={30229} /> {/* True Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={29630} /> {/* Deflecting Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={29789} /> {/* Symbol of Energy */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={30628} /> {/* Hunter's Ward */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                    </Card.Body>
                  </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 특성 / Traits */}
                <Gw2card header="특성">
                  <Card.Body>
                    {/* Dragonhunter */}
                    <TraitLine id={27} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  <Card.Body>
                    <Skill id={29887} /> {/* Spear of Justice */}
                    <Skill id={30029} /> {/* Shield of Courage */}
                    <Skill id={30039} /> {/* Shield of Courage */}
                    <Skill id={30083} /> {/* Wings of Resolve */}
                    <Skill id={30225} /> {/* Wings of Resolve */}
                    <Skill id={30286} /> {/* Wings of Resolve */}
                    <Skill id={30783} /> {/* Wings of Resolve */}
                    <Skill id={33134} /> {/* Hunter's Verdict */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  <Card.Body>
                    <Skill id={30025} /> {/* Purification */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  <Card.Body>
                    <Skill id={29786} /> {/* Test of Faith */}
                    <Skill id={30364} /> {/* Procession of Blades */}
                    <Skill id={30553} /> {/* Fragments of Faith */}
                    <Skill id={30871} /> {/* Light's Judgment */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  <Card.Body>
                    <Skill id={30273} /> {/* Dragon's Maw */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* PoF / Path of Fire */}
        <Gw2card header="파이어브랜드 : PoF(Path of Fire)">
          <Card.Body>
            <center>
              <img src="https://wiki.guildwars2.com/images/thumb/e/ef/Spec_image_Firebrand.jpg/370px-Spec_image_Firebrand.jpg"></img>
            </center>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  <Card.Body>
                      <Gw2card header="Axe">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={43826} /> {/* Searing Slash */}<br></br>
                                  <Skill id={44602} /> {/* Bleeding Edge */}<br></br>
                                  <Skill id={45047} /> {/* Core Cleave */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={40624} /> {/* Symbol of Vengeance */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={45402} /> {/* Blazing Edge */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                    </Card.Body>
                  </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 특성 / Traits */}
                <Gw2card header="특성">
                  <Card.Body>
                    {/* Firebrand */}
                    <TraitLine id={62} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  <Card.Body>
                    <Skill id={41380} /> {/* Stow Tome */}
                    <Skill id={41780} /> {/* Tome of Resolve */}
                    <Skill id={42259} /> {/* Tome of Courage */}
                    <Skill id={42371} /> {/* Tome of Courage */}
                    <Skill id={44364} /> {/* Tome of Justice */}
                    <Skill id={45023} /> {/* Tome of Resolve */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  <Card.Body>
                    <Skill id={41714} /> {/* Mantra of Solace */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  <Card.Body>
                    <Skill id={40915} /> {/* Mantra of Potence */}
                    <Skill id={44080} /> {/* Mantra of Truth */}
                    <Skill id={45460} /> {/* Mantra of Lore */}
                    <Skill id={46148} /> {/* Mantra of Flame */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  <Card.Body>
                    <Skill id={43357} /> {/* Mantra of Liberation */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* EoD / End of Dragons */}
        <Gw2card header="윌벤더 : EoD(End of Dragons)">
          <Card.Body>
            <center>
              <img src="https://wiki.guildwars2.com/images/thumb/1/18/Willbender_concept_art_2.jpg/350px-Willbender_concept_art_2.jpg"></img>
            </center>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  <Card.Body>
                      <Gw2card header="Sword">
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={62525} /> {/* Executioner's Calling */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={62650} /> {/* Advancing Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                    </Card.Body>
                  </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 특성 / Traits */}
                <Gw2card header="특성">
                  <Card.Body>
                    {/* Willbender */}
                    <TraitLine id={65} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  <Card.Body>
                    <Skill id={62528} /> {/* Willbender Flames */}
                    <Skill id={62532} /> {/* Crashing Courage */}
                    <Skill id={62552} /> {/* Willbender Flames */}
                    <Skill id={62555} /> {/* Crashing Courage */}
                    <Skill id={62596} /> {/* Crashing Courage */}
                    <Skill id={62603} /> {/* Flowing Resolve */}
                    <Skill id={62618} /> {/* Willbender Flames */}
                    <Skill id={62635} /> {/* Flowing Resolve */}
                    <Skill id={62648} /> {/* Crashing Courage */}
                    <Skill id={62668} /> {/* Rushing Justice */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  <Card.Body>
                    <Skill id={62622} /> {/* Reversal of Fortune */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  <Card.Body>
                    <Skill id={62521} /> {/* Roiling Light */}
                    <Skill id={62549} /> {/* Heel Crack */}
                    <Skill id={62565} /> {/* Whirling Light */}
                    <Skill id={62608} /> {/* Flash Combo */}
                    <Skill id={62669} /> {/* Repose */}
                    <Skill id={62676} /> {/* Quick Retribution */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  <Card.Body>
                    <Skill id={62561} /> {/* Heaven's Palm */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
    </Container>
    </>
  );
}

export default ProfessionsGuardian;
