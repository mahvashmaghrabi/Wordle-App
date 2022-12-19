import React, { useContext, useEffect } from 'react';
import './EasyLevel.css';
import MainGrid from './MainGrid';
import { useState } from 'react';
import { AppContext } from './EasyLevel';
import '../App.css';

// TODO change it to alphaPos and enteredVal

function Alphabet({ letterPos, attemptVal }) {
  const {
    grid,
    correctWord,
    currAttempt,
    disabledLetters,
    setDisabledLetters,
    yellowedLetters,
    setYellowedLetters,
    greenedLetters,
    setGreenedLetters,
  } = useContext(AppContext);

  const alphabet = grid[attemptVal][letterPos];

  // TODO: change the logic here in if else statements
  const correctPos = correctWord.toUpperCase()[letterPos] === alphabet;

  const incorrectPos =
    !correctPos &&
    alphabet !== '' &&
    correctWord.toUpperCase().includes(alphabet);
  // const almost = () => {
  //   if(!correct && alphabet !== "" && )
  // }

  // for(let i=0; i<6;i++) {
  //   if(currAttempt.attempt)
  // }
  //console.log('currAttempt:', currAttempt);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correctPos ? 'correct' : incorrectPos ? 'almost' : 'error');

  //todo: check if we can use useState or anything instead

  useEffect(() => {
    if (alphabet != '' && !correctPos && incorrectPos) {
      setYellowedLetters((prev) => [...prev, alphabet]);
    }
    if (alphabet != '' && correctPos) {
      setGreenedLetters((prev) => [...prev, alphabet]);
    }
    if (alphabet !== '' && !correctPos && !incorrectPos) {
      setDisabledLetters((prev) => [...prev, alphabet]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="alphabet" id={letterState}>
      {alphabet}
    </div>
  );
}

export default Alphabet;
