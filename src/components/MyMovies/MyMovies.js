import MovieCard from '../Movies/MovieCard';
import { useSelector } from 'react-redux';
import { selectFavorites, selectWatchlist } from '../../features/user';
const MyMovies = () => {
  const watchList = useSelector(selectWatchlist);
  const favoriteMovies = useSelector(selectFavorites);

  return (
    <div className="flex justify-center items-center flex-col mx-auto mt-10 text-center">
      {favoriteMovies.length === 0 && watchList.length === 0 && (
        <h2 className="text-2xl">You have no movies in your list</h2>
      )}

      {favoriteMovies && (
        <div>
          <h2 className="text-2xl">Favorites:</h2>
          <MovieCard data={favoriteMovies} />
        </div>
      )}

      <div>
        <h2 className="text-2xl">Watch list:</h2>
        <MovieCard data={watchList} />
      </div>
    </div>
  );
};

export default MyMovies;
