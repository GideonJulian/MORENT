const FAVOURITES_KEY = 'favourite'
export const getFavourites = () => {
    return JSON.parse(localStorage.getItem(FAVOURITES_KEY)) || {}
}
export const toggleFavourite = (id) => {
    const favourites = getFavourites();
    favourites[id] = !favourites[id]; // Toggle the favorite status
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
    return favourites;
  };
  export default { getFavourites, toggleFavourite };