import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css';
import 'discretize-monorepo-root/typeface-menomonia';

import { Container, Col, Row, Card} from 'react-bootstrap';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui';

function ProfessionsElementalist() {
  return (
    <>
    <Container>
      <Row style={{marginBottom: 10}}>
        {/* 오리지널 / Original */}
        <Card style={{padding: 0}}>
          <Card.Header>엘리멘탈리스트 : Original</Card.Header>
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
                                  <Skill id={5504} /> {/* Discharge Lightning */}<br></br>
                                  <Skill id={5608} /> {/* Water Fist */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={5564} /> {/* Vapor Form */}<br></br>
                                  <Skill id={5609} /> {/* Stone Kick */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={5505} /> {/* Grasping Earth */}<br></br>
                                  <Skill id={5610} /> {/* Steam Vent */}<br></br>
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
                                  <Skill id={15718} /> {/* Dragon's Claw */}<br></br>
                                  <Skill id={15716} /> {/* Vapor Blade */}<br></br>
                                  <Skill id={5489} /> {/* Lightning Whip */}<br></br>
                                  <Skill id={15717} /> {/* Impale */}<br></br>
                                  
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={5496} /> {/* Drake's Breath */}<br></br>
                                  <Skill id={5537} /> {/* Cone of Cold */}<br></br>
                                  <Skill id={5646} /> {/* Convergence */}<br></br>
                                  <Skill id={5525} /> {/* Ring of Earth */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={5644} /> {/* Burning Speed */}<br></br>
                                  <Skill id={5487} /> {/* Frozen Burst */}<br></br>
                                  <Skill id={5527} /> {/* Shocking Aura */}
                                  <Skill id={51662} /> {/* Transmute Lightning */}<br></br>
                                  <Skill id={5559} /> {/* Earthen Rush */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={5691} /> {/* Ring of Fire */}<br></br>
                                  <Skill id={5520} /> {/* Frost Aura */}<br></br>
                                  <Skill id={51646} /> {/* Transmute Frost */}<br></br>
                                  <Skill id={5529} /> {/* Ride the Lightning */}<br></br>
                                  <Skill id={5690} /> {/* Earthquake */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={5557} /> {/* Fire Grab */}<br></br>
                                  <Skill id={5558} /> {/* Cleansing Wave */}<br></br>
                                  <Skill id={5687} /> {/* Updraft */}<br></br>
                                  <Skill id={5522} /> {/* Churning Earth */}<br></br>
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
                                  <Skill id={5497} /> {/* Flamewall */}<br></br>
                                  <Skill id={5556} /> {/* Freezing Gust */}<br></br>
                                  <Skill id={5530} /> {/* Swirling Winds */}<br></br>
                                  <Skill id={5555} /> {/* Magnetic Wave */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={5678} /> {/* Fire Shield */}
                                  <Skill id={51711} /> {/* Transmute Fire */}<br></br>
                                  <Skill id={5490} /> {/* Comet */}<br></br>
                                  <Skill id={5521} /> {/* Obsidian Flesh */}<br></br>
                                  <Skill id={5562} /> {/* Gale */}<br></br>
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
                                  <Skill id={5508} /> {/* Flamestrike */}<br></br>
                                  <Skill id={5693} /> {/* Ice Shards */}<br></br>
                                  <Skill id={5526} /> {/* Arc Lightning */}<br></br>
                                  <Skill id={5500} /> {/* Stone Shards */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={5692} /> {/* Dragon's Tooth */}<br></br>
                                  <Skill id={5538} /> {/* Shatterstone */}<br></br>
                                  <Skill id={5561} /> {/* Lightning Strike */}<br></br>
                                  <Skill id={5695} /> {/* Rock Barrier */}
                                  <Skill id={5780} /> {/* Hurl */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={5675} /> {/* Phoenix */}<br></br>
                                  <Skill id={5510} /> {/* Water Trident */}<br></br>
                                  <Skill id={5694} /> {/* Blinding Flash */}<br></br>
                                  <Skill id={5696} /> {/* Dust Devil */}<br></br>
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
                                  <Skill id={5491} /> {/* Fireball */}<br></br>
                                  <Skill id={5549} /> {/* Water Blast */}<br></br>
                                  <Skill id={5518} /> {/* Chain Lightning */}<br></br>
                                  <Skill id={5519} /> {/* Stoning */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={5548} /> {/* Lava Font */}<br></br>
                                  <Skill id={5550} /> {/* Ice Spike */}<br></br>
                                  <Skill id={5552} /> {/* Lightning Surge */}<br></br>
                                  <Skill id={5528} /> {/* Eruption */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={5679} /> {/* Flame Burst */}<br></br>
                                  <Skill id={5681} /> {/* Geyser */}<br></br>
                                  <Skill id={5553} /> {/* Gust */}<br></br>
                                  <Skill id={5685} /> {/* Magnetic Aura */}
                                  <Skill id={51684} /> {/* Transmute Earth */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={5680} /> {/* Burning Retreat */}<br></br>
                                  <Skill id={5515} /> {/* Frozen Ground */}<br></br>
                                  <Skill id={5682} /> {/* Windborne Speed */}<br></br>
                                  <Skill id={5683} /> {/* Unsteady Ground */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={5501} /> {/* Meteor Shower */}<br></br>
                                  <Skill id={5551} /> {/* Healing Rain */}<br></br>
                                  <Skill id={5671} /> {/* Static Field */}<br></br>
                                  <Skill id={5686} /> {/* Shock Wave */}<br></br>
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
                                  <Skill id={5598} /> {/* Magma Orb */}<br></br>
                                  <Skill id={5604} /> {/* Water Missile */}<br></br>
                                  <Skill id={5656} /> {/* Forked Lightning */}<br></br>
                                  <Skill id={5657} /> {/* Rock Blade */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={5597} /> {/* Boil */}<br></br>
                                  <Skill id={5605} /> {/* Ice Globe */}<br></br>
                                  <Skill id={5655} /> {/* Electrocute */}<br></br>
                                  <Skill id={5658} /> {/* Rock Spray */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={5566} /> {/* Steam */}<br></br>
                                  <Skill id={5606} /> {/* Ice Wall */}<br></br>
                                  <Skill id={5652} /> {/* Air Pocket */}
                                  <Skill id={5653} /> {/* Vacuum */}<br></br>
                                  <Skill id={5662} /> {/* Magnetic Current */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={5599} /> {/* Lava Chains */}<br></br>
                                  <Skill id={5748} /> {/* Undercurrent */}<br></br>
                                  <Skill id={5648} /> {/* Air Bubble */}<br></br>
                                  <Skill id={5659} /> {/* Rock Anchor */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={5600} /> {/* Heat Wave */}<br></br>
                                  <Skill id={5607} /> {/* Tidal Wave */}<br></br>
                                  <Skill id={5650} /> {/* Lightning Cage */}<br></br>
                                  <Skill id={5661} /> {/* Murky Water */}<br></br>
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
                    {/* Water */}
                    <TraitLine id={17} resettable selectable />
                    {/* Earth */}
                    <TraitLine id={26} resettable selectable />
                    {/* Fire */}
                    <TraitLine id={31} resettable selectable />
                    {/* Arcane */}
                    <TraitLine id={37} resettable selectable />
                    {/* Air */}
                    <TraitLine id={41} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6" style={{marginBottom: 10}}>
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={5492} /> {/* Fire Attunement */}
                    <Skill id={5493} /> {/* Water Attunement */}
                    <Skill id={5494} /> {/* Air Attunement */}
                    <Skill id={5495} /> {/* Earth Attunement */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={21656} /> {/* Arcane Brilliance */}
                    <Skill id={34609} /> {/* Glyph of Elemental Harmony */}
                    <Skill id={34651} /> {/* Glyph of Elemental Harmony */}
                    <Skill id={34724} /> {/* Glyph of Elemental Harmony */}
                    <Skill id={34743} /> {/* Glyph of Elemental Harmony */}
                    <Skill id={5503} /> {/* Signet of Restoration */}
                    <Skill id={5507} /> {/* Ether Renewal */}
                    <Skill id={5569} /> {/* Glyph of Elemental Harmony */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={5540} /> {/* Conjure Flame Axe */}
                    <Skill id={5567} /> {/* Conjure Frost Bow */}
                    <Skill id={5624} /> {/* Conjure Lightning Hammer */}
                    <Skill id={5546} /> {/* Conjure Earth Shield */}
                    <Skill id={5535} /> {/* Cleansing Fire */}
                    <Skill id={15795} /> {/* Mist Form */}
                    <Skill id={5554} /> {/* Mist Form */}
                    <Skill id={5536} /> {/* Lightning Flash */}
                    <Skill id={50447} /> {/* Lightning Flash */}
                    <Skill id={5639} /> {/* Armor of Earth */}
                    <Skill id={5542} /> {/* Signet of Fire */}
                    <Skill id={5570} /> {/* Signet of Water */}
                    <Skill id={49056} /> {/* Signet of Water */}
                    <Skill id={5572} /> {/* Signet of Air */}
                    <Skill id={5571} /> {/* Signet of Earth */}
                    <Skill id={22572} /> {/* Arcane Wave */}
                    <Skill id={24407} /> {/* Renewal of Fire */}
                    <Skill id={24409} /> {/* Renewal of Air */}
                    <Skill id={24410} /> {/* Renewal of Water */}
                    <Skill id={24411} /> {/* Renewal of Earth */}
                    <Skill id={5506} /> {/* Glyph of Elemental Power */}
                    <Skill id={34736} /> {/* Glyph of Elemental Power */}
                    <Skill id={34772} /> {/* Glyph of Elemental Power */}
                    <Skill id={34637} /> {/* Glyph of Elemental Power */}
                    <Skill id={34714} /> {/* Glyph of Elemental Power */}
                    <Skill id={5734} /> {/* Glyph of Storms */}
                    <Skill id={5736} /> {/* Firestorm */}
                    <Skill id={5735} /> {/* Ice Storm */}
                    <Skill id={5737} /> {/* Lightning Storm */}
                    <Skill id={5738} /> {/* Sandstorm */}
                    <Skill id={5502} /> {/* Glyph of Lesser Elementals */}
                    <Skill id={25486} /> {/* Glyph of Lesser Elementals */}
                    <Skill id={25487} /> {/* Glyph of Lesser Elementals */}
                    <Skill id={25495} /> {/* Glyph of Lesser Elementals */}
                    <Skill id={25497} /> {/* Glyph of Lesser Elementals */}
                    <Skill id={5573} /> {/* Glyph of Renewal */}
                    <Skill id={5762} /> {/* Renewal of Fire */}
                    <Skill id={5763} /> {/* Renewal of Water */}
                    <Skill id={5760} /> {/* Renewal of Air */}
                    <Skill id={5761} /> {/* Renewal of Earth */}
                    <Skill id={5638} /> {/* Arcane Wave */}
                    <Skill id={5641} /> {/* Arcane Shield */}
                    <Skill id={5635} /> {/* Arcane Power */}
                    <Skill id={5539} /> {/* Arcane Blast */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={25480} /> {/* Shocking Bolt */}
                    <Skill id={25488} /> {/* Glyph of Elementals */}
                    <Skill id={25489} /> {/* Glyph of Elementals */}
                    <Skill id={25490} /> {/* Glyph of Elementals */}
                    <Skill id={25491} /> {/* Glyph of Elementals */}
                    <Skill id={25492} /> {/* Crashing Waves */}
                    <Skill id={25498} /> {/* Stomp */}
                    <Skill id={25499} /> {/* Flame Barrage */}
                    <Skill id={44918} /> {/* Lesser Fiery Eruption */}
                    <Skill id={5516} /> {/* Conjure Fiery Greatsword */}
                    <Skill id={5534} /> {/* Tornado */}
                    <Skill id={5602} /> {/* Whirlpool */}
                    <Skill id={5666} /> {/* Glyph of Elementals */}
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
          <Card.Header>템페스트 : HoT(Heart Of Thorns)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12" style={{marginBottom: 10}}>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
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
                                  <Skill id={29548} /> {/* Heat Sync */}<br></br>
                                  <Skill id={30864} /> {/* Tidal Surge */}<br></br>
                                  <Skill id={30008} /> {/* Cyclone */}<br></br>
                                  <Skill id={29453} /> {/* Sand Squall */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={29533} /> {/* Wildfire */}<br></br>
                                  <Skill id={30446} /> {/* Water Globe */}<br></br>
                                  <Skill id={30795} /> {/* Lightning Orb */}<br></br>
                                  <Skill id={30336} /> {/* Dust Storm */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Card.Body>
                  </Card>
              </Col>
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Tempest */}
                    <TraitLine id={48} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29706} /> {/* Overload Fire */}
                    <Skill id={29415} /> {/* Overload Water */}
                    <Skill id={29719} /> {/* Overload Air */}
                    <Skill id={29618} /> {/* Overload Earth */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29535} /> {/* "Wash the Pain Away!" */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={30662} /> {/* "Feel the Burn!" */}
                    <Skill id={29948} /> {/* "Flash-Freeze!" */}
                    <Skill id={30047} /> {/* "Eye of the Storm!" */}
                    <Skill id={30432} /> {/* "Aftershock!" */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={29968} /> {/* "Rebound!" */}
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
          <Card.Header>위버 : PoF(Path of Fire)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12">
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Dagger</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={42379} /> {/* Ashen Blast */}<br></br>
                                  <Skill id={42330} /> {/* Steam Surge */}<br></br>
                                  <Skill id={44652} /> {/* Plasma Burst */}<br></br>
                                  <Skill id={46140} /> {/* Katabatic Wind */}<br></br>
                                  <Skill id={46018} /> {/* Mud Slide */}<br></br>
                                  <Skill id={40963} /> {/* Grinding Stones */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Scepter</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={42954} /> {/* Fracturing Strike */}<br></br>
                                  <Skill id={42181} /> {/* Fiery Frost */}<br></br>
                                  <Skill id={43576} /> {/* Plasma Beam */}<br></br>
                                  <Skill id={45742} /> {/* Glacial Drift */}<br></br>
                                  <Skill id={46014} /> {/* Stone Tide */}<br></br>
                                  <Skill id={40794} /> {/* Earthen Synergy */}<br></br>
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
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={41125} /> {/* Plasma Blast */}<br></br>
                                  <Skill id={43762} /> {/* Pyroclastic Blast */}<br></br>
                                  <Skill id={40332} /> {/* Pressure Blast */}<br></br>
                                  <Skill id={44550} /> {/* Lahar */}<br></br>
                                  <Skill id={41184} /> {/* Monsoon */}<br></br>
                                  <Skill id={42321} /> {/* Pile Driver */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
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
                                  <Skill id={39964} /> {/* Fire Strike */}
                                  <Skill id={40326} /> {/* Fire Swipe */}
                                  <Skill id={43657} /> {/* Searing Slash */}<br></br>
                                  <Skill id={41052} /> {/* Seiche */}
                                  <Skill id={43199} /> {/* Breaking Wave */}
                                  <Skill id={45983} /> {/* Clapotis */}<br></br>
                                  <Skill id={44681} /> {/* Charged Strike */}
                                  <Skill id={45216} /> {/* Call Lightning */}
                                  <Skill id={45259} /> {/* Polaric Slash */}<br></br>
                                  <Skill id={46024} /> {/* Crystalline Sunder */}
                                  <Skill id={43080} /> {/* Crystalline Strike */}
                                  <Skill id={43616} /> {/* Crystal Slash */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={45313} /> {/* Flame Uprising */}<br></br>
                                  <Skill id={44405} /> {/* Riptide */}<br></br>
                                  <Skill id={44998} /> {/* Polaric Leap */}<br></br>
                                  <Skill id={40709} /> {/* Earthen Vortex */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={44451} /> {/* Cauterizing Strike */}<br></br>
                                  <Skill id={41167} /> {/* Aqua Siphon */}<br></br>
                                  <Skill id={43803} /> {/* Quantum Strike */}<br></br>
                                  <Skill id={40139} /> {/* Rust Frenzy */}<br></br>
                                  <Skill id={46447} /> {/* Lava Skin */}<br></br>
                                  <Skill id={42271} /> {/* Twin Strike */}<br></br>
                                  <Skill id={43074} /> {/* Pyro Vortex */}<br></br>
                                  <Skill id={40170} /> {/* Natural Frenzy */}<br></br>
                                  <Skill id={42867} /> {/* Shearing Edge */}<br></br>
                                  <Skill id={46295} /> {/* Gale Strike */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Trident</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={41712} /> {/* Plasmic Strike */}<br></br>
                                  <Skill id={46185} /> {/* Molten Burst */}<br></br>
                                  <Skill id={40378} /> {/* Hydrothermal Vent */}<br></br>
                                  <Skill id={46360} /> {/* Absolute Zero */}<br></br>
                                  <Skill id={41001} /> {/* Elemental Compression */}<br></br>
                                  <Skill id={39981} /> {/* Sodden Swath */}<br></br>
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
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Weaver */}
                    <TraitLine id={56} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={44239} /> {/* Aquatic Stance */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={44926} /> {/* Stone Resonance */}
                    <Skill id={44612} /> {/* Unravel */}
                    <Skill id={45746} /> {/* Twist of Fate */}
                    <Skill id={40183} /> {/* Primordial Stance */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={43638} /> {/* Weave Self */}
                    <Skill id={44637} /> {/* Tailored Victory */}
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
          <Card.Header>카탈리스트 : EoD(End of Dragons)</Card.Header>
          <Card.Body>
            <Row>
              <Col xl="12" style={{marginBottom: 10}}>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>무기 스킬</Card.Header>
                  <Card.Body>
                      <Card style={{marginBottom: 10}}>
                        <Card.Header>Hammer</Card.Header>
                        <Card.Body>
                          <Row>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>1</Card.Header>
                                <Card.Body>
                                  <Skill id={62925} /> {/* Singeing Strike */}<br></br>
                                  <Skill id={62694} /> {/* Water Rush */}
                                  <Skill id={62862} /> {/* Chilling Crack */}
                                  <Skill id={62865} /> {/* Stream Strike */}<br></br>
                                  <Skill id={62747} /> {/* Wind Slam */}<br></br>
                                  <Skill id={62683} /> {/* Stonestrike */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>2</Card.Header>
                                <Card.Body>
                                  <Skill id={62884} /> {/* Surging Flames */}<br></br>
                                  <Skill id={62958} /> {/* Rain of Blows */}<br></br>
                                  <Skill id={62812} /> {/* Hurricane of Pain */}<br></br>
                                  <Skill id={62976} /> {/* Whirling Stones */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>3</Card.Header>
                                <Card.Body>
                                  <Skill id={62758} /> {/* Flame Wheel */}
                                  <Skill id={62876} /> {/* Grand Finale */}<br></br>
                                  <Skill id={62834} /> {/* Icy Coil */}<br></br>
                                  <Skill id={62887} /> {/* Crescent Wind */}<br></br>
                                  <Skill id={62975} /> {/* Rocky Loop */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>4</Card.Header>
                                <Card.Body>
                                  <Skill id={62807} /> {/* Triple Sear */}<br></br>
                                  <Skill id={62948} /> {/* Crashing Font */}<br></br>
                                  <Skill id={62947} /> {/* Wind Storm */}<br></br>
                                  <Skill id={62992} /> {/* Immutable Stone */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{marginBottom: 10}}>
                                <Card.Header>5</Card.Header>
                                <Card.Body>
                                  <Skill id={62910} /> {/* Molten End */}<br></br>
                                  <Skill id={62843} /> {/* Cleansing Typhoon */}<br></br>
                                  <Skill id={62716} /> {/* Shock Blast */}<br></br>
                                  <Skill id={62778} /> {/* Ground Pound */}<br></br>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Card.Body>
                  </Card>
              </Col>
              <Col xl="6">
                {/* 특성 / Traits */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>특성</Card.Header>
                  <Card.Body>
                    {/* Catalyst */}
                    <TraitLine id={67} resettable selectable />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl="6">
                {/* 스킬 / Skills */}
                <Card style={{marginBottom: 10}}>
                  <Card.Header>직업 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62813} /> {/* Deploy Jade Sphere */}
                    <Skill id={63396} /> {/* Deploy Jade Sphere */}
                    <Skill id={63458} /> {/* Deploy Jade Sphere */}
                    <Skill id={62723} /> {/* Deploy Jade Sphere */}
                    <Skill id={63416} /> {/* Deploy Jade Sphere */}
                    <Skill id={63461} /> {/* Deploy Jade Sphere */}
                    <Skill id={62940} /> {/* Deploy Jade Sphere */}
                    <Skill id={63439} /> {/* Deploy Jade Sphere */}
                    <Skill id={63459} /> {/* Deploy Jade Sphere */}
                    <Skill id={62837} /> {/* Deploy Jade Sphere */}
                    <Skill id={63454} /> {/* Deploy Jade Sphere */}
                    <Skill id={63472} /> {/* Deploy Jade Sphere */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>힐 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62827} /> {/* Soothing Water */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>유틸리티 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62698} /> {/* Shattering Ice */}
                    <Skill id={62826} /> {/* Fortified Earth */}
                    <Skill id={62965} /> {/* Relentless Fire */}
                    <Skill id={62982} /> {/* Invigorating Air */}
                  </Card.Body>
                </Card>
                <Card style={{marginBottom: 10}}>
                  <Card.Header>엘리트 스킬</Card.Header>
                  <Card.Body>
                    <Skill id={62725} /> {/* Elemental Celerity */}
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

export default ProfessionsElementalist;
