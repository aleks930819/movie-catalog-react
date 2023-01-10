import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import {
  useGetMoviesDetailsQuery,
  useGetRecommendationsQuery,
} from '../../store';
import {
  FaStar,
  FaHeart,
  FaRegHeart,
  FaMinus,
  FaPlus,
  FaYoutube,
} from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

import Button from '../Button/Button';
import Trailer from '../Trailer/Trailer';
import { useState } from 'react';
import MovieCard from './MovieCard';
import Spinner from '../Spinner/Spinner';
import addToLocalStorage from '../../utils/addToLocalStorage';
import removeFromLocalStorage from '../../utils/removeFromLocalStorage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cast from '../Cast/Cast';
import useInFavoriteOrInWatchList from '../../hooks/useInFavoriteOrInWatchList';

const MovieDetails = () => {
  const { id } = useParams();
  const {
    data: movieDetails,
    error,
    isLoading,
  } = useGetMoviesDetailsQuery({ id });

  const { data: recomendations } = useGetRecommendationsQuery({
    list: '/recommendations',
    movie_id: id,
  });

  const imgPath = 'https://image.tmdb.org/t/p/w500';

  const navigate = useNavigate();
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const openTrailerHandler = () => {
    setIsTrailerOpen(true);
  };

  const closeTrailerHandler = () => {
    setIsTrailerOpen(false);
  };

  const {
    isInFavorited,
    isInWatchedList,
    setIsInFavorited,
    setIsInWatchedList,
  } = useInFavoriteOrInWatchList(movieDetails);

  const watchListNotify = () => {
    toast(isInWatchedList ? 'Removed from watch list' : 'Added to watch list');
  };

  const favoriteNotify = () => {
    toast(isInFavorited ? 'Removed from favorites' : 'Added to favorites list');
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col md:grid md:grid-cols-2 md:w-3/5 shadow-2xl justify-center items-center  content-center mx-auto mt-10 mb-10 w-5/6 pb-5 rounded-3xl overflow-hidden ">
            <div className="w-full row-span-full ">
              <img
                className="w-full"
                src={`${imgPath}/${movieDetails?.poster_path}`}
                alt={movieDetails?.title}
              />
            </div>

            <div className="container flex flex-col gap-5 md:gap-12 p-5 text-base  justify-center items-center content-center">
              <div>
                <h2 className="font-extrabold lg:text-xl">
                  {movieDetails?.title}
                </h2>
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
                  {
                    new Date(movieDetails?.release_date)
                      .toDateString()
                      .split(' ')[3]
                  }
                </p>
              </div>
              <div className="pl-2 pr-2">
                <p className="text-md">{movieDetails?.overview}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                <Button primary onClick={openTrailerHandler}>
                  Trailer <FaYoutube />
                </Button>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={movieDetails?.homepage}
                >
                  <Button outline className="w-full">
                    Website <BiWorld className="text-cyan-900" />
                  </Button>
                </a>

                <Button
                  outline
                  onClick={() => {
                    isInWatchedList
                      ? removeFromLocalStorage('watchlist', movieDetails?.id)
                      : addToLocalStorage('watchlist', [movieDetails]);
                    setIsInWatchedList(!isInWatchedList);
                    watchListNotify();
                  }}
                >
                  Watchlist
                  {isInWatchedList ? (
                    <FaMinus className="ml-5 text-cyan-900" />
                  ) : (
                    <FaPlus className="ml-5 text-cyan-900" />
                  )}
                </Button>

                <Button
                  outline
                  onClick={() => {
                    isInFavorited
                      ? removeFromLocalStorage('favorite', movieDetails?.id)
                      : addToLocalStorage('favorite', [movieDetails]);
                    setIsInFavorited(!isInFavorited);
                    favoriteNotify();
                  }}
                >
                  Favorite
                  {isInFavorited ? (
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

            <div className="md:col-start-1 col-end-2 p-5  text-base ">
              <h3 className="text-center">Top Cast:</h3>
              <Cast movieDetails={movieDetails} />
            </div>

            {isTrailerOpen && (
              <Trailer
                link={movieDetails?.videos?.results[0]?.key}
                closeTrailerHandler={closeTrailerHandler}
              />
            )}
          </div>

          <div className="flex flex-col justify-center items-center text-center mt-5 mb-10 text-lg sm:text-2xl">
            <h2>You might also like:</h2>

            <MovieCard data={recomendations?.results} />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
