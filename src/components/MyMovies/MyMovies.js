import { useSelector } from 'react-redux';

import Slider from '../Slider/Slider';
import { selectFavorites, selectWatchlist } from '../../features/user';

const MyMovies = () => {
  const watchlistMovies = useSelector(selectWatchlist);
  const favoritesMovies = useSelector(selectFavorites);

  return (
    <div className=" overflow-hidden mt-[100px]">
      <Slider title={'Favorites:'} data={favoritesMovies} />
      <Slider title={'Watchlist:'} data={watchlistMovies} />
    </div>
  );
};

export default MyMovies;
