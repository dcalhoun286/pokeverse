import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';

import { FavoritesContext } from '../components/context/FavoritesProvider';
import { PokemonCard } from '../components/PokemonCard';

function Favorites () {

    const { favorites } = useContext(FavoritesContext);

    return (

        favorites
        ?   (
                <React.Fragment>
                {
                    favorites.map(favorite => (
                        <PokemonCard
                            key={favorite.name}
                            name={favorite.name}
                            url={favorite.url}
                            pokemon={favorite}
                        />   
                    ))
                }
                </React.Fragment>
            )
        :   (
                <React.Fragment>
                    <Card>
                        <Card.Text>
                            Loading ...
                        </Card.Text>
                    </Card>
                </React.Fragment>
            )

    )
}

export { Favorites };
