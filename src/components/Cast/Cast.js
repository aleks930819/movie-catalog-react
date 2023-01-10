import { Link } from 'react-router-dom';

const Cast = ({ movieDetails }) => {
  return (
    <div className="grid grid-cols-4 mt-6 mb-6 gap-2 md:grid-cols-7">
      {movieDetails?.credits?.cast.slice(0, 7).map(
        (actor) =>
          actor.profile_path && (
            <Link  key={actor.id} title={actor.name} to={`/actors/${actor.id}`}>
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
  );
};

export default Cast;
