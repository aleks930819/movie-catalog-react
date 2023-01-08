import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findMovie } from '../../features/searchMovie';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();
  console.log(query);

  const submitHandler = (ev) => {
    ev.preventDefault();
    if (query === '') {
      return;
    }
    dispatch(findMovie(query));
    setQuery('');
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_search"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:white dark:focus:text-white focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <label
            htmlFor="floating_search"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Search
          </label>
        </div>
      </form>
    </div>
  );
};

export default Search;
