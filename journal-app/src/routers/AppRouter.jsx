import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<JournalScreen />}
          exact
        />
        <Route
          path='/auth/*'
          element={<AuthRouter />}
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
