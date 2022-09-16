import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import Gw2card from '../../../components/gw2card';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsRanger() {
  return (
    <>
    <Container>
      <Row >
        {/* 오리지널 / Original */}
        <Gw2card header="레인저 : Original" defaultActiveKey="0">
          
          <Card.Body>
            <center>
              <img src="https://wiki.guildwars2.com/images/thumb/f/f5/Ranger_04_concept_art.png/350px-Ranger_04_concept_art.png"></img>
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
                                  <Skill id={12486} /> {/* Throw Dirt */}<br></br>
                                  <Skill id={12566} /> {/* Throw Knife */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={12485} /> {/* Thunderclap */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={12515} /> {/* Lick Wounds */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Axe">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={12466} /> {/* Ricochet */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={12480} /> {/* Splitblade */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={12490} /> {/* Winter's Bite */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={12638} /> {/* Path of Scars */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={12639} /> {/* Whirling Defense */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Dagger">
                        
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={12478} /> {/* Stalker's Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={12477} /> {/* Crippling Talon */}<br></br>
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
                                  <Skill id={12474} /> {/* Slash */}<br></br>
                                  <Skill id={12487} /> {/* Slice */}<br></br>
                                  <Skill id={12488} /> {/* Enduring Swing */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={12525} /> {/* Maul */}<br></br>
                                  <Skill id={46629} /> {/* Maul */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={12521} /> {/* Swoop */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={12522} /> {/* Counterattack */}<br></br>
                                  <Skill id={12523} /> {/* Counterattack Kick */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={12475} /> {/* Hilt Bash */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Longbow">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={12510} /> {/* Long Range Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={12509} /> {/* Rapid Fire */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={12573} /> {/* Hunter's Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={12511} /> {/* Point-Blank Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={12469} /> {/* Barrage */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Shortbow">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={12470} /> {/* Crossfire */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={12468} /> {/* Poison Volley */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={12517} /> {/* Quick Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={12507} /> {/* Crippling Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={12508} /> {/* Concussion Shot */}<br></br>
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
                                  <Skill id={31796} /> {/* Cosmic Ray */}<br></br>
                                  <Skill id={33387} /> {/* Cosmic Ray */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={31406} /> {/* Seed of Life */}<br></br>
                                  <Skill id={32242} /> {/* Seed of Life */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={31318} /> {/* Lunar Impact */}<br></br>
                                  <Skill id={32364} /> {/* Lunar Impact */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={31894} /> {/* Rejuvenating Tides */}<br></br>
                                  <Skill id={32253} /> {/* Rejuvenating Tides */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={31503} /> {/* Natural Convergence */}<br></br>
                                  <Skill id={34070} /> {/* Natural Convergence */}<br></br>
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
                                  <Skill id={12471} /> {/* Slash */}<br></br>
                                  <Skill id={12472} /> {/* Crippling Thrust */}<br></br>
                                  <Skill id={12473} /> {/* Precision Swipe */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={12482} /> {/* Monarch's Leap */}<br></br>
                                  <Skill id={12622} /> {/* Serpent's Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={12481} /> {/* Hornet Sting */}<br></br>
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
                                  <Skill id={12635} /> {/* Throw Torch */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={12504} /> {/* Bonfire */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Warhorn">
                        
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={12620} /> {/* Hunter's Call */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={12621} /> {/* Call of the Wild */}<br></br>
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
                                  <Skill id={12553} /> {/* Stab */}<br></br>
                                  <Skill id={12555} /> {/* Jab */}<br></br>
                                  <Skill id={12556} /> {/* Toxic Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={12559} /> {/* Swirling Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={12557} /> {/* Surging Maw */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={12561} /> {/* Counterstrike */}<br></br>
                                  <Skill id={12630} /> {/* Counter Throw */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={12552} /> {/* Man O' War */}<br></br>
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
                                  <Skill id={12526} /> {/* Splinter Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={12529} /> {/* Coral Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={12528} /> {/* Feeding Frenzy */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={12527} /> {/* Mercy Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={12530} /> {/* Ink Blast */}<br></br>
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
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
                  <Card.Body>
                    <Skill id={40729} /> {/* Worldly Impact */}
                    <Skill id={44626} /> {/* Spiritual Reprieve */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={12483} /> {/* Troll Unguent */}
                    <Skill id={12489} /> {/* Healing Spring */}
                    <Skill id={21773} /> {/* Water Spirit */}
                    <Skill id={21775} /> {/* Aqua Surge */}
                    <Skill id={31914} /> {/* "We Heal As One!" */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
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
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={12516} /> {/* "Strength of the Pack!" */}
                    <Skill id={12569} /> {/* Spirit of Nature */}
                    <Skill id={12580} /> {/* Entangle */}
                    <Skill id={12596} /> {/* Nature's Renewal */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* HoT / Heart of Thorns */}
        <Gw2card header="드루이드 : HoT(Heart Of Thorns)">
          
          <Card.Body>
            <center>
              <img src="https://wiki.guildwars2.com/images/thumb/8/8c/Spec_image_Druid.jpg/350px-Spec_image_Druid.jpg"></img>
            </center>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  
                  <Card.Body>
                      <Gw2card header="Staff">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={31710} /> {/* Solar Beam */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={31889} /> {/* Astral Wisp */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={31535} /> {/* Ancestral Grace */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={31700} /> {/* Vine Surge */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={31496} /> {/* Sublime Conversion */}<br></br>
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
                    {/* Druid */}
                    <TraitLine id={5} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
                  <Card.Body>
                    <Skill id={31411} /> {/* Release Celestial Avatar */}
                    <Skill id={31869} /> {/* Celestial Avatar */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={31407} /> {/* Glyph of Rejuvenation */}
                    <Skill id={31819} /> {/* Glyph of Rejuvenation */}
                    <Skill id={31867} /> {/* Glyph of Rejuvenation */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
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
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={31677} /> {/* Glyph of the Stars */}
                    <Skill id={55024} /> {/* Glyph of the Stars */}
                    <Skill id={55046} /> {/* Glyph of the Stars */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* PoF / Path of Fire */}
        <Gw2card header="소울비스트 : PoF(Path of Fire)">
          
          <Card.Body>
            <center>
              <img src="https://wiki.guildwars2.com/images/thumb/f/fd/Spec_image_Soulbeast.jpg/520px-Spec_image_Soulbeast.jpg"></img>
            </center>
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
                                  <Skill id={40301} /> {/* Leading Swipe */}<br></br>
                                  <Skill id={41800} /> {/* Serpent Stab */}<br></br>
                                  <Skill id={44278} /> {/* Deadly Delivery */}<br></br>
                                  <Skill id={45426} /> {/* Groundwork Gouge */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={43536} /> {/* Double Arc */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={46123} /> {/* Instinctive Engage */}<br></br>
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
                    {/* Soulbeast */}
                    <TraitLine id={55} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
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
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={44948} /> {/* Bear Stance */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
                  <Card.Body>
                    <Skill id={40498} /> {/* Vulture Stance */}
                    <Skill id={45142} /> {/* Griffon Stance */}
                    <Skill id={45789} /> {/* Dolyak Stance */}
                    <Skill id={45970} /> {/* Moa Stance */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={45717} /> {/* One Wolf Pack */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* EoD / End of Dragons */}
        <Gw2card header="언테임드 : EoD(End of Dragons)">
          
          <Card.Body>
            <center>
              <img src="https://wiki.guildwars2.com/images/thumb/b/bc/Untamed_concept_art_3.png/350px-Untamed_concept_art_3.png"></img>
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
                                  <Skill id={63129} /> {/* Sundering Volley */}<br></br>
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
                      <Gw2card header="Greatsword">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={63350} /> {/* Savage Slash */}<br></br>
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
                      <Gw2card header="Hammer">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={63118} /> {/* Hammer Strike */}<br></br>
                                  <Skill id={63222} /> {/* Hammer Slam */}<br></br>
                                  <Skill id={63337} /> {/* Heavy Smash */}<br></br>
                                  <Skill id={63438} /> {/* Relentless Whirl */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={63366} /> {/* Wild Swing */}<br></br>
                                  <Skill id={63335} /> {/* Unleashed Wild Swing */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={63075} /> {/* Overbearing Smash */}<br></br>
                                  <Skill id={63197} /> {/* Unleashed Overbearing Smash */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={63073} /> {/* Savage Shock Wave */}<br></br>
                                  <Skill id={63131} /> {/* Unleashed Savage Shock Wave */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={63330} /> {/* Thump */}<br></br>
                                  <Skill id={63208} /> {/* Unleashed Thump */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Longbow">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={63225} /> {/* Multishot */}<br></br>
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
                      <Gw2card header="Shortbow">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={63326} /> {/* Toxic Shot */}<br></br>
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
                                  <Skill id={63336} /> {/* Deft Strike */}<br></br>
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
                                  <Skill id={63065} /> {/* Vicious Pike */}<br></br>
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
                      <Gw2card header="Speargun">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={63301} /> {/* Jagged Fan */}<br></br>
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
                    {/* Untamed */}
                    <TraitLine id={72} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
                  <Card.Body>
                    <Skill id={63094} /> {/* Enveloping Haze */}
                    <Skill id={63147} /> {/* Unleash Ranger */}
                    <Skill id={63209} /> {/* Venomous Outburst */}
                    <Skill id={63258} /> {/* Rending Vines */}
                    <Skill id={63344} /> {/* Unleash Pet */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={63319} /> {/* Perilous Gift */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
                  <Card.Body>
                    <Skill id={63130} /> {/* Nature's Binding */}
                    <Skill id={63157} /> {/* Exploding Spores */}
                    <Skill id={63195} /> {/* Unnatural Traversal */}
                    <Skill id={63256} /> {/* Mutate Conditions */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={63163} /> {/* Forest's Fortification */}
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

export default ProfessionsRanger;
