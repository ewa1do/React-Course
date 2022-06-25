import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LoginScreen from '../components/login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={<LoginScreen />}
        />

        <Route
          path='/*'
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route
          path='/*'
          element={<DashboardRoutes />}
        /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
