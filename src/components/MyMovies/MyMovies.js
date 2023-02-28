import MovieCard from '../Movies/MovieCard';
import { useSelector } from 'react-redux';
import { selectFavorites, selectWatchlist } from '../../features/user';
const MyMovies = () => {
  const watchList = useSelector(selectWatchlist);
  const favoriteMovies = useSelector(selectFavorites);

  return (
    <div className="flex justify-center items-center flex-col mx-auto mt-10 text-center">
      <div>
        <h2 className="text-2xl">
          {favoriteMovies.length === 0
            ? 'You have no favorite movies'
            : 'Favorites: '}
        </h2>
        <MovieCard data={favoriteMovies} />
      </div>

      <div>
        <h2 className="text-2xl">
          {watchList.length === 0
            ? 'You have no movies in your watchlist'
            : 'Watchlist: '}
        </h2>
        <MovieCard data={watchList} />
      </div>
    </div>
  );
};

export default MyMovies;
