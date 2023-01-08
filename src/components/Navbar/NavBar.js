import { FaUserAlt,FaHome } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { BiMenu } from 'react-icons/bi';
import React, { useContext, useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import useCloseOutside from '../../hooks/useCloseOutside';
import Search from '../Search/Search';
import { isOpenContext } from '../../contexts/isOpenContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const mobileMenuClickHandler = () => {
  //   setIsOpen(!isOpen);
  // };

  // let menuRef = useCloseOutside(() => {
  //   setIsOpen(false);
  // });

  const { isOpenClickHandler } = useContext(isOpenContext);
  return (
    <>
   
      <nav className="bg-cyan-900 w-full h-2/5  text-white pt-5 pl-6 pr-6 text-sm ">
        <div className="flex  flex-col-reverse sm:flex-row sm:justify-between  gap-8 justify-center  items-center pr-6 pt-6 pb-6 ">
        
          <div className="cursor-pointer   self-baseline ">
            {/* <FaHome size={40} onClick={isOpenClickHandler} /> */}
          </div>
          <Search />
          <div className="flex gap-2 cursor-pointer self-center">
            <Link to="/my-movies">
              <p>My Movies</p>
            </Link>
            <FaUserAlt />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
