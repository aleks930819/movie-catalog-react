import { useGetMoviesQuery } from '../../store';
import MovieCard from './MovieCard';
const Movies = () => {
  const page = 1;

  const { data:movieData, error, isLoading } = useGetMoviesQuery({ page });

  return (
  <MovieCard data={movieData} />
  );
};

export default Movies;
