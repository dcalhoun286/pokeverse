import React, { useContext } from 'react';

import { FavoritesContext } from '../components/context/FavoritesProvider';
import { PokemonCard } from '../components/PokemonCard';

function Favorites () {

    const { favorites } = useContext(FavoritesContext);

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export { Favorites };
