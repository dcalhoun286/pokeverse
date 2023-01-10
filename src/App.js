import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [ pokeData, setPokeData ] = useState([]);
  const [ filteredPokeData, setFilteredPokeData ] = useState([]);

  const fetchPokemonData = async () => {
    const response = await fetch(pokeApi);
    const responseData = await response.json();
    const pokemonArray = responseData.results;
    console.log('pokeApi response data', pokemonArray);
    setPokeData(pokemonArray);
  };

  const handlePokemonSearch = (e) => {
    e.preventDefault();
    console.log('change occurred: ', Boolean(e.target.value.length));

    if (e.target.value.length) {
      const regex = new RegExp(e.target.value, 'gi');
      const filtered = pokeData.filter(pokemon => {
        return pokemon.name.match(regex) || pokemon.name.contains(regex);
      });

      setFilteredPokeData(filtered);

    } else {
      setFilteredPokeData([...pokeData]);
    }

  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <div data-testid="app">
      <Navigation />
      <InputGroup>
        <FormControl
          placeholder='Enter a pokemon'
          aria-label='Enter a pokemon'
          onChange={handlePokemonSearch}
        />
      </InputGroup>
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
