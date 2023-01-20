import React, { useState, createContext } from 'react';

export const FavoritesContext = createContext();

function FavoritesProvider ({ children }) {

    const [ favorites, setFavorites ] = useState([]);

    return (
        <FavoritesContext.Provider value={{favorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesProvider };
