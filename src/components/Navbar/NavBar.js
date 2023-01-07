import { FaUserAlt } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { BiMenu } from 'react-icons/bi';

import React, { useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import useCloseOutside from '../../hooks/useCloseOutside';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuClickHandler = () => {
    setIsOpen(!isOpen);
  };

  let menuRef = useCloseOutside(() => {
    setIsOpen(false);
  });

  return (
    <>
      <nav
        ref={menuRef}
        className="bg-cyan-900 w-full h-2/5  text-white pt-5 pl-6 pr-6 text-lg 2xl:text-2xl"
      >
        <div className="flex  justify-between  pr-6 pt-6 pb-6 ">
          <div className=" cursor-pointer ">
            <BiMenu size={40} onClick={mobileMenuClickHandler} />
          </div>
          <div className="flex gap-2 cursor-pointer self-end">
            <p>My Movies</p>
            <FaUserAlt />
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} />
    </>
  );
};

export default NavBar;
