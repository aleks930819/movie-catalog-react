import { FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';

import {
  logout,
  selectUser,
  set_favorites,
  set_watchlist,
} from '../../features/user';

import RightSide from './RightSide';
import LeftSide from './LeftSide';
import NavbarButton from './NavbarButton';

import useGetUserData from '../../hooks/useGetUserData';

const NavBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 787 });

  const [showMenu, setShowMenu] = useState(false);

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
    isMobile ? setShowMenu(false) : setShowMenu(true);
  }, [isMobile]);

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

  const handleMenu = () => {
    isMobile && setShowMenu(!showMenu);
  };

  return (
    <nav className=" bg-cyan-900 border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-cyan-900 fixed w-full top-0 z-[9999]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavbarButton handleMenu={handleMenu} />

        {showMenu && (
          <RightSide
            isMobile={isMobile}
            setShowMenu={setShowMenu}
            links={links}
          />
        )}
        {showMenu && <LeftSide />}
      </div>
    </nav>
  );
};

export default NavBar;
