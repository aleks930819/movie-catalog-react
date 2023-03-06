import { FaArrowLeft } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import {
  FaStar,
  FaHeart,
  FaRegHeart,
  FaMinus,
  FaPlus,
  FaYoutube,
} from 'react-icons/fa';

import { doc, updateDoc } from 'firebase/firestore';

import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

import { selectUser } from '../../features/user';

import {
  selectWatchlist,
  selectFavorites,
  set_favorites,
  set_watchlist,
} from '../../features/watchlistAndFavorites';

import { toast } from 'react-toastify';

import { db } from '../../firebase';

const Actions = ({ movieDetails, dateFormat, openTrailerHandler }) => {
  const user = useSelector(selectUser);

  const watchList = useSelector(selectWatchlist);
  const favorites = useSelector(selectFavorites);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let isInWatchList = watchList.some((item) => item?.id === movieDetails?.id);
  let isInFavorites = favorites.some((item) => item?.id === movieDetails?.id);

  const addToWatchListHandler = async () => {
    const data = [];

    const arr = data.concat(movieDetails);

    if (!isInWatchList) {
      try {
        updateDoc(doc(db, 'users', user.uid), {
          watchlist: [...watchList, ...arr],
        });
        dispatch(set_watchlist([...watchList, ...arr]));
        toast.success('Added to watch list');
      } catch (error) {
        console.log(error);
      }
    }

    if (isInWatchList) {
      try {
        const newWatchlist = watchList.filter(
          (item) => item.id !== movieDetails.id
        );
        updateDoc(doc(db, 'users', user.uid), {
          watchlist: newWatchlist,
        });
        dispatch(set_watchlist(newWatchlist));
        toast.success('Removed from watch list');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addToFavoritesHandler = async () => {
    const data = [];

    const arr = data.concat(movieDetails);

    if (!isInFavorites) {
      try {
        updateDoc(doc(db, 'users', user.uid), {
          favorites: [...favorites, ...arr],
        });
        dispatch(set_favorites([...favorites, ...arr]));
        toast.success('Added to favorites');
      } catch (error) {
        console.log(error);
      }
    }

    if (isInFavorites) {
      try {
        const newFavoritesList = favorites.filter(
          (item) => item.id !== movieDetails.id
        );
        updateDoc(doc(db, 'users', user.uid), {
          favorites: newFavoritesList,
        });
        dispatch(set_favorites(newFavoritesList));
        toast.success('Removed from favorites');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container flex flex-col gap-5 md:gap-12 p-5 text-base  justify-center items-center content-center">
      <div>
        <h2 className="font-extrabold lg:text-xl">{movieDetails?.title}</h2>
      </div>

      <div className="flex gap-5">
        <p>Runtime: {movieDetails?.runtime}min.</p>
        <div className="flex gap-2">
          <p>{movieDetails?.vote_average.toFixed(1)}</p>
          <span className="text-yellow-300">
            <FaStar />
          </span>
        </div>
      </div>
      <div className="">
        <p>
          Release date:
          {dateFormat}
        </p>
      </div>
      <div className="pl-2 pr-2">
        <p className="text-md">{movieDetails?.overview}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        <Button primary onClick={openTrailerHandler}>
          Trailer <FaYoutube />
        </Button>

        <a target="_blank" rel="noreferrer" href={movieDetails?.homepage}>
          <Button outline className="w-full">
            Website <BiWorld className="text-cyan-900" />
          </Button>
        </a>

        <Button
          outline
          onClick={() => {
            addToWatchListHandler();
          }}
        >
          Watchlist
          {isInWatchList ? (
            <FaMinus className="ml-5 text-cyan-900" />
          ) : (
            <FaPlus className="ml-5 text-cyan-900" />
          )}
        </Button>

        <Button
          outline
          onClick={() => {
            addToFavoritesHandler();
          }}
        >
          Favorite
          {isInFavorites ? (
            <FaHeart className="ml-5 text-purple-700" />
          ) : (
            <FaRegHeart className="ml-5 text-cyan-900" />
          )}
        </Button>
      </div>
      <div className="lg:self-start">
        <Button primary onClick={() => navigate(-1)}>
          <FaArrowLeft className="mr-3" />
          Back
        </Button>
      </div>
    </div>
  );
};

export default Actions;
