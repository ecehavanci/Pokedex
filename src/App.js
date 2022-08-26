import React, { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon/Pokemon';
import Home from "./components/Pokemon/Home.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpecificPokemon from './components/Pokemon/SpecificPokemon';

function App() {
  return (
    <Router>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pokemon/:name' element={<SpecificPokemon />} />
      </Routes>

    </Router>
  );
}

export default App;

