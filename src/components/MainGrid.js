import '../App.css';
import React from 'react';
import { defaultGrid } from './EmptyGrid';
import { useState } from 'react';
import Alphabet from './Alphabet';

function MainGrid({ row, col, difficultlevel }) {
  // var elements = document.getElementsByClassName("row")
  //var div = document.createElement("div")

  // let arr = [];

  // //  div.className = 'row';

  // for (let i = 0; i < row; i++) {
  //   const div1 = document.createElement('div');
  //   div1.className = 'row';

  //   for (let j = 0; j < col; j++) {
  //     arr.push(<Alphabet letterPos={j} attemptVal={i} />);
  //   }
  // }

  const bigArr = [];
  console.log('maingrid:row', row, col);

  for (let i = 0; i < row; i++) {
    const arr = [];
    for (let j = 0; j < col; j++) {
      arr.push(<Alphabet letterPos={j} attemptVal={i} />);
    }
    const component_row = <div className="row">{arr}</div>;
    bigArr.push(component_row);
  }

  // console.log('mainrow:', row, col);
  return (
    <div>
      <div className="outergrid">
        {/* {arr} */}
        {bigArr}
        {/* <div className="row">
          <Alphabet letterPos={0} attemptVal={0} />
          <Alphabet letterPos={1} attemptVal={0} />
          <Alphabet letterPos={2} attemptVal={0} />
          <Alphabet letterPos={3} attemptVal={0} />
          <Alphabet letterPos={4} attemptVal={0} />
          <Alphabet letterPos={5} attemptVal={0} />
        </div>
        <div className="row">
          <Alphabet letterPos={0} attemptVal={1} />
          <Alphabet letterPos={1} attemptVal={1} />
          <Alphabet letterPos={2} attemptVal={1} />
          <Alphabet letterPos={3} attemptVal={1} />
          <Alphabet letterPos={4} attemptVal={1} />
          <Alphabet letterPos={5} attemptVal={1} />
        </div>
        <div className="row">
          <Alphabet letterPos={0} attemptVal={2} />
          <Alphabet letterPos={1} attemptVal={2} />
          <Alphabet letterPos={2} attemptVal={2} />
          <Alphabet letterPos={3} attemptVal={2} />
          <Alphabet letterPos={4} attemptVal={2} />
          <Alphabet letterPos={5} attemptVal={2} />
        </div>
        <div className="row">
          <Alphabet letterPos={0} attemptVal={3} />
          <Alphabet letterPos={1} attemptVal={3} />
          <Alphabet letterPos={2} attemptVal={3} />
          <Alphabet letterPos={3} attemptVal={3} />
          <Alphabet letterPos={4} attemptVal={3} />
          <Alphabet letterPos={5} attemptVal={3} />
        </div>
        <div className="row">
          <Alphabet letterPos={0} attemptVal={4} />
          <Alphabet letterPos={1} attemptVal={4} />
          <Alphabet letterPos={2} attemptVal={4} />
          <Alphabet letterPos={3} attemptVal={4} />
          <Alphabet letterPos={4} attemptVal={4} />
          <Alphabet letterPos={5} attemptVal={4} />
        </div>
        <div className="row">
          <Alphabet letterPos={0} attemptVal={5} />
          <Alphabet letterPos={1} attemptVal={5} />
          <Alphabet letterPos={2} attemptVal={5} />
          <Alphabet letterPos={3} attemptVal={5} />
          <Alphabet letterPos={4} attemptVal={5} />
          <Alphabet letterPos={5} attemptVal={5} />
        </div> */}
      </div>
    </div>
  );
}

export default MainGrid;
