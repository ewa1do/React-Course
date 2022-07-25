import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ logged, children }) => {
  return logged ? children : <Navigate to='/login' />;
};
