import React, { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';

function PokemonCard({ url, name }) {

  const [ singlePokemonSprite, setSinglePokemonSprite ] = useState('');
  const [ singlePokemonAbilities, setSinglePokemonAbilities ] = useState([]);

  const fetchPokemonDetails = async () => {
    const response = await fetch(url);
    const responseData = await response.json();
    console.log('single pokemon', responseData);
    const sprite = responseData['sprites']['front_default'];
    setSinglePokemonSprite(sprite);
    setSinglePokemonAbilities(responseData['abilities']);
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <Card>
      <Card.Img variant='top' src={singlePokemonSprite} />
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <ul>
          {
            singlePokemonAbilities.map(move => (
              <li>{move['ability']['name']}</li>
            ))
          }
        </ul>
      </Card.Text>
    </Card>
  );
}

export { PokemonCard };
