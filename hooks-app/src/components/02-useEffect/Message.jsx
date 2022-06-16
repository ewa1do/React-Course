import React, { useEffect } from 'react';

const Message = () => {
  useEffect(() => {
    console.log('Component mount');

    return () => {
      console.log('Component unmount');
    };
  }, []);

  return (
    <div>
      <h3>sos kul</h3>
    </div>
  );
};

export default Message;
