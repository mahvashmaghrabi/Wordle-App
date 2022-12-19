import React, { useContext } from 'react';
import { AppContext } from './EasyLevel';

import '../App.css';

function Key({ keyVal, disabled, yellowed, greened }) {
  //const { gameOver, onSelectKey, onDelete, onEnter } = useContext(AppContext);

  const {
    grid,
    setGrid,
    currAttempt,
    setCurrAttempt,
    onDelete,
    onSelectKey,
    onEnter,
  } = useContext(AppContext);

  const selectKey = () => {
    if (keyVal === '\u23CE') {
      onEnter();
    }
    // for delete key
    else if (keyVal === '\u232b') {
      onDelete();
    } else {
      onSelectKey(keyVal);
    }
  };

  return (
    <div
      className="key"
      id={disabled ? 'disabled' : greened ? 'greened' : yellowed && 'yellowed'}
      onClick={selectKey}
    >
      {keyVal}
    </div>
  );
}
export default Key;
