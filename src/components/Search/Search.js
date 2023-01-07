import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findMovie } from '../features/searchMovie';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  console.log(query);

  const submitHandler = (ev) => {
    ev.preventDefault();
    dispatch(findMovie(query));
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_search"
            class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:white dark:focus:text-white focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <label
            for="floating_search"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Search
          </label>
        </div>
        {/* <input
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-black text-xs p-2 pl-5 pr-5 outline-none  rounded-2xl"
        ></input> */}
      </form>
    </div>
  );
};

export default Search;
