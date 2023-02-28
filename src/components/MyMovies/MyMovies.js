import Carousel from 'react-multi-carousel';

import { useSelector } from 'react-redux';
import { selectFavorites, selectWatchlist } from '../../features/user';
import { Pagination, Navigation } from 'swiper';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../index.css';
import { useRef, useState } from 'react';
import FavortiesSlide from '../FavoritesSlide/FavortiesSlide';
import WatchlistSlide from '../WatchlistSlide/WatchlistSlide';

const MyMovies = () => {
  return (
    <div className=" overflow-hidden">
      <FavortiesSlide />
      <WatchlistSlide />
    </div>
  );
};

export default MyMovies;
