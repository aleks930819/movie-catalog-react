import { useEffect, useState } from 'react';
import getItemFromLocalStorage from '../utils/getItemFromLocalStorage';

const useInFavoriteOrInWatchList = (movieDetails) => {
  const [isInFavorited, setIsInFavorited] = useState(false);
  const [isInWatchedList, setIsInWatchedList] = useState(false);

  useEffect(() => {
    const favorites = getItemFromLocalStorage('favorite');
    const watchList = getItemFromLocalStorage('watchlist');

    const isInFavorite = favorites?.some(
      (item) => item.id === movieDetails?.id
    );
    const isInWatchList = watchList?.some(
      (item) => item.id === movieDetails?.id
    );

    setIsInFavorited(isInFavorite);
    setIsInWatchedList(isInWatchList);
  }, [movieDetails]);

  return {
    isInFavorited,
    isInWatchedList,
    setIsInFavorited,
    setIsInWatchedList,
  };
};

export default useInFavoriteOrInWatchList;
