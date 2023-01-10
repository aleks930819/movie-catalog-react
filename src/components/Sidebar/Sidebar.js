import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetGenresQuery } from '../../store';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { handlePage } from '../../features/currentPage';
import { useContext } from 'react';
import { isOpenContext } from '../../contexts/isOpenContext';

const Sidebar = () => {
  const { data: genres } = useGetGenresQuery();

  const { open, isOpenClickHandler } = useContext(isOpenContext);
  const dispatch = useDispatch();

  const categories = [
    {
      label: 'Popular',
      value: 'popular',
    },
    {
      label: 'Top Rated',
      value: 'top_rated',
    },

    {
      label: 'UpComing',
      value: 'upcoming',
    },
  ];

  return (
    <aside
      className="w-full  text-center sm:text-start  sm:w-64  inline-flex "
      aria-label="Sidebar"
    >
      <div className="px-3 py-4 overflow-y-auto w-full bg-cyan-900">
        <ul className="space-y-2" onClick={() => dispatch(handlePage('first'))}>
          {categories?.map(({ label, value }) => (
            <li key={label}>
              <Link
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-cyan-600 focus:outline-none dark:focus:ring-cyan-400 focus:ring-4 focus:ring-cyan-400"
                onClick={() => {
                  dispatch(selectGenreOrCategory(value));
                }}
              >
                <span className="flex-1 ml-3 whitespace-nowrap lg:text-lg text-white">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ul
          className="pt-4 mt-4 space-y-2 border-t  border-gray-200 dark:border-gray-900 text-center flex flex-col justify-center items-center sm:items-start"
          onClick={() => dispatch(handlePage('first'))}
        >
          {genres?.genres?.map(({ name, id }) => (
            <li key={name}>
              <Link
                href="#"
                onClick={() => {
                  dispatch(selectGenreOrCategory(id));
                }}
                className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  dark:hover:bg-cyan-600 dark:text-white group  dark:focus:ring-cyan-400 focus:ring-4 focus:ring-cyan-400"
              >
                <span className="ml-3 lg:text-md text-white">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
