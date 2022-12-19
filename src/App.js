import React from 'react';
import './App.css';
import { defaultGrid } from './components/EmptyGrid';
import {
  Home,
  Rules,
  EasyLevel,
  DifficultLevel,
  Navigation,
} from './components';
import { Routes, Route } from 'react-router';
import { useState } from 'react';

import MainGrid from './components/MainGrid';
import Keyboard from './components/Keyboard';
//import { defaultGrid } from './components/EmptyGrid';

function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="rules" element={<Rules />} />
        <Route
          exact
          path="easylevel"
          element={<EasyLevel row={6} col={6} difficultyLevel={'Normal'} />}
        />
        <Route
          exact
          path="difficultlevel"
          element={<DifficultLevel row={5} col={7} difficultyLevel={'Hard'} />}
        />
      </Routes>
    </div>
  );
}

export default App;
