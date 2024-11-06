import React, { useEffect, useRef } from 'react';

const Cursor = () => {  
  const size = 20;
  const circle = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      const { clientX, clientY } = e;
      if (circle.current) {
        // Use `requestAnimationFrame` to make the cursor move smoothly without delay
        requestAnimationFrame(() => {
          circle.current.style.transform = `translate(${clientX - size / 2}px, ${clientY - size / 2}px)`;
        });
      }
    };

    // Add the mousemove event listener
    window.addEventListener('mousemove', updateCursorPosition);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <div
      ref={circle}
      className="fixed top-0 left-0 bg-zinc-900 mix-blend-difference rounded-full pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'fixed',
      }}
    ></div>
  );
};

export default Cursor;
