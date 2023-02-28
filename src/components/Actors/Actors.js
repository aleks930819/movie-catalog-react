import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaImdb } from 'react-icons/fa';
import { SiImdb } from 'react-icons/si';
import {
  useGetActorDetailsByIdQuery,
  useGetMoviesByActorIdQuery,
} from '../../store';
import Button from '../Button/Button';
import MovieCard from '../Movies/MovieCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Actors = () => {
  const { id } = useParams();
  const page = 1;
  const { data, error, isLoading } = useGetActorDetailsByIdQuery({ id });
  const { data: actorMovie } = useGetMoviesByActorIdQuery({ id, page });

  const navigate = useNavigate();
  return (
    <>
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          <div className="grid grid-cols-2 text-xs lg:text-sm p-5 gap-5 justify-center text-center text-md  mb-10 items-center content-center w-auto mx-auto md:w-3/6 shadow-2xl mt-[150px]">
            <div className="overflow-hidden rounded-2xl  h-full   md:w-full">
              <img
                className="object-cover w-full h-full"
                src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
                alt={data?.name}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2>Name: {data?.name}</h2>
              <h3>Birthday: {data?.birthday} </h3>

              <div className="text-ellipsis mh-9">
                <p className="h-72 overflow-ellipsis   overflow-hidden text-start">
                  {data?.biography
                    ? data?.biography
                    : 'There is not biography yet'}
                </p>
              </div>
              <div className=" flex flex-col-reverse sm:flex-row gap-2 justify-center items-center col-start-2">
                <Button primary onClick={() => navigate(-1)}>
                  <FaArrowLeft className="mr-3" />
                  Back
                </Button>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.imdb.com/name/${data?.imdb_id}`}
                >
                  <Button yellow className="w-full text-center">
                    IMDB <SiImdb className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center">
            <h2 className="text-xl sm:text-3xl">Movies: </h2>
            <MovieCard data={actorMovie?.results} />
          </div>
        </>
      )}
    </>
  );
};

export default Actors;
