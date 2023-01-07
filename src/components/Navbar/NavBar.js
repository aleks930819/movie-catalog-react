import { FaUserAlt } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { BiMenu } from 'react-icons/bi';

import React, { useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import useCloseOutside from '../../hooks/useCloseOutside';
import Search from '../Search/Search';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuClickHandler = () => {
    setIsOpen(!isOpen);
  };

  let menuRef = useCloseOutside(() => {
    setIsOpen(false);
  });

  const icon = (
    <span>{isOpen ? <GrClose size={40} /> : <BiMenu size={40} />}</span>
  );

  return (
    <>
      <nav
        ref={menuRef}
        className="bg-cyan-900 w-full h-2/5  text-white pt-5 pl-6 pr-6 text-sm"
      >
        <div className="flex  justify-between  pr-6 pt-6 pb-6 ">
        <div className=" cursor-pointer   self-baseline">
            <BiMenu size={40} onClick={mobileMenuClickHandler} />
          </div>
          <Search/>
          <div className="flex gap-2 cursor-pointer self-baseline">
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
