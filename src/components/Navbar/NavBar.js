import { FaUserAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import { BiMenu } from 'react-icons/bi';
import React, { useContext } from 'react';

import Search from '../Search/Search';
import { isOpenContext } from '../../contexts/isOpenContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { open, toggle } = useContext(isOpenContext);

  return (
    <>
      <nav className="bg-cyan-900 w-full h-2/5  text-white pt-5 pl-6 pr-6 text-sm ">
        <div className="grid grid-cols-2 sm:flex  sm:flex-row-reverse  sm:justify-between  gap-8 justify-center  items-center pr-6 pt-6 pb-6 ">
          <Link to="/my-movies">
            <div className="flex gap-2 cursor-pointer self-center">
              <p>My Movies</p>
              <FaUserAlt />
            </div>
          </Link>
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
