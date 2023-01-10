import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

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
    <div data-testid="app">
      <Navigation />

      <h1>Pokemon should appear here</h1>
      {
        pokeData.length && pokeData.map(pokemon => (

          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />

        ))
      }
      <PokemonCard />
    </div>
  );
}

export { App };
