import React from 'react';
import './App.css';

import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Main from './layout/main/main';

import 'bootstrap/dist/css/bootstrap.min.css';
import { TraitLine, Skill } from 'discretize-monorepo-root/gw2-ui'


function App() {
  return (
    <>
    <div class="container">
      <div id="accordion">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              Original
            </h5>
          </div>

          <div class="collapse show">
            <div class="card">
              <div class="card-header">
                <h6 class="mb-0">
                  특성
                </h6>
              </div>
              <div class="card-body">
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
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h6 class="mb-0">
                  스킬
                </h6>
              </div>
              <div class="card-body flex">
                <Skill id={15795} /> {/* Mist Form */}
                <Skill id={21656} /> {/* Arcane Brilliance */}
                <Skill id={22572} /> {/* Arcane Wave */}
                <Skill id={24407} /> {/* Renewal of Fire */}
                <Skill id={24409} /> {/* Renewal of Air */}
                <Skill id={24410} /> {/* Renewal of Water */}
                <Skill id={24411} /> {/* Renewal of Earth */}
                <Skill id={25486} /> {/* Glyph of Lesser Elementals */}
                <Skill id={25487} /> {/* Glyph of Lesser Elementals */}
                <Skill id={25495} /> {/* Glyph of Lesser Elementals */}
                <Skill id={25497} /> {/* Glyph of Lesser Elementals */}
                <Skill id={29535} /> {/* "Wash the Pain Away!" */}
                <Skill id={29948} /> {/* "Flash-Freeze!" */}
                <Skill id={30047} /> {/* "Eye of the Storm!" */}
                <Skill id={30432} /> {/* "Aftershock!" */}
                <Skill id={30662} /> {/* "Feel the Burn!" */}
                <Skill id={34609} /> {/* Glyph of Elemental Harmony */}
                <Skill id={34637} /> {/* Glyph of Elemental Power */}
                <Skill id={34651} /> {/* Glyph of Elemental Harmony */}
                <Skill id={34714} /> {/* Glyph of Elemental Power */}
                <Skill id={34724} /> {/* Glyph of Elemental Harmony */}
                <Skill id={34736} /> {/* Glyph of Elemental Power */}
                <Skill id={34743} /> {/* Glyph of Elemental Harmony */}
                <Skill id={34772} /> {/* Glyph of Elemental Power */}
                <Skill id={40183} /> {/* Primordial Stance */}
                <Skill id={44239} /> {/* Aquatic Stance */}
                <Skill id={44612} /> {/* Unravel */}
                <Skill id={44926} /> {/* Stone Resonance */}
                <Skill id={45746} /> {/* Twist of Fate */}
                <Skill id={49056} /> {/* Signet of Water */}
                <Skill id={50447} /> {/* Lightning Flash */}
                <Skill id={5502} /> {/* Glyph of Lesser Elementals */}
                <Skill id={5503} /> {/* Signet of Restoration */}
                <Skill id={5506} /> {/* Glyph of Elemental Power */}
                <Skill id={5507} /> {/* Ether Renewal */}
                <Skill id={5535} /> {/* Cleansing Fire */}
                <Skill id={5536} /> {/* Lightning Flash */}
                <Skill id={5539} /> {/* Arcane Blast */}
                <Skill id={5540} /> {/* Conjure Flame Axe */}
                <Skill id={5542} /> {/* Signet of Fire */}
                <Skill id={5546} /> {/* Conjure Earth Shield */}
                <Skill id={5554} /> {/* Mist Form */}
                <Skill id={5567} /> {/* Conjure Frost Bow */}
                <Skill id={5569} /> {/* Glyph of Elemental Harmony */}
                <Skill id={5570} /> {/* Signet of Water */}
                <Skill id={5571} /> {/* Signet of Earth */}
                <Skill id={5572} /> {/* Signet of Air */}
                <Skill id={5573} /> {/* Glyph of Renewal */}
                <Skill id={5624} /> {/* Conjure Lightning Hammer */}
                <Skill id={5635} /> {/* Arcane Power */}
                <Skill id={5638} /> {/* Arcane Wave */}
                <Skill id={5639} /> {/* Armor of Earth */}
                <Skill id={5641} /> {/* Arcane Shield */}
                <Skill id={5734} /> {/* Glyph of Storms */}
                <Skill id={5735} /> {/* Ice Storm */}
                <Skill id={5736} /> {/* Firestorm */}
                <Skill id={5737} /> {/* Lightning Storm */}
                <Skill id={5738} /> {/* Sandstorm */}
                <Skill id={5760} /> {/* Renewal of Air */}
                <Skill id={5761} /> {/* Renewal of Earth */}
                <Skill id={5762} /> {/* Renewal of Fire */}
                <Skill id={5763} /> {/* Renewal of Water */}
                <Skill id={62698} /> {/* Shattering Ice */}
                <Skill id={62826} /> {/* Fortified Earth */}
                <Skill id={62827} /> {/* Soothing Water */}
                <Skill id={62965} /> {/* Relentless Fire */}
                <Skill id={62982} /> {/* Invigorating Air */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="accordion">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              HOT(Heart of Throne)
            </h5>
          </div>

          <div class="collapse show">
            <div class="card-body">
              {/* Tempest */}
              <TraitLine id={48} resettable selectable />
            </div>
          </div>
        </div>
      </div>
      <div id="accordion">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              POF(Path Of Fire)
            </h5>
          </div>

          <div class="collapse show">
            <div class="card-body">
              {/* Weaver */}
              <TraitLine id={56} resettable selectable />
            </div>
          </div>
        </div>
      </div>
      <div id="accordion">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              EOD(End Of Dragons)
            </h5>
          </div>

          <div class="collapse show">
            <div class="card-body">
              {/* Catalyst */}
              <TraitLine id={67} resettable selectable />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
