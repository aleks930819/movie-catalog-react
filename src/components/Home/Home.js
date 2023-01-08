import React, { useContext } from 'react';
import { isOpenContext } from '../../contexts/isOpenContext';
import Movies from '../Movies/Movies';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
  const { open } = useContext(isOpenContext);
  console.log(open);
  return (
    <div className="flex">
      <Sidebar />

      <Movies />
    </div>
  );
};

export default Home;
