import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetails from './components/Movies/MovieDetails';
import NavBar from './components/Navbar/NavBar';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
