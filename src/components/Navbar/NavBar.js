import { FaUserAlt } from 'react-icons/fa';
import { MdClose, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { AiOutlineLogout, AiFillHome } from 'react-icons/ai';

import { BiMenu, BiLogOut } from 'react-icons/bi';
import React, { useContext, useEffect, useRef, useState } from 'react';

import Search from '../Search/Search';
import { isOpenContext } from '../../contexts/isOpenContext';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  logout,
  selectUser,
  set_favorites,
  set_watchlist,
} from '../../features/user';
import useGetUserData from '../../hooks/useGetUserData';
import { useOnHoverOutside } from '../../hooks/useHoverOutside';
import CategoreisMenu from '../CategoriesMenu/CategoreisMenu';
import GenresMenu from '../GenresMenu/GenresMenu';

const NavBar = () => {
  const { open, toggle } = useContext(isOpenContext);
  const user = useSelector(selectUser);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();

  const categoriesRef = useRef(null);
  const [categoriesMenu, setCategoriesMenu] = useState(false);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const { watchList, favorites } = useGetUserData({
    userID: user?.uid,
  });

  useEffect(() => {
    dispatch(set_favorites(favorites));
    dispatch(set_watchlist(watchList));
  }, [dispatch, favorites, watchList]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth < 768) {
        setIsMobile(true);
      }
      if (window.innerWidth > 768) {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const userLinks = [
    {
      id: 1,
      label: 'Home',
      link: '/',
      icon: <AiFillHome />,
    },

    {
      id: 2,
      label: 'My Movies',
      link: '/my-movies',
      icon: <FaUserAlt />,
    },

    {
      id: 3,
      label: 'Logout',
      link: '/',
      icon: <BiLogOut />,
      onClick: logoutHandler,
    },
  ];

  const guestLinks = [
    {
      id: 1,
      label: 'Home',
      link: '/',
      icon: <AiFillHome />,
    },
    {
      id: 2,
      label: 'Sign In',
      link: '/signin',
      icon: <FaUserAlt />,
    },
  ];

  const links = user ? userLinks : guestLinks;

  return (
    <>
      <nav className=" bg-cyan-900 border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-cyan-900 fixed w-full top-0 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-white ">
              {links.map((link) => {
                return (
                  <li className="flex flex-col items-center justify-center">
                    <Link to={link.link}>
                      <div
                        className="flex gap-2 cursor-pointer self-center"
                        onClick={link.onClick}
                      >
                        <p>{link.label}</p>
                        {link.icon}
                      </div>
                    </Link>
                  </li>
                );
              })}
              <CategoreisMenu />
              <GenresMenu />
              <Search />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
