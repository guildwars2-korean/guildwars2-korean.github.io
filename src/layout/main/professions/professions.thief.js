import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import Gw2card from '../../../components/gw2card';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsThief() {
  return (
    <>
    <Container>
      <Row >
        {/* 오리지널 / Original */}
        <Gw2card header="시프 : Original">
          
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
                                  <Skill id={13003} /> {/* Trail of Knives */}<br></br>
                                  <Skill id={13138} /> {/* Venomous Knife */}<br></br>
                                  <Skill id={13079} /> {/* Diving Knife */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={13140} /> {/* Shadow Escape */}<br></br>
                                  <Skill id={13081} /> {/* Cheap Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={13033} /> {/* Smoke Bomb */}<br></br>
                                  <Skill id={13080} /> {/* Vanish in the Deep */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Dagger">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={13004} /> {/* Double Strike */}
                                  <Skill id={13087} /> {/* Wild Strike */}
                                  <Skill id={13108} /> {/* Lotus Strike */}<br></br>
                                  <Skill id={13005} /> {/* Backstab */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={13097} /> {/* Heartseeker */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={13006} /> {/* Death Blossom */}<br></br>
                                  <Skill id={13040} /> {/* Shadow Shot */}<br></br>
                                  <Skill id={13110} /> {/* Twisting Fangs */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={13019} /> {/* Dancing Dagger */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={16432} /> {/* Cloak and Dagger */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Pistol">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={13084} /> {/* Vital Shot */}<br></br>
                                  <Skill id={13115} /> {/* Sneak Attack */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={13008} /> {/* Bola Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={13010} /> {/* Shadow Strike */}<br></br>
                                  <Skill id={13011} /> {/* Unload */}<br></br>
                                  <Skill id={13111} /> {/* Repeater */}<br></br>
                                  <Skill id={59526} /> {/* Repeater */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={13012} /> {/* Head Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={13113} /> {/* Black Powder */}<br></br>
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
                                  <Skill id={13022} /> {/* Trick Shot */}<br></br>
                                  <Skill id={13129} /> {/* Surprise Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={13041} /> {/* Cluster Bomb */}<br></br>
                                  <Skill id={13043} /> {/* Detonate Cluster */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={13083} /> {/* Disabling Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={13024} /> {/* Choking Gas */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={13025} /> {/* Infiltrator's Arrow */}<br></br>
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
                                  <Skill id={13009} /> {/* Slice */}<br></br>
                                  <Skill id={13088} /> {/* Slash */}<br></br>
                                  <Skill id={13116} /> {/* Crippling Strike */}<br></br>
                                  <Skill id={13114} /> {/* Tactical Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={13015} /> {/* Infiltrator's Strike */}<br></br>
                                  <Skill id={13128} /> {/* Infiltrator's Return */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={13007} /> {/* Larcenous Strike */}<br></br>
                                  <Skill id={13016} /> {/* Flanking Strike */}<br></br>
                                  <Skill id={13031} /> {/* Pistol Whip */}<br></br>
                                  <Skill id={13112} /> {/* Stab */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
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
                                  <Skill id={13119} /> {/* Stab */}<br></br>
                                  <Skill id={13120} /> {/* Jab */}<br></br>
                                  <Skill id={13121} /> {/* Poison Tip Strike */}<br></br>
                                  <Skill id={13125} /> {/* Deadly Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={13069} /> {/* Flanking Dive */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={13122} /> {/* Nine-Tailed Strike */}<br></br>
                                  <Skill id={13130} /> {/* Break Stance */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={13070} /> {/* Tow Line */}<br></br>
                                  <Skill id={50379} /> {/* Hooked Spear */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={13068} /> {/* Shadow Assault */}<br></br>
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
                                  <Skill id={13072} /> {/* Piercing Shot */}<br></br>
                                  <Skill id={13126} /> {/* The Ripper */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={13073} /> {/* Deluge */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={13074} /> {/* Escape */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={13075} /> {/* Crippling Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={13076} /> {/* Ink Shot */}<br></br>
                                  <Skill id={13078} /> {/* Smoke Trail */}<br></br>
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
                    {/* Shadow Arts */}
                    <TraitLine id={20} resettable selectable />
                    {/* Deadly Arts */}
                    <TraitLine id={28} resettable selectable />
                    {/* Critical Strikes */}
                    <TraitLine id={35} resettable selectable />
                    {/* Trikery */}
                    <TraitLine id={44} resettable selectable />
                    {/* Acrobatics */}
                    <TraitLine id={54} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
                  <Card.Body>
                    <Skill id={13014} /> {/* Steal */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={13021} /> {/* Withdraw */}
                    <Skill id={13027} /> {/* Hide in Shadows */}
                    <Skill id={13050} /> {/* Signet of Malice */}
                    <Skill id={21778} /> {/* Skelk Venom */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
                  <Card.Body>
                    <Skill id={13002} /> {/* Shadowstep */}
                    <Skill id={13020} /> {/* Scorpion Wire */}
                    <Skill id={13026} /> {/* Prepare Thousand Needles */}
                    <Skill id={13028} /> {/* Caltrops */}
                    <Skill id={13035} /> {/* Roll for Initiative */}
                    <Skill id={13037} /> {/* Spider Venom */}
                    <Skill id={13038} /> {/* Prepare Shadow Portal */}
                    <Skill id={13044} /> {/* Blinding Powder */}
                    <Skill id={13046} /> {/* Assassin's Signet */}
                    <Skill id={13055} /> {/* Skale Venom */}
                    <Skill id={13056} /> {/* Prepare Seal Area */}
                    <Skill id={13057} /> {/* Prepare Pitfall */}
                    <Skill id={13060} /> {/* Signet of Shadows */}
                    <Skill id={13062} /> {/* Signet of Agility */}
                    <Skill id={13064} /> {/* Infiltrator's Signet */}
                    <Skill id={13065} /> {/* Smoke Screen */}
                    <Skill id={13066} /> {/* Haste */}
                    <Skill id={13093} /> {/* Devourer Venom */}
                    <Skill id={13096} /> {/* Ice Drake Venom */}
                    <Skill id={13099} /> {/* Seal Area */}
                    <Skill id={13106} /> {/* Shadow Return */}
                    <Skill id={13117} /> {/* Shadow Refuge */}
                    <Skill id={16435} /> {/* Shadow Portal */}
                    <Skill id={45672} /> {/* Shadow Swap */}
                    <Skill id={56880} /> {/* Pitfall */}
                    <Skill id={56898} /> {/* Thousand Needles */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={13082} /> {/* Thieves Guild */}
                    <Skill id={13085} /> {/* Dagger Storm */}
                    <Skill id={13132} /> {/* Basilisk Venom */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* HoT / Heart of Thorns */}
        <Gw2card header="데어데블 : HoT(Heart Of Thorns)">
          
          <Card.Body>
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
                                  <Skill id={30135} /> {/* Staff Bash */}<br></br>
                                  <Skill id={30614} /> {/* Staff Strike */}<br></br>
                                  <Skill id={30434} /> {/* Punishing Strikes */}<br></br>
                                  <Skill id={30210} /> {/* Hook Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={29911} /> {/* Weakening Charge */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={30520} /> {/* Debilitating Arc */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={30775} /> {/* Dust Strike */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={30597} /> {/* Vault */}<br></br>
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
                    {/* Daredevil */}
                    <TraitLine id={7} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
                  <Card.Body>
                    <Skill id={55031} /> {/* Swipe */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={30400} /> {/* Channeled Vigor */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
                  <Card.Body>
                    <Skill id={30369} /> {/* Impairing Daggers */}
                    <Skill id={30519} /> {/* Reflexive Strike */}
                    <Skill id={30568} /> {/* Distracting Daggers */}
                    <Skill id={30661} /> {/* Bandit's Defense */}
                    <Skill id={30693} /> {/* Palm Strike */}
                    <Skill id={30868} /> {/* Fist Flurry */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={29516} /> {/* Impact Strike */}
                    <Skill id={29639} /> {/* Finishing Blow */}
                    <Skill id={30077} /> {/* Uppercut */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* PoF / Path of Fire */}
        <Gw2card header="데드아이 : PoF(Path of Fire)">
          
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
                                  <Skill id={50481} /> {/* Malicious Backstab */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Gw2card>
                      <Gw2card header="Pistol">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={50466} /> {/* Malicious Sneak Attack */}<br></br>
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
                                  <Skill id={41422} /> {/* Brutal Aim */}<br></br>
                                  <Skill id={44087} /> {/* Death's Judgment */}<br></br>
                                  <Skill id={40710} /> {/* Deadly Aim */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={41494} /> {/* Skirmisher's Shot */}<br></br>
                                  <Skill id={44591} /> {/* Spotter's Shot */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={43916} /> {/* Double Tap */}<br></br>
                                  <Skill id={44695} /> {/* Three Round Burst */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="4">
                                
                                <Card.Body>
                                  <Skill id={41937} /> {/* Death's Retreat */}<br></br>
                                  <Skill id={40436} /> {/* Sniper's Cover */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="5">
                                
                                <Card.Body>
                                  <Skill id={40600} /> {/* Kneel */}<br></br>
                                  <Skill id={41068} /> {/* Free Action */}<br></br>
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
                                  <Skill id={50451} /> {/* Malicious Surprise Shot */}<br></br>
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
                                  <Skill id={50484} /> {/* Malicious Tactical Strike */}<br></br>
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
                                  <Skill id={50417} /> {/* Malicious Deadly Strike */}<br></br>
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
                                  <Skill id={50449} /> {/* Malicious Ripper */}<br></br>
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
                    {/* Deadeye */}
                    <TraitLine id={58} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
                  <Card.Body>
                    <Skill id={39960} /> {/* Steal Warmth */}
                    <Skill id={40133} /> {/* Steal Resistance */}
                    <Skill id={40888} /> {/* Steal Precision */}
                    <Skill id={40903} /> {/* Steal Health */}
                    <Skill id={40904} /> {/* Steal Strength */}
                    <Skill id={42863} /> {/* Steal Time */}
                    <Skill id={43373} /> {/* Steal Durability */}
                    <Skill id={43390} /> {/* Deadeye's Mark */}
                    <Skill id={43768} /> {/* Steal Defenses */}
                    <Skill id={44526} /> {/* Steal Mobility */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={45088} /> {/* Malicious Restoration */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
                  <Card.Body>
                    <Skill id={41158} /> {/* Shadow Flare */}
                    <Skill id={41205} /> {/* Binding Shadow */}
                    <Skill id={41372} /> {/* Mercy */}
                    <Skill id={46335} /> {/* Shadow Gust */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={45508} /> {/* Shadow Meld */}
                  </Card.Body>
                </Gw2card>
              </Col>
            </Row>
          </Card.Body>
        </Gw2card>
      </Row>
      <Row >
        {/* EoD / End of Dragons */}
        <Gw2card header="스펙터 : EoD(End of Dragons)">
          
          <Card.Body>
            <Row>
              <Col xl="12" >
                <Gw2card header="무기 스킬">
                  
                  <Card.Body>
                      <Gw2card header="Scepter">
                        
                        <Card.Body>
                          <Row>
                            <Col>
                              <Gw2card header="1">
                                
                                <Card.Body>
                                  <Skill id={50801} /> {/* Shadow Bolt */}<br></br>
                                  <Skill id={63134} /> {/* Triple Bolt */}<br></br>
                                  <Skill id={63182} /> {/* Double Bolt */}<br></br>
                                  <Skill id={63314} /> {/* Shadowsquall */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="2">
                                
                                <Card.Body>
                                  <Skill id={63351} /> {/* Shadow Sap */}<br></br>
                                </Card.Body>
                              </Gw2card>
                            </Col>
                            <Col>
                              <Gw2card header="3">
                                
                                <Card.Body>
                                  <Skill id={63154} /> {/* Triple Threat */}<br></br>
                                  <Skill id={63128} /> {/* Endless Night */}<br></br>
                                  <Skill id={63254} /> {/* Twilight Combo */}<br></br>
                                  <Skill id={63267} /> {/* Measured Shot */}<br></br>
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
                    {/* Specter */}
                    <TraitLine id={71} resettable selectable />
                  </Card.Body>
                </Gw2card>
              </Col>
              <Col xl="6" >
                {/* 스킬 / Skills */}
                <Gw2card header="직업 스킬">
                  
                  <Card.Body>
                    <Skill id={63067} /> {/* Siphon */}
                    <Skill id={63155} /> {/* Enter Shadow Shroud */}
                    <Skill id={63251} /> {/* Exit Shadow Shroud */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="힐 스킬">
                  
                  <Card.Body>
                    <Skill id={63292} /> {/* Well of Gloom */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="유틸리티 스킬">
                  
                  <Card.Body>
                    <Skill id={63230} /> {/* Well of Silence */}
                    <Skill id={63276} /> {/* Well of Sorrow */}
                    <Skill id={63294} /> {/* Well of Tears */}
                    <Skill id={63323} /> {/* Well of Bounty */}
                  </Card.Body>
                </Gw2card>
                <Gw2card header="엘리트 스킬">
                  
                  <Card.Body>
                    <Skill id={63275} /> {/* Shadowfall */}
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

export default ProfessionsThief;
