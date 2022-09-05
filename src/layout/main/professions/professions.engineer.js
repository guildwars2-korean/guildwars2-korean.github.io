import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'discretize-monorepo-root/gw2-ui/dist/default_style.css';
import 'discretize-monorepo-root/gw2-ui/dist/index.css'
import 'discretize-monorepo-root/typeface-menomonia';

import { TraitLine } from 'discretize-monorepo-root/gw2-ui'

function ProfessionsEngineer() {
  return (
      <TraitLine
        id={41}
        resettable
        selectable
      />
  );
}

export default ProfessionsEngineer;
