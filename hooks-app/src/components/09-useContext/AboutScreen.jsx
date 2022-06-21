import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({});
  };

  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className='btn btn-danger'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default AboutScreen;
