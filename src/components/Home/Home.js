import React from 'react';
import Movies from '../Movies/Movies';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Movies/>
    </div>
  );
};

export default Home;
