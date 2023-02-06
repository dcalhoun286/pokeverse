import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FavoritesContext } from '../components/context/FavoritesProvider';
import { PokemonCard } from '../components/PokemonCard';

function Favorites () {

    const { favorites } = useContext(FavoritesContext);

    return (

        favorites?.length
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
                        </React.Fragment>
                    ))
                }
                </React.Fragment>
            )
        :   (
                <React.Fragment>
                    <Card>
                        <Card.Text as='h3'>
                            Your favorites are empty ...
                        </Card.Text>
                        <Button variant='primary'><NavLink to='/'>Back to All Pokemon</NavLink></Button>
                    </Card>
                </React.Fragment>
            )

    )
}

export { Favorites };
