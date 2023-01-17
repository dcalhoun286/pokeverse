import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PokemonDetails() {

    const [pokemon, setPokemon] = useState(null);

    const params = useParams();

    useEffect(() => {

        const loadSinglePokemonData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
            const jsonData = await response.json();
            setPokemon(jsonData);
        };

        loadSinglePokemonData();
    },[]);

    return (
        pokemon
        ?   (

                <React.Fragment>
                    <h3>{params.name}</h3>
                    <img src={pokemon.sprites.front_default}/>
                    <p><strong>height: </strong>{pokemon.height}</p>
                    <p><strong>weight: </strong>{pokemon.weight}</p>
                    <p><strong>abilities:</strong></p>
                    <ul>
                        {
                            pokemon.abilities.map(ability => (
                                <li>{ability.ability.name}</li>
                            ))
                        }
                    </ul>
                    <p><strong>types:</strong></p>
                    <ul>
                        {
                            pokemon.types.map(type => (
                                <li>{type.type.name}</li>
                            ))
                        }
                    </ul>
                    <p><strong>stats:</strong></p>
                    <ul>
                        {
                            pokemon.stats.map(stat => (
                                <li>
                                    <p>{stat.stat.name}</p>
                                    <p>{stat.base_stat}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <Link to='/'>Back to Full List</Link>
                </React.Fragment>

            )
        :   (
                <React.Fragment>
                    loading ...
                    <Link to='/'>Back to Full List</Link>
                </React.Fragment>
            )
    )
}

export { PokemonDetails };
