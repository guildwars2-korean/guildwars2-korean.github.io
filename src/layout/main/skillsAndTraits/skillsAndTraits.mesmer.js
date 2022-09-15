import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import Gw2card from '../../../components/gw2card';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsMesmer() {
  return (
    <>
    <Container>
      <Row >
        {/* 오리지널 / Original */}
        <Gw2card header="메스머 : Original">
          
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
                                  <Skill id={10196} /> {/* Mind Blast */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={10366} /> {/* Deception */}<br></br>
                                  <Skill id={62454} /> {/* Deception */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={10224} /> {/* Phantasmal Rogue */}<br></br>
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
                                  <Skill id={10186} /> {/* Temporal Curtain */}<br></br>
                                  <Skill id={10363} /> {/* Into the Void */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={10282} /> {/* Phantasmal Warden */}<br></br>
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
                                  <Skill id={10219} /> {/* Spatial Surge */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={10333} /> {/* Mirror Blade */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={10218} /> {/* Mind Stab */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={10221} /> {/* Phantasmal Berserker */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={10220} /> {/* Illusionary Wave */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Pistol">
                        
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={10175} /> {/* Phantasmal Duelist */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={10229} /> {/* Magic Bullet */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Scepter">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={10289} /> {/* Ether Bolt */}<br></br>
                                  <Skill id={10290} /> {/* Ether Blast */}<br></br>
                                  <Skill id={10291} /> {/* Ether Clone */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={10276} /> {/* Illusionary Counter */}<br></br>
                                  <Skill id={10314} /> {/* Counterspell */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={10168} /> {/* Confusing Images */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Staff">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={10273} /> {/* Winds of Chaos */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={10310} /> {/* Phase Retreat */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={10216} /> {/* Phantasmal Warlock */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={10331} /> {/* Chaos Armor */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={10169} /> {/* Chaos Storm */}<br></br>
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
                                  <Skill id={10170} /> {/* Mind Slash */}<br></br>
                                  <Skill id={10171} /> {/* Mind Gash */}<br></br>
                                  <Skill id={10172} /> {/* Mind Spike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={10334} /> {/* Blurred Frenzy */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={10173} /> {/* Illusionary Leap */}<br></br>
                                  <Skill id={10337} /> {/* Swap */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={10280} /> {/* Illusionary Riposte */}<br></br>
                                  <Skill id={10358} /> {/* Counter Blade */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={10174} /> {/* Phantasmal Swordsman */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
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
                                  <Skill id={10285} /> {/* The Prestige */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={10189} /> {/* Phantasmal Mage */}<br></br>
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
                                  <Skill id={10315} /> {/* Stab */}<br></br>
                                  <Skill id={10316} /> {/* Jab */}<br></br>
                                  <Skill id={10317} /> {/* Evasive Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={10318} /> {/* Feigned Surge */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={10251} /> {/* Phantasmal Mariner */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={10325} /> {/* Slipstream */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={10255} /> {/* Vortex */}<br></br>
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
                                  <Skill id={10258} /> {/* Siren's Call */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={10259} /> {/* Blinding Tide */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={10327} /> {/* Imminent Voyage */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={10328} /> {/* Phantasmal Whaler */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={10260} /> {/* Illusion of Drowning */}<br></br>
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
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
                  <Card.Body>
                    <Skill id={10190} /> {/* Cry of Frustration */}
                    <Skill id={10191} /> {/* Mind Wrack */}
                    <Skill id={10192} /> {/* Distortion */}
                    <Skill id={10287} /> {/* Diversion */}
                    <Skill id={49068} /> {/* Mind Wrack */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={10176} /> {/* Ether Feast */}
                    <Skill id={10177} /> {/* Mirror */}
                    <Skill id={10213} /> {/* Mantra of Recovery */}
                    <Skill id={21750} /> {/* Signet of the Ether */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
                  <Card.Body>
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
                    <Skill id={10232} /> {/* Signet of Domination */}
                    <Skill id={10234} /> {/* Signet of Midnight */}
                    <Skill id={10236} /> {/* Signet of Inspiration */}
                    <Skill id={10237} /> {/* Mantra of Concentration */}
                    <Skill id={10244} /> {/* Illusion of Life */}
                    <Skill id={10247} /> {/* Signet of Illusions */}
                    <Skill id={10267} /> {/* Phantasmal Disenchanter */}
                    <Skill id={10302} /> {/* Feedback */}
                    <Skill id={10341} /> {/* Phantasmal Defender */}
                    <Skill id={25541} /> {/* Illusion of Life */}
                    <Skill id={29578} /> {/* Mimic */}
                    <Skill id={34326} /> {/* Feedback */}
                    <Skill id={50414} /> {/* Veil */}
                    <Skill id={50440} /> {/* Null Field */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={10245} /> {/* Mass Invisibility */}
                    <Skill id={10311} /> {/* Time Warp */}
                    <Skill id={10377} /> {/* Time Warp */}
                    <Skill id={29519} /> {/* Signet of Humility */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* HoT / Heart of Thorns */}
        <Gw2card header="크로노맨서 : HoT(Heart Of Thorns)">
          
          <Card.Body>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  
                  <Card.Body>
                      <Gw2card header="Shield">
                        
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={30769} /> {/* Echo of Memory */}<br></br>
                                  <Skill id={29649} /> {/* Deja Vu */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={30643} /> {/* Tides of Time */}<br></br>
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
                    {/* Chronomancer */}
                    <TraitLine id={40} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
                  <Card.Body>
                    <Skill id={29830} /> {/* Continuum Split */}
                    <Skill id={30747} /> {/* Continuum Shift */}
                    <Skill id={56873} /> {/* Time Sink */}
                    <Skill id={56925} /> {/* Split Second */}
                    <Skill id={56928} /> {/* Rewinder */}
                    <Skill id={56930} /> {/* Split Second */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={30305} /> {/* Well of Eternity */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
                  <Card.Body>
                    <Skill id={29526} /> {/* Well of Precognition */}
                    <Skill id={29856} /> {/* Well of Senility */}
                    <Skill id={30525} /> {/* Well of Calamity */}
                    <Skill id={30814} /> {/* Well of Action */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={30359} /> {/* Gravity Well */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* PoF / Path of Fire */}
        <Gw2card header="미라지 : PoF(Path of Fire)">
          
          <Card.Body>
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
                                  <Skill id={41164} /> {/* Mirror Strikes */}
                                  <Skill id={44840} /> {/* Ethereal Chop */}
                                  <Skill id={44791} /> {/* Lacerating Chop */}<br></br>
                                  <Skill id={44321} /> {/* Imaginary Axes */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={45243} /> {/* Lingering Thoughts */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={43761} /> {/* Axes of Symmetry */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Greatsword">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={44241} /> {/* Split Surge */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
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
                                  <Skill id={42304} /> {/* Ether Barrage */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Staff">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={40184} /> {/* Chaos Vortex */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Sword">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={45230} /> {/* Mirage Thrust */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Spear">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={44864} /> {/* Ambush Assault */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Trident">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={39959} /> {/* Wave of Panic */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
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
                    {/* Mirage */}
                    <TraitLine id={59} resettable selectable />
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
                    <Skill id={40200} /> {/* False Oasis */}
                    <Skill id={44677} /> {/* Mirage Mirror */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
                  <Card.Body>
                    <Skill id={41065} /> {/* Crystal Sands */}
                    <Skill id={42851} /> {/* Mirage Advance */}
                    <Skill id={43064} /> {/* Sand through Glass */}
                    <Skill id={45046} /> {/* Illusionary Ambush */}
                    <Skill id={45666} /> {/* Mirage Retreat */}
                    <Skill id={50419} /> {/* Mirage Advance */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={45449} /> {/* Jaunt */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* EoD / End of Dragons */}
        <Gw2card header="버츄오소 : EoD(End of Dragons)">
          
          <Card.Body>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  
                  <Card.Body>
                      <Gw2card header="Dagger">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={62510} /> {/* Flying Cutter */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={62560} /> {/* Bladecall */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={62607} /> {/* Unstable Bladestorm */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Sword">
                        
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={62568} /> {/* Blade Leap */}<br></br>
                                  <Skill id={62675} /> {/* Returning Edge */}<br></br>
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
                    {/* Virtuoso */}
                    <TraitLine id={66} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
                  <Card.Body>
                    <Skill id={62586} /> {/* Bladesong Harmony */}
                    <Skill id={62597} /> {/* Bladeturn Requiem */}
                    <Skill id={62602} /> {/* Bladesong Dissonance */}
                    <Skill id={62616} /> {/* Bladesong Sorrow */}
                    <Skill id={62617} /> {/* Bladesong Harmony */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={62522} /> {/* Twin Blade Restoration */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
                  <Card.Body>
                    <Skill id={35637} /> {/* Sword of Decimation */}
                    <Skill id={43343} /> {/* Blade Renewal */}
                    <Skill id={45425} /> {/* Rain of Swords */}
                    <Skill id={62553} /> {/* Rain of Swords */}
                    <Skill id={62573} /> {/* Psychic Force */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={24755} /> {/* Thousand Cuts */}
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

export default ProfessionsMesmer;
