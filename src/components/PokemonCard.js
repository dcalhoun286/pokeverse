import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { FavoritesContext } from './context/FavoritesProvider';

function PokemonCard({ pokemon, url, name }) {

  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const [ singlePokemonSprite, setSinglePokemonSprite ] = useState('');
  const [ singlePokemonAbilities, setSinglePokemonAbilities ] = useState([]);

  const fetchPokemonDetails = async () => {
    const response = await fetch(url);
    const responseData = await response.json();
    const sprite = responseData.sprites.front_default;
    setSinglePokemonSprite(sprite);
    setSinglePokemonAbilities(responseData.abilities);
  };

  useEffect(() => {
    fetchPokemonDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <Card>
      <Card.Img style={{ backgroundColor: '#2e2e2e' }} variant='top' src={singlePokemonSprite} />
      <Card.Title as='h3' style={{ margin: 'auto', marginBottom: '8px' }} >{name}</Card.Title>
      <Card.Text as='div' style={{ margin: 'auto' }} >
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          Abilities:
          {
            singlePokemonAbilities.map(move => (
              <li key={move.ability.name}>{move.ability.name}</li>
            ))
          }
        </ul>
        <Link to={`/${name}`} >
          See {name} details
        </Link>
      </Card.Text>
      {
        favorites.includes(pokemon)
        ? <Button
            variant='primary'
            onClick={()=>removeFavorite(name)}
          >
            Remove {name} from favorites
          </Button>
        : <Button
            variant='primary'
            onClick={()=>addFavorite(pokemon)}
          >
            Add {name} to Favorites
          </Button>

      }

    </Card>
  );
}

export { PokemonCard };
