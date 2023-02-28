import { FaUserAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';

import { BiMenu } from 'react-icons/bi';
import React, { useContext, useEffect } from 'react';

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

const NavBar = () => {
  const { open, toggle } = useContext(isOpenContext);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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

  return (
    <>
      <nav className="bg-cyan-900 w-full h-2/5  text-white pt-5 pl-6 pr-6 text-sm ">
        <div className="grid grid-cols-2 sm:flex  sm:flex-row-reverse  sm:justify-between  gap-8 justify-center  items-center pr-6 pt-6 pb-6 ">
          {user ? (
            <div className="flex">
              <Link to="/my-movies">
                <div className="flex gap-2 cursor-pointer self-center">
                  <p>My Movies</p>
                  <FaUserAlt />
                </div>
                <div
                  className="flex gap-2 cursor-pointer self-center"
                  onClick={() => logoutHandler()}
                >
                  <p>Logout</p>
                  <AiOutlineLogout />
                </div>
              </Link>
            </div>
          ) : (
            <Link to="/signin">
              <div className="flex gap-2 cursor-pointer self-center">
                <p>Sign In</p>
                <FaUserAlt />
              </div>
            </Link>
          )}

          <Search />
          <div className="cursor-pointer   self-baseline  text-white">
            {open ? (
              <MdClose size={32} onClick={toggle} />
            ) : (
              <BiMenu size={32} onClick={toggle} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
