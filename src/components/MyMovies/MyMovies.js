import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../index.css';
import FavortiesSlide from '../FavoritesSlide/FavortiesSlide';
import WatchlistSlide from '../WatchlistSlide/WatchlistSlide';

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
