import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { FavoritesProvider } from './components/context/FavoritesProvider';

createRoot(document.getElementById('root')).render(
    <FavoritesProvider>
        <App />
    </FavoritesProvider>
);
