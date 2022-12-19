import React, { useCallback, useContext } from 'react';
import { useEffect } from 'react';
import '../App.css';
import { AppContext } from './EasyLevel';
import Key from './Key';
import './EasyLevel.css';

function Keyboard() {
  const top_row = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const middle_row = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const last_row = ['\u23CE', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '\u232b'];

  const {
    onEnter,
    onDelete,
    onSelectKey,
    disabledLetters,
    yellowedLetters,
    greenedLetters,
  } = useContext(AppContext);
  // const keys1 = [
  //   ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  //   ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  //   ['ENTER', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '\u232b'],
  // ];
  // console.log(props);

  //  const { grid, setGrid } = useContext(AppContext);
  // it will prevent from updating components again
  const handleKeyboard = useCallback((event) => {
    if (event.key === 'Enter') {
      onEnter();
    } else if (event.key === 'Backspace') {
      onDelete();
    } else {
      top_row.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectKey(key);
        }
      });
      middle_row.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectKey(key);
        }
      });
      last_row.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectKey(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleKeyboard]);

  // const selectKey = () => {
  //   const newGrid = [...grid];
  //   newGrid[0][0] = keyVal;
  //   setGrid(newGrid);
  // };

  // const keyPressed = () => {
  //   const newGrid = [...grid];
  //   newGrid[0][0] = props;
  //   setGrid(newGrid);
  // };

  //let iterator = keys_row1.values();
  // return (
  //   <div className="keyboard">
  //     {keys1.map((item, index) => (
  //       <div className="row1" key={index}>
  //         {item.map((key, keyIndex) => (
  //           <button key={keyIndex} onClick={() => props.onClick()}>
  //             {key}{' '}
  //           </button>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="row1">
        {top_row.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              greened={greenedLetters.includes(key)}
              yellowed={yellowedLetters.includes(key)}
            />
          );
        })}
      </div>

      <div className="row1">
        {middle_row.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              yellowed={yellowedLetters.includes(key)}
              greened={greenedLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="row1">
        {last_row.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              yellowed={yellowedLetters.includes(key)}
              greened={greenedLetters.includes(key)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Keyboard;
