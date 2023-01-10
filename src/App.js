import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Actors from './components/Actors/Actors';
import Home from './components/Home/Home';
import MovieDetails from './components/Movies/MovieDetails';
import NavBar from './components/Navbar/NavBar';
import ScrollToTop from './utils/scrollToTop';
import { IsOpenProvider } from './contexts/isOpenContext';
import MyMovies from './components/MyMovies/MyMovies';

function App() {
  return (
    <>
      <IsOpenProvider>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-movies" element={<MyMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </IsOpenProvider>
    </>
  );
}

export default App;
