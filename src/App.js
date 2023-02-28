import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Actors from './components/Actors/Actors';
import Home from './components/Home/Home';
import MovieDetails from './components/Movies/MovieDetails';
import NavBar from './components/Navbar/NavBar';
import ScrollToTop from './utils/scrollToTop';
import { IsOpenProvider, isOpenContext } from './contexts/isOpenContext';
import MyMovies from './components/MyMovies/MyMovies';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Sidebar from './components/Sidebar/Sidebar';
import SignIn from './components/SignIn/SignIn';
import { useDispatch } from 'react-redux';
import { useContext, useEffect } from 'react';

import { auth } from './firebase';
import { login, logout } from './features/user';
import SignUp from './components/SignUp/SignUp';
function App() {
  const dispatch = useDispatch();
  const { open } = useContext(isOpenContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <>

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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="*" element={<PageNotFound />} />;
      </Routes>
    </>
  );
}

export default App;
