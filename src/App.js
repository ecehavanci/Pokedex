import React, { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon/Pokemon';
import Home from "./components/Pokemon/Home.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpecificPokemon from './components/Pokemon/SpecificPokemon';
import Battle from './components/Battle/Battle';
import {PATH_POKEMON,PATH_ROOT, PATH_BATTLE} from "./utils/constants.js";

function App() {
  return (
    <Router>

      <Routes>
        <Route exact path={PATH_ROOT} element={<Home />} />
        <Route exact path={PATH_POKEMON} element={<SpecificPokemon />} />
        <Route exact path={PATH_BATTLE} element={<Battle/>}/>
      </Routes>

    </Router>
  );
}

export default App;

