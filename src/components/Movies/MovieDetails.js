import { Link, useNavigate, useParams } from 'react-router-dom';
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
import Modal from '../Modal/Modal';
import Trailer from '../Trailer/Trailer';
import { useState } from 'react';
import Movies from './Movies';
import MovieCard from './MovieCard';

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

  console.log(recomendations);

  const imgPath = 'https://image.tmdb.org/t/p/w500';
  const isInWatchedList = true;
  const isInFavoriteList = false;
  const navigate = useNavigate();
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const openTrailerHandler = () => {
    setIsTrailerOpen(true);
  };

  const closeTrailerHandler = () => {
    setIsTrailerOpen(false);
  };

  return (
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
            <h2 className="font-extrabold">{movieDetails?.title}</h2>
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
              Release date:{' '}
              {
                new Date(movieDetails?.release_date)
                  .toDateString()
                  .split(' ')[3]
              }{' '}
            </p>
          </div>
          <div className="pl-2 pr-2">
            <p>{movieDetails?.overview}</p>
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

            <Button outline>
              Watchlist
              {isInWatchedList ? (
                <FaMinus className="ml-5 text-cyan-900" />
              ) : (
                <FaPlus className="ml-5 text-cyan-900" />
              )}
            </Button>
            <Button outline>
              Favorite
              {isInFavoriteList ? (
                <FaHeart className="ml-5 text-purple-700" />
              ) : (
                <FaRegHeart className="ml-5 text-cyan-900" />
              )}{' '}
            </Button>
          </div>
          <Button primary rounded onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>

        <div className="md:col-start-1 col-end-2 p-5  text-base ">
          <h3 className="text-center">Cast:</h3>
          <div className="grid grid-cols-4 mt-6 mb-6 gap-2 md:grid-cols-7">
            {movieDetails?.credits?.cast
              .slice(0, 7)
              .map(
                (actor) =>
                  actor.profile_path && (
                    <img
                      key={actor.id}
                      src={`https://image.tmdb.org/t/p/w780/${actor.profile_path}`}
                      alt={actor.name}
                      className="rounded-full w-16 md:w-24 cursor-pointer"
                    />
                  )
              )}
          </div>
        </div>

        {isTrailerOpen && (
          <Trailer
            link={movieDetails?.videos?.results[0]?.key}
            closeTrailerHandler={closeTrailerHandler}
          />
        )}
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-5 mb-10 text-lg">
        <h2>You might also like:</h2>
        <MovieCard data={recomendations} />
      </div>
    </>
  );
};

export default MovieDetails;
