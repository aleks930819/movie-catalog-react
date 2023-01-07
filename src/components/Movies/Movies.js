import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../store';
import MovieCard from './MovieCard';
const Movies = () => {
  const page = 1;

  const { searchQuery } = useSelector((state) => state.searchMovie);
  const {
    data: movieData,
    error,
    isLoading,
  } = useGetMoviesQuery({ page, searchQuery });

  return <MovieCard data={movieData} />;
};

export default Movies;
