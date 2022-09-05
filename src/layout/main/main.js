import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from './home';
import ProfessionsElementalist from './professions/professions.elementalist';
import ProfessionsEngineer from './professions/professions.engineer';
import ProfessionsGuardian from './professions/professions.guardian';
import ProfessionsMesmer from './professions/professions.mesmer';
import ProfessionsNecromancer from './professions/professions.necromancer';
import ProfessionsRanger from './professions/professions.ranger';
import ProfessionsRevenant from './professions/professions.revenant';
import ProfessionsThief from './professions/professions.thief';
import ProfessionsWarrior from './professions/professions.warrior';


function Main(props) {
	return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/professions/elementalist" element={<ProfessionsElementalist />}/>
                <Route path="/professions/engineer" element={<ProfessionsEngineer />}/>
                <Route path="/professions/guardian" element={<ProfessionsGuardian />}/>
                <Route path="/professions/mesmer" element={<ProfessionsMesmer />}/>
                <Route path="/professions/necromancer" element={<ProfessionsNecromancer />}/>
                <Route path="/professions/ranger" element={<ProfessionsRanger />}/>
                <Route path="/professions/revenant" element={<ProfessionsRevenant />}/>
                <Route path="/professions/thief" element={<ProfessionsThief />}/>
                <Route path="/professions/warrior" element={<ProfessionsWarrior />}/>
            </Routes>
        </Router>
        </>
	);
};

export default Main;
