import React, { useEffect, useState } from 'react';

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    // * the first part of use effect is the side effect we wanna include

    const mouseMove = (e) => {
      const coords = { x: e.pageX, y: e.pageY };

      setCoords(coords);
    };

    window.addEventListener('mousemove', mouseMove);

    // * The return is the 'cleanup' we use it when we want to avoid several requests
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>sos kul</h3>

      <p>
        X {x} Y: {y}
      </p>
    </div>
  );
};

export default Message;
