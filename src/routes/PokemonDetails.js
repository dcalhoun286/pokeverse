import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetails() {

    const [pokemon, setPokemon] = useState(null);

    const params = useParams();

    useEffect(() => {
        async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
            const jsonData = await response.json();
            console.log(`useEffect PokemonDetails: `, jsonData);
            setPokemon(jsonData);
        };
    },[pokemon]);
    
    return (
        pokemon
        ?   (
                <React.Fragment>

                </React.Fragment>
            )
        :   (
                <React.Fragment>
                    loading ...
                </React.Fragment>
            )
    )
}

export { PokemonDetails };
