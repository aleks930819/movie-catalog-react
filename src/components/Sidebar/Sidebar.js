import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useGetGenresQuery } from '../../store';
import { FaUserAlt } from 'react-icons/fa';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { handlePage } from '../../features/currentPage';
import { useContext } from 'react';
import { isOpenContext } from '../../contexts/isOpenContext';
import useCloseOutside from '../../hooks/useCloseOutside';
import { BiToggleLeft } from 'react-icons/bi';
import Home from '../Home/Home';
import { selectUser } from '../../features/user';
import Search from '../Search/Search';

const Sidebar = () => {
  const { data: genres } = useGetGenresQuery();
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const { open, toggle, show, hide } = useContext(isOpenContext);
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
        <div className="flex flex-col ">
          <div className="flex flex-col gap-4 justify-center items-center text-white pb-10 pt-10">
            <Link to="/my-movies">
              <div className="flex gap-2 cursor-pointer self-center">
                <p>My Movies</p>
              </div>
            </Link>
            <div className="flex  gap-2 cursor-pointer self-center">
              <p>Logout</p>
            </div>
          </div>
          <Search />
        </div>
        <ul className="space-y-2" onClick={() => dispatch(handlePage('first'))}>
          {categories?.map(({ label, value }) => (
            <li key={label}>
              <Link
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:hover:bg-cyan-600 focus:outline-none dark:focus:ring-cyan-400 focus:ring-4 focus:ring-cyan-400"
                onClick={() => {
                  dispatch(selectGenreOrCategory(value));
                  toggle();
                }}
                onBlur={hide}
                onFocus={show}
              >
                <span className="flex-1 ml-3 whitespace-nowrap lg:text-lg text-white">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ul
          className="pt-4 mt-4 space-y-2 border-t  border-white  text-center flex flex-col justify-center items-center sm:items-start"
          onClick={() => dispatch(handlePage('first'))}
        >
          {genres?.genres?.map(({ name, id }) => (
            <li key={name}>
              <Link
                onClick={() => {
                  dispatch(selectGenreOrCategory(id));
                  toggle();
                }}
                className={
                  'flex items-center p-2 text-base font-norma  transition duration-75 rounded-lg  dark:hover:bg-cyan-600 dark:text-white group  dark:focus:ring-cyan-400 focus:ring-4 focus:ring-cyan-400'
                }
                onBlur={hide}
                onFocus={show}
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
