import React, { useState, createContext } from 'react';

export const FavoritesContext = createContext();

function FavoritesProvider ({ children }) {

    const [ favorites, setFavorites ] = useState([]);

    const addFavorite = (newFavorite) => {
        setFavorites([
            ...favorites,
            newFavorite
        ]);
    };

    const removeFavorite = (pokemonToDelete) => {
        setFavorites(
            favorites.filter(favorite => favorite.name !== pokemonToDelete)
        );
    };

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesProvider };
