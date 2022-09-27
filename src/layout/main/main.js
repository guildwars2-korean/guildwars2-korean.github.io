import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from './home';

import ProfessionsElementalist from './skillsAndTraits/skillsAndTraits.elementalist';
import ProfessionsEngineer from './skillsAndTraits/skillsAndTraits.engineer';
import ProfessionsGuardian from './skillsAndTraits/skillsAndTraits.guardian';
import ProfessionsMesmer from './skillsAndTraits/skillsAndTraits.mesmer';
import ProfessionsNecromancer from './skillsAndTraits/skillsAndTraits.necromancer';
import ProfessionsRanger from './skillsAndTraits/skillsAndTraits.ranger';
import ProfessionsRevenant from './skillsAndTraits/skillsAndTraits.revenant';
import ProfessionsThief from './skillsAndTraits/skillsAndTraits.thief';
import ProfessionsWarrior from './skillsAndTraits/skillsAndTraits.warrior';

import AttributesAndBoonsAndConditions from './attributesAndBoonsAndConditions/attributesAndBoonsAndConditions';
import Board from './board/board';
import NotFound from './notFound/notFound';


function Main(props) {
	return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/attributesAndBoonsAndConditions" element={<AttributesAndBoonsAndConditions />}/>
                <Route path="/skillsAndTraits/elementalist" element={<ProfessionsElementalist />}/>
                <Route path="/skillsAndTraits/engineer" element={<ProfessionsEngineer />}/>
                <Route path="/skillsAndTraits/guardian" element={<ProfessionsGuardian />}/>
                <Route path="/skillsAndTraits/mesmer" element={<ProfessionsMesmer />}/>
                <Route path="/skillsAndTraits/necromancer" element={<ProfessionsNecromancer />}/>
                <Route path="/skillsAndTraits/ranger" element={<ProfessionsRanger />}/>
                <Route path="/skillsAndTraits/revenant" element={<ProfessionsRevenant />}/>
                <Route path="/skillsAndTraits/thief" element={<ProfessionsThief />}/>
                <Route path="/skillsAndTraits/warrior" element={<ProfessionsWarrior />}/>
                <Route path="/board" element={<Board />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
        </>
	);
};

export default Main;
