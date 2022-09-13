import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css';
import 'discretize-monorepo-root/typeface-menomonia';

import Gw2card from '../../../components/gw2card';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsEngineer() {
  return (
    <>
    <Container>
      <Row >
        {/* 오리지널 / Original */}
        <Gw2card header="엔지니어 : Original">
          <Card.Body>
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
                                  <Skill id={5820} /> {/* Throw Junk */}<br></br>
                                  <Skill id={5916} /> {/* Floating Mine */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={5962} /> {/* Grappling Line */}<br></br>
                                  <Skill id={5917} /> {/* Anchor */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={5963} /> {/* Booby Trap */}<br></br>
                                  <Skill id={5918} /> {/* Buoy */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Pistol">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={5827} /> {/* Fragmentation Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={5828} /> {/* Poison Dart Volley */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={5829} /> {/* Static Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={5831} /> {/* Blowtorch */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={5830} /> {/* Glue Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Rifle">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={6003} /> {/* Rifle Burst */}<br></br>
                                  <Skill id={68079} /> {/* Rifle Burst Grenade */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={6153} /> {/* Blunderbuss */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={6004} /> {/* Net Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={6154} /> {/* Overcharged Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={6005} /> {/* Jump Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
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
                                  <Skill id={6053} /> {/* Magnetic Shield */}<br></br>
                                  <Skill id={6126} /> {/* Magnetic Inversion */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={6054} /> {/* Static Shield */}<br></br>
                                  <Skill id={6057} /> {/* Throw Shield */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Speargun">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={6148} /> {/* Homing Torpedo */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={6147} /> {/* Scatter Mines */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={50380} /> {/* Capture Line */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={6149} /> {/* Timed Charge */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={6145} /> {/* Net Wall */}<br></br>
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
                    {/* Explosives */}
                    <TraitLine id={6} resettable selectable />
                    {/* Tools */}
                    <TraitLine id={21} resettable selectable />
                    {/* Alchemy */}
                    <TraitLine id={29} resettable selectable />
                    {/* Firearms */}
                    <TraitLine id={38} resettable selectable />
                    {/* Inventions */}
                    <TraitLine id={47} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">     
                  <Card.Body>
                  </Card.Body>
                </Gw2card>       
                <Gw2card header="힐 스킬">   
                  <Card.Body>
                    <Skill id={21659} /> {/* A.E.D. */}
                    <Skill id={30881} /> {/* A.E.D. */}
                    <Skill id={5802} /> {/* Med Kit */}
                    <Skill id={5834} /> {/* Elixir H */}
                    <Skill id={5857} /> {/* Healing Turret */}
                    <Skill id={5961} /> {/* Detonate Healing Turret */}
                    <Skill id={5980} /> {/* Cleansing Burst */}
                    <Skill id={6109} /> {/* Stow Med Kit */}
                    <Skill id={6140} /> {/* Healing Turret */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  <Card.Body>
                    <Skill id={22574} /> {/* Rocket Turret */}
                    <Skill id={29473} /> {/* Detonate */}
                    <Skill id={29522} /> {/* Rocket Boots */}
                    <Skill id={29591} /> {/* Utility Goggles */}
                    <Skill id={29991} /> {/* Personal Battering Ram */}
                    <Skill id={30337} /> {/* Throw Mine */}
                    <Skill id={30828} /> {/* Slick Shoes */}
                    <Skill id={30893} /> {/* Deploy Mine */}
                    <Skill id={38748} /> {/* Detonate Rocket Turret */}
                    <Skill id={50438} /> {/* Rocket Boots */}
                    <Skill id={50441} /> {/* Rocket Boots */}
                    <Skill id={50472} /> {/* Slick Shoes */}
                    <Skill id={50491} /> {/* Slick Shoes */}
                    <Skill id={5805} /> {/* Grenade Kit */}
                    <Skill id={5811} /> {/* Personal Battering Ram */}
                    <Skill id={5812} /> {/* Bomb Kit */}
                    <Skill id={5818} /> {/* Rifle Turret */}
                    <Skill id={5821} /> {/* Elixir B */}
                    <Skill id={5825} /> {/* Slick Shoes */}
                    <Skill id={5836} /> {/* Flame Turret */}
                    <Skill id={5837} /> {/* Net Turret */}
                    <Skill id={5838} /> {/* Thumper Turret */}
                    <Skill id={5860} /> {/* Elixir C */}
                    <Skill id={5861} /> {/* Elixir S */}
                    <Skill id={5862} /> {/* Elixir U */}
                    <Skill id={5865} /> {/* Utility Goggles */}
                    <Skill id={5874} /> {/* Automatic Fire */}
                    <Skill id={5889} /> {/* Thump */}
                    <Skill id={5893} /> {/* Electrified Net */}
                    <Skill id={5900} /> {/* Smoke Screen */}
                    <Skill id={5904} /> {/* Tool Kit */}
                    <Skill id={5910} /> {/* Rocket Boots */}
                    <Skill id={5912} /> {/* Rocket Turret */}
                    <Skill id={5913} /> {/* Explosive Rockets */}
                    <Skill id={5927} /> {/* Flamethrower */}
                    <Skill id={5933} /> {/* Elixir Gun */}
                    <Skill id={5957} /> {/* Detonate Rifle Turret */}
                    <Skill id={5960} /> {/* Detonate Thumper Turret */}
                    <Skill id={5968} /> {/* Elixir R */}
                    <Skill id={5984} /> {/* Detonate Net Turret */}
                    <Skill id={5985} /> {/* Detonate Flame Turret */}
                    <Skill id={5987} /> {/* Flame Turret */}
                    <Skill id={5988} /> {/* Net Turret */}
                    <Skill id={5989} /> {/* Rifle Turret */}
                    <Skill id={5990} /> {/* Thumper Turret */}
                    <Skill id={5991} /> {/* Rocket Turret */}
                    <Skill id={6020} /> {/* Grenade Kit */}
                    <Skill id={6093} /> {/* Harpoon Turret */}
                    <Skill id={6097} /> {/* Detonate Harpoon Turret */}
                    <Skill id={6098} /> {/* Automatic Fire */}
                    <Skill id={6110} /> {/* Stow Grenade Kit */}
                    <Skill id={6111} /> {/* Stow Bomb Kit */}
                    <Skill id={6113} /> {/* Stow Tool Kit */}
                    <Skill id={6114} /> {/* Stow Flamethrower */}
                    <Skill id={6115} /> {/* Stow Elixir Gun */}
                    <Skill id={6134} /> {/* Detonate Rocket Turret */}
                    <Skill id={6161} /> {/* Throw Mine */}
                    <Skill id={6162} /> {/* Detonate */}
                    <Skill id={6163} /> {/* Deploy Mine */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  <Card.Body>
                    <Skill id={20451} /> {/* Elixir X */}
                    <Skill id={29518} /> {/* Detonate Supply Crate Turrets */}
                    <Skill id={29905} /> {/* Stow Mortar Kit */}
                    <Skill id={30230} /> {/* Overcharge Supply Crate */}
                    <Skill id={30264} /> {/* Overcharge Supply Crate */}
                    <Skill id={30800} /> {/* Elite Mortar Kit */}
                    <Skill id={38750} /> {/* Detonate Supply Crate Turrets */}
                    <Skill id={5832} /> {/* Elixir X */}
                    <Skill id={5868} /> {/* Supply Crate */}
                    <Skill id={6183} /> {/* Supply Crate */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* HoT / Heart of Thorns */}
        <Gw2card header="스크래퍼 : HoT(Heart Of Thorns)">
          <Card.Body>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  <Card.Body>
                      <Gw2card header="Hammer">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={29785} /> {/* Negative Bash */}<br></br>
                                  <Skill id={30489} /> {/* Equalizing Blow */}<br></br>
                                  <Skill id={30501} /> {/* Positive Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={30088} /> {/* Electro-whirl */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={30665} /> {/* Rocket Charge */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={29840} /> {/* Shock Shield */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={30713} /> {/* Thunderclap */}<br></br>
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
                    {/* Scrapper */}
                    <TraitLine id={43} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  <Card.Body>
                    <Skill id={56920} /> {/* Function Gyro */}
                    <Skill id={56921} /> {/* Function Gyro */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  <Card.Body>
                    <Skill id={30357} /> {/* Medic Gyro */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  <Card.Body>
                    <Skill id={29739} /> {/* Purge Gyro */}
                    <Skill id={29921} /> {/* Shredder Gyro */}
                    <Skill id={30101} /> {/* Bulwark Gyro */}
                    <Skill id={31248} /> {/* Blast Gyro */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  <Card.Body>
                    <Skill id={30815} /> {/* Sneak Gyro */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* PoF / Path of Fire */}
        <Gw2card header="홀로스미스 : PoF(Path of Fire)">
          <Card.Body>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  <Card.Body>
                  <Gw2card header="직업">
                      <Card.Body>
                        <Row>
                          <Col>
                            <Gw2card header="1">
                              <Card.Body>
                                <Skill id={44588} /> {/* Light Strike */}
                                <Skill id={45756} /> {/* Bright Slash */}
                                <Skill id={45890} /> {/* Flash Cutter */}<br></br>
                                <Skill id={44260} /> {/* Light Strike—Storm */}
                                <Skill id={42475} /> {/* Bright Slash—Storm */}
                                <Skill id={41684} /> {/* Flash Cutter—Storm */}<br></br>
                              </Card.Body>
                            </Gw2card>
                          </Col>
                          <Col>
                            <Gw2card header="2">
                              <Card.Body>
                                <Skill id={42965} /> {/* Holo Leap */}<br></br>
                              </Card.Body>
                            </Gw2card>
                          </Col>
                          <Col>
                            <Gw2card header="3">
                              <Card.Body>
                                <Skill id={44530} /> {/* Corona Burst */}<br></br>
                              </Card.Body>
                            </Gw2card>
                          </Col>
                          <Col>
                              <Gw2card header="4">
                                <Card.Body>
                                  <Skill id={45783} /> {/* Photon Blitz */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                <Card.Body>
                                  <Skill id={42521} /> {/* Holographic Shockwave */}<br></br>
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
                                <Skill id={43476} /> {/* Sun Edge */}<br></br>
                                <Skill id={45581} /> {/* Sun Ripper */}<br></br>
                                <Skill id={45979} /> {/* Gleam Saber */}<br></br>
                              </Card.Body>
                            </Gw2card>
                          </Col>
                          <Col>
                            <Gw2card header="2">
                              <Card.Body>
                                <Skill id={44110} /> {/* Refraction Cutter */}<br></br>
                              </Card.Body>
                            </Gw2card>
                          </Col>
                          <Col>
                            <Gw2card header="3">
                              <Card.Body>
                                <Skill id={40160} /> {/* Radiant Arc */}<br></br>
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
                    {/* Holosmith */}
                    <TraitLine id={57} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  <Card.Body>
                    <Skill id={41123} /> {/* Deactivate Photon Forge */}
                    <Skill id={42938} /> {/* Engage Photon Forge */}
                    <Skill id={44386} /> {/* Holoforge Overheated */}
                    <Skill id={45219} /> {/* Deactivate Photon Forge */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  <Card.Body>
                    <Skill id={40507} /> {/* Coolant Blast */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  <Card.Body>
                    <Skill id={40533} /> {/* Launch Wall */}
                    <Skill id={41218} /> {/* Spectrum Shield */}
                    <Skill id={42842} /> {/* Laser Disk */}
                    <Skill id={43739} /> {/* Photon Wall */}
                    <Skill id={44646} /> {/* Hard Light Arena */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  <Card.Body>
                    <Skill id={42009} /> {/* Prime Light Beam */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* EoD / End of Dragons */}
        <Gw2card header="메카니스트 : EoD(End of Dragons)">
          <Card.Body>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  <Card.Body>
                      <Gw2card header="Mace">
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                <Card.Body>
                                  <Skill id={63186} /> {/* Mace Strike */}<br></br>
                                  <Skill id={63077} /> {/* Mace Smash */}<br></br>
                                  <Skill id={63174} /> {/* Barrier Blast */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                <Card.Body>
                                  <Skill id={63169} /> {/* Energizing Slam */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                <Card.Body>
                                  <Skill id={63234} /> {/* Rocket Fist Prototype */}<br></br>
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
                    {/* Mechanist */}
                    <TraitLine id={70} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  <Card.Body>
                    <Skill id={63050} /> {/* Crash Down */}
                    <Skill id={63089} /> {/* Recall Mech */}
                    <Skill id={63210} /> {/* Mech Support: Depth Charges */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  <Card.Body>
                    <Skill id={63049} /> {/* Rectifier Signet */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  <Card.Body>
                    <Skill id={63111} /> {/* Shift Signet */}
                    <Skill id={63113} /> {/* Superconducting Signet */}
                    <Skill id={63253} /> {/* Force Signet */}
                    <Skill id={63262} /> {/* Barrier Signet */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  <Card.Body>
                    <Skill id={63095} /> {/* Overclock Signet */}
                    <Skill id={63374} /> {/* Jade Buster Cannon */}
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

export default ProfessionsEngineer;
