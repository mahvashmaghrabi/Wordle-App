import React, { useEffect } from 'react';
import MainGrid from './MainGrid';
import Keyboard from './Keyboard';
import { createContext } from 'react';
import { useState } from 'react';
import { defaultGrid, generateWordSet } from './EmptyGrid';
import FinishGame from './FinishGame';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import '../App.css';

//import Modal from 'react-modal';

export const AppContext = createContext();
function EasyLevel({ row, col, difficultyLevel }) {
  const EasyLevel = () => <h1>Easy Level</h1>;
  const [grid, setGrid] = useState(defaultGrid);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [yellowedLetters, setYellowedLetters] = useState([]);
  const [greenedLetters, setGreenedLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState('');
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  const [modalVisible, setModalVisible] = React.useState(false);
  const handleClose = () => setModalVisible(false);
  const handleShow = () => setModalVisible(true);

  useEffect(() => {
    generateWordSet(difficultyLevel).then((words) => {
      console.log(words);
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onSelectKey = (keyVal) => {
    if (currAttempt.letterPos > col) return;
    const newGrid = [...grid];
    newGrid[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setGrid(newGrid);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letterPos: currAttempt.letterPos + 1,
    });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newGrid = [...grid];
    newGrid[currAttempt.attempt][currAttempt.letterPos - 1] = '';
    setGrid(newGrid);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };
  // console.log('easylevel:col:', col);
  let msg123 = '';
  const onEnter = () => {
    if (currAttempt.letterPos !== col) {
      // msg123 = <h5>Please enter a longer word</h5>;
      // msg11 = console.error('Please enter a longer word');
      alert('Please enter a longer word');
      return;
      // alert('Please enter a longer word');
      // return;
      // window.confirm('Please enter a longer word');
      // msg11 = 'Please enter a longer word';
      // console.log('msg:', msg11);
      // setModalVisible(true);
      // return (
      //   <Modal isVisible={true} style={{ justifyContent: 'flex-end' }}></Modal>
      // );
      //
      //return;
    }
    console.log('rowval:', row, col);
    let currentWord = '';

    for (let i = 0; i < col; i++) {
      currentWord += grid[currAttempt.attempt][i];
    }
    // making lowercase to match case as our wordlist is all lowercase
    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      // TODO: remove alert messgae and try to use modal
      alert('Word not found');
    }
    console.log('currentWord:', currentWord);
    console.log('correctword:', correctWord);
    if (currentWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log('attempt number:', currAttempt.attempt);
    if (currAttempt.attempt === row - 1) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
    // setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };
  let main_grid = '';
  let empty_grid = '';
  if (difficultyLevel === 'Normal') {
    main_grid = <MainGrid row={6} col={6} difficultyLevel={'Normal'} />;
    //   empty_grid = <EmptyGrid difficultyLevel={'Normal'} />;
  }
  if (difficultyLevel === 'Hard') {
    main_grid = <MainGrid row={5} col={7} difficultyLevel={'Hard'} />;
    //  empty_grid = <EmptyGrid difficultyLevel={'Hard'} />;
  }
  console.log('difficulty level:', difficultyLevel);

  return (
    <div>
      <AppContext.Provider
        value={{
          grid,
          setGrid,
          currAttempt,
          setCurrAttempt,
          onSelectKey,
          onDelete,
          onEnter,
          correctWord,
          setDisabledLetters,
          disabledLetters,
          setYellowedLetters,
          yellowedLetters,
          greenedLetters,
          setGreenedLetters,
          setGameOver,
          gameOver,
        }}
      >
        {/* if(difficultyLevel==='Normal')
        {<MainGrid row={6} col={6} difficultyLevel={'Normal'} />} */}
        {/* else{<MainGrid row={5} col={7} difficultyLevel={'Normal'} />} */}
        {/* <MainGrid row={6} col={6} difficultyLevel={'Normal'} /> */}
        {/* <h1>{msg11}</h1> */}
        {/* {msg123} */}
        <h6> You have {row - currAttempt.attempt} attempts left</h6>
        {empty_grid}
        {main_grid}

        {gameOver.gameOver ? <FinishGame /> : <Keyboard />}
      </AppContext.Provider>
    </div>
  );
}

export default EasyLevel;
