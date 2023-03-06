import { Link } from 'react-router-dom';

const Cast = ({ movieDetails }) => {
  return (
    <div className="md:col-start-1 col-end-2 p-5  text-base ">
      <h3 className="text-center">Top Cast:</h3>
      <div className="grid grid-cols-4 mt-6 mb-6 gap-2 md:grid-cols-7">
        {movieDetails?.credits?.cast.slice(0, 7).map(
          (actor) =>
            actor.profile_path && (
              <Link
                key={actor.id}
                title={actor.name}
                to={`/actors/${actor.id}`}
              >
                <img
                  key={actor.id}
                  src={`https://image.tmdb.org/t/p/w780/${actor.profile_path}`}
                  alt={actor.name}
                  className="rounded-full w-16 md:w-24 cursor-pointer"
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Cast;
