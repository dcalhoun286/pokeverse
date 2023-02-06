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

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesProvider };
