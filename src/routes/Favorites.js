import React, { useContext } from 'react';

import { FavoritesContext } from '../components/context/FavoritesProvider';
import { PokemonCard } from '../components/PokemonCard';

function Favorites () {

    const { favorites } = useContext(FavoritesContext);

    return (
        <React.Fragment>
            {
                favorites.map(favorite => (
                    <PokemonCard name={favorite} />   
                ))
            }
        </React.Fragment>
    )
}

export { Favorites };
