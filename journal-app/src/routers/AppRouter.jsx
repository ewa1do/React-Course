import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import {
  auth,
  onAuthStateChanged,
} from '../firebase/firebaseConfig';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <div>
        <h1>Espere...</h1>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          // element={<JournalScreen />}
          element={
            <PrivateRoute logged={isLoggedIn}>
              <JournalScreen />
            </PrivateRoute>
          }
          exact
        />

        <Route
          path='/auth/*'
          // element={<AuthRouter />}
          element={
            <PublicRoute logged={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          }
        />

        {/* <Route
          path='*'
          element={
            <Navigate
              to='/'
              replace
            />
          }
        /> */}
      </Routes>
    </Router>
  );
};
