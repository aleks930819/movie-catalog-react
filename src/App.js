import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Actors from './components/Actors/Actors';
import Home from './components/Home/Home';
import MovieDetails from './components/Movies/MovieDetails';
import NavBar from './components/Navbar/NavBar';
import ScrollToTop from './utils/scrollToTop';
import MyMovies from './components/MyMovies/MyMovies';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SignIn from './components/SignIn/SignIn';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { auth } from './firebase';
import { login, logout } from './features/user';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  const dispatch = useDispatch();

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
        position="bottom-center"
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
        <Route
          path="/my-movies"
          element={
            <PrivateRoute>
              <MyMovies />
            </PrivateRoute>
          }
        />
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
