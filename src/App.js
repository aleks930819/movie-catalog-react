import { Route, Routes } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import NavBar from './components/Navbar/NavBar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
