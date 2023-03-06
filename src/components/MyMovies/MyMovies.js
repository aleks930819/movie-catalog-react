import { useSelector } from 'react-redux';

import Slider from '../Slider/Slider';
import { selectFavorites, selectWatchlist } from '../../features/watchlistAndFavorites';

const MyMovies = () => {
  const watchlistMovies = useSelector(selectWatchlist);
  const favoritesMovies = useSelector(selectFavorites);

  return (
    <div className=" overflow-hidden mt-[100px]">
      {favoritesMovies.length > 0 && (
        <Slider title={'Favorites:'} data={favoritesMovies} />
      )}
      {watchlistMovies.length > 0 && (
        <Slider title={'Watchlist:'} data={watchlistMovies} />
      )}
    </div>
  );
};

export default MyMovies;
