import React, { createContext } from 'react';

export const FavoritesContext = createContext();

function FavoritesProvider ({ children }) {
    return (
        <FavoritesContext.Provider>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesProvider };
