import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../store';
import ScrollToTop from '../../utils/scrollToTop';
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
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col mb-5">
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
      )}
    </>
  );
};

export default Movies;
