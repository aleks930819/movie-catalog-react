import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetMoviesQuery } from '../../store';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';
import MovieCard from './MovieCard';
const Movies = () => {
  const [page, setPage] = useState(1);
  const { pageNumber } = useSelector((state) => state.page);

  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.genreOrCategory
  );

  const {
    data: movieData,
    error,
    isLoading,
  } = useGetMoviesQuery({
    page: pageNumber,
    searchQuery,
    genreIdOrCategoryName,
  });
  const imgPath = 'https://image.tmdb.org/t/p/w500';
  const randomMovie = Math.floor(Math.random() * 20);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col mb-5 p-10 mt-[50px]">
            <div className="h-[500px] w-full bg-no-repeat   mb-10 relative cursor-pointer rounded-md overflow-hidden  hidden md:block ">
              <Link to={`/movie/${movieData?.results[randomMovie].id}`}>
                <img
                  className="w-full h-full object-cover  brightness-50 "
                  src={
                    movieData?.results[randomMovie].backdrop_path
                      ? `${imgPath}/${movieData?.results[randomMovie]?.backdrop_path}`
                      : `${imgPath}/${movieData?.results[randomMovie]?.poster_path}`
                  }
                  alt={movieData?.results[randomMovie]?.title}
                />
              </Link>
              <div className="absolute bottom-0 left-5 p-5 text-white w-2/3  ">
                <h2 className="text-xl leading-relaxed tracking-wider">
                  {movieData?.results[randomMovie]?.title}
                </h2>
                <p className="text-base tracking-wide">
                  {movieData?.results[randomMovie]?.overview.substring(0, 150)}
                  ...
                </p>
              </div>
            </div>
            <Pagination
              currentPage={page}
              setPage={setPage}
              totalPages={movieData?.total_pages}
            />
            <MovieCard data={movieData?.results} />

            <Pagination
              currentPage={page}
              setPage={setPage}
              totalPages={movieData?.total_pages}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Movies;
