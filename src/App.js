import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Home } from './routes/Home';
import { PokemonDetails } from './routes/PokemonDetails';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [ pokeData, setPokeData ] = useState([]);

  const fetchPokemonData = async () => {
    const response = await fetch(pokeApi);
    const responseData = await response.json();
    const pokemonArray = responseData.results;
    setPokeData(pokemonArray);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <div data-testid="app">
          <Row>
            <Navigation />
            <Routes>
              <Route path='/' element={ <Home pokeData={pokeData} /> } />
              <Route path='/:name' element={ <PokemonDetails /> } />
            </Routes>
          </Row>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export { App };
