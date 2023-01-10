import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';

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
    setFilteredPokeData(pokemonArray);
  };

  const handlePokemonSearch = (e) => {
    e.preventDefault();

    if (e.target.value.length) {
      const regex = new RegExp(e.target.value, 'gi');
      const filtered = pokeData.filter(pokemon => {
        return pokemon.name.match(regex) || pokemon.name.toLowerCase().includes(e.target.value.toLowerCase());
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
    <Container>
      <div data-testid="app">
        <Row>
          <Navigation />
        </Row>

        <Row>
          <InputGroup>
            <FormControl
              placeholder='Enter a pokemon'
              aria-label='Enter a pokemon'
              onChange={handlePokemonSearch}
            />
          </InputGroup>
        </Row>

        <Row>
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '5px',
              paddingBottom: '5px',
              marginTop: '8px'
            }}
          >
            Pokemon should appear here
          </h1>
        </Row>

        <Row>

          {
            filteredPokeData.length && filteredPokeData.map(pokemon => (

              <Col className='col-12 col-sm-6 col-md-4 col-xl-3 my-1'>
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              </Col>

            ))
          }

        </Row>

        <PokemonCard />
      </div>
    </Container>
  );
}

export { App };
