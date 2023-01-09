import React, { useState, useEffect } from 'react';

function PokemonCard({ url, name }) {

  const [ singlePokemonSprites, setSinglePokemonSprites ] = useState([]);
  const [ singlePokemonAbilities, setSinglePokemonAbilities ] = useState([]);

  const fetchPokemonDetails = async () => {
    const response = await fetch(url);
    const responseData = await response.json();
    console.log('single pokemon', responseData);
    setSinglePokemonSprites([responseData['sprites']]);
    setSinglePokemonAbilities(responseData['abilities']);
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <div>
        pokemon card
    </div>
  );
}

export { PokemonCard };
