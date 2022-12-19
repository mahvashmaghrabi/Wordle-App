import React from 'react';
import EasyLevel from './EasyLevel';

//export const AppContext = createContext();
function DifficultLevel({ row, col }) {
  return <EasyLevel row={5} col={7} difficultyLevel={'Hard'} />;
}

export default DifficultLevel;
