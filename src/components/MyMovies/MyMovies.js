import { useEffect, useState } from 'react';
import getItemFromLocalStorage from '../../utils/getItemFromLocalStorage';
import MovieCard from '../Movies/MovieCard';
const MyMovies = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const favorites = getItemFromLocalStorage('favorite');
    const watchList = getItemFromLocalStorage('watchlist');
    setFavoriteMovies(favorites);
    setWatchList(watchList);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col mx-auto mt-10 text-center">
      <div>
        <h2 className="text-xl">Favorites:</h2>
        <MovieCard data={favoriteMovies} />
      </div>
      <div>
        <h2 className="text-xl">Watch list:</h2>
        <MovieCard data={watchList} />
      </div>
    </div>
  );
};

export default MyMovies;
