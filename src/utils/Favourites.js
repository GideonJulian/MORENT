export const FAVOURITES_KEY = 'favourite';

export const getFavourites = () => {
    return JSON.parse(localStorage.getItem(FAVOURITES_KEY)) || {};
};

export const toggleFavourite = (id) => {
    const favourites = getFavourites();
    favourites[id] = !favourites[id]; // Toggle the favorite status
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
    return favourites;
};

export const removeFavourite = (id) => {
    const favourites = getFavourites();
    delete favourites[id]; // Remove item
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
    return favourites;
};
