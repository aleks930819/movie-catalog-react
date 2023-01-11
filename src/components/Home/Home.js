import React, { useContext } from 'react';
import { isOpenContext } from '../../contexts/isOpenContext';
import Movies from '../Movies/Movies';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
  const { open } = useContext(isOpenContext);

  return (
    <div className="flex flex-col md:flex-row">
      {open ? <Sidebar /> : ''}

      <Movies />
    </div>
  );
};

export default Home;
