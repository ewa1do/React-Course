import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import NavBar from './NavBar';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route
            exact
            path='/'
            element={<HomeScreen />}
          />

          <Route
            exact
            path='/about'
            element={<AboutScreen />}
          />

          <Route
            exact
            path='/login'
            element={<LoginScreen />}
          />

          {/* <Route element={<HomeScreen />} /> */}
          <Route
            path='*'
            element={<HomeScreen />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
