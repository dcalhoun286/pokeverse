import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import { Navigation } from './components/Navigation';
import { Home } from './routes/Home';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [ pokeData, setPokeData ] = useState([]);

  const fetchPokemonData = async () => {
    const response = await fetch(pokeApi);
    const responseData = await response.json();
    const pokemonArray = responseData.results;
    console.log('pokeApi response data', pokemonArray);
    setPokeData(pokemonArray);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <Container>
      <div data-testid="app">
        <Row>
          <Navigation />
        </Row>

        <Home pokeData={pokeData} />
      </div>
    </Container>
  );
}

export { App };
