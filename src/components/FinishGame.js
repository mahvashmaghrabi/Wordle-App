import React, { useContext } from 'react';
import { AppContext } from './EasyLevel';
import Confetti from 'react-confetti';
//import useWindowSize from './useWindowSize';
//import useWindowSize from 'react-use/lib/useWindowSize';

function FinishGame() {
  const {
    gameOver,
    setGameOver,
    currAttempt,
    correctWord,
    grid,
    setGrid,
  } = useContext(AppContext);
  let message = '';

  function refreshPage() {
    window.location.reload(false);
  }

  //  const { width, height } = useWindowSize();
  if (gameOver.guessedWord == true) {
    message = 'Congratulations!! Would you like to try again?';

    // <Confetti />;
  } else {
    message = 'Sorry! That was a good try!';
  }
  return (
    //'You correctly guessed'
    <div className="gameOver">
      <h1>{message} </h1>
      {/* we can change this button name */}
      {gameOver.guessedWord ? <button onClick={refreshPage}>Yes </button> : ''}
      {/* <button> No </button> */}
      {gameOver.guessedWord ? <Confetti /> : ''}
      <h3>Correct Word is: {correctWord.toUpperCase()}</h3>
      {/* {gameOver.guessedWord && (
        <h3> You guessed in {currAttempt.attempt} attempts</h3>
      )} */}
    </div>
  );
}

export default FinishGame;
