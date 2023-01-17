import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';

import { PokemonCard } from '../components/PokemonCard';

function Home({ pokeData }) {

    const [ filteredPokeData, setFilteredPokeData ] = useState([]);

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
        setFilteredPokeData([...pokeData])
    },[pokeData]);

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export { Home };
