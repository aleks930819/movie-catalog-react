import { useParams } from 'react-router-dom';

import {
  useGetMoviesDetailsQuery,
  useGetRecommendationsQuery,
} from '../../store';

import Trailer from '../Trailer/Trailer';
import { useState } from 'react';
import MovieCard from './MovieCard';
import Spinner from '../Spinner/Spinner';
import Cast from '../Cast/Cast';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Actions from './Actions';

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

  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const openTrailerHandler = () => {
    setIsTrailerOpen(true);
  };

  const closeTrailerHandler = () => {
    setIsTrailerOpen(false);
  };

  const dateFormat = new Date(movieDetails?.release_date)
    .toDateString()
    .split(' ')[3];

  return (
    <>
      {error ? (
        <ErrorMessage />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col md:grid md:grid-cols-2 md:w-3/5 shadow-2xl justify-center items-center  content-center mx-auto mb-10 w-5/6 pb-5 rounded-3xl overflow-hidden mt-[150px]">
            <div className="w-full row-span-full ">
              <img
                className="w-full"
                src={`${imgPath}/${movieDetails?.poster_path}`}
                alt={movieDetails?.title}
              />
            </div>

            <Actions
              movieDetails={movieDetails}
              openTrailerHandler={openTrailerHandler}
              dateFormat={dateFormat}
            />

            <Cast movieDetails={movieDetails} />

            {isTrailerOpen && (
              <Trailer
                link={movieDetails?.videos?.results[0]?.key}
                closeTrailerHandler={closeTrailerHandler}
              />
            )}
          </div>

          {recomendations?.results.length > 0 && (
            <div className="flex flex-col justify-center items-center text-center mt-5 mb-10 text-lg sm:text-2xl">
              <h2>You might also like:</h2>

              <MovieCard data={recomendations?.results} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MovieDetails;
