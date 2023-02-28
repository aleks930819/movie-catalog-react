import { Navigate } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';
import useAuthStatus from '../../hooks/useAuthStatus';

const PrivateRoute = ({ children }) => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
