import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';

import { FavoritesContext } from '../components/context/FavoritesProvider';
import { PokemonCard } from '../components/PokemonCard';

function Favorites () {

    const { favorites, removeFavorite } = useContext(FavoritesContext);

    return (

        favorites
        ?   (
                <React.Fragment>
                {
                    favorites.map(favorite => (
                        <React.Fragment key={favorite.name}>
                            <PokemonCard
                                name={favorite.name}
                                url={favorite.url}
                                pokemon={favorite}
                            />
                            <Button onClick={()=>removeFavorite(favorite.name)}>Remove {favorite.name} from favorites</Button>  
                        </React.Fragment>
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
