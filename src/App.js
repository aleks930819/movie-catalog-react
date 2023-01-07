import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/Movies/MovieDetails';
import Movies from './components/Movies/Movies';
import NavBar from './components/Navbar/NavBar';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

      </Routes>
    </>
  );
}

export default App;
