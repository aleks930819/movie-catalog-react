import MovieCard from '../Movies/MovieCard';
import { useSelector } from 'react-redux';
import { selectFavorites, selectWatchlist } from '../../features/user';
const MyMovies = () => {
  const watchList = useSelector(selectWatchlist);
  const favoriteMovies = useSelector(selectFavorites);

  return (
    <div className="flex justify-center items-center flex-col mx-auto mt-[100px] text-center">
      <div className='pb-5'>
        <h2 className="text-2xl mb-[-50px]">
          {favoriteMovies.length === 0
            ? 'You have no favorite movies'
            : 'Favorites: '}
        </h2>
        <MovieCard data={favoriteMovies} />
      </div>

      <div>
        <h2 className="text-2xl mb-[-50px]">
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
