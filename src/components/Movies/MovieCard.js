import { Link } from 'react-router-dom';
const MovieCard = ({ data }) => {
  const imgPath = 'https://image.tmdb.org/t/p/w500';

  const checkIsThereImage = (movie) => {
    if (movie.poster_path) {
      return true;
    }
    if (movie.backdrop_path) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="  w-3/4 flex lg:grid-cols-3 lg:grid  mt-10 mb-10  flex-wrap  justify-center  content-center items-center gap-10  pt-10  mx-auto">
        {data?.map(
          (movie) =>
            checkIsThereImage(movie) && (
              <div key={movie.id} id={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className="w-full shadow-2xl z-10 sm:w-full   rounded-md  cursor-pointer lg:hover:scale-110 lg:hover:grayscale lg:hover:z-40 transition ease-in-out delay-250"
                    src={
                      movie.poster_path
                        ? `${imgPath}/${movie?.poster_path}`
                        : `${imgPath}/${movie?.backdrop_path}`
                    }
                    alt={movie?.title}
                  />
                </Link>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default MovieCard;
