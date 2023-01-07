const MovieCard = ({ data }) => {
  const imgPath = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="grid lg:grid-cols-3  mt-10 mb-10  flex-wrap  justify-center  content-center items-center gap-5  pt-10 lg:w-3/4 mx-auto">
      {data?.results.map((movie) => (
        <div
          key={movie.id}
          id={movie.id}
          className="flex justify-center items-center "
        >
          <img
            className="w-3/6 shadow-2xl z-10 sm:w-full  xl:w-4/6 rounded-md  cursor-pointer lg:hover:scale-110 lg:hover:grayscale lg:hover:z-40 transition ease-in-out delay-250"
            src={`${imgPath}/${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
