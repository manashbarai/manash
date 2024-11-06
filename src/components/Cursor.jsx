import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Cursor = (props) => {
  const size=props.size ||20;
  const color=props.value ||900;
  const circle = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      const { clientX, clientY } = e;

      if (circle.current) {
        // Use GSAP to smoothly move the cursor to the new position
        gsap.to(circle.current, {
          x: clientX - size / 2,  // X coordinate adjusted by half of the size
          y: clientY - size / 2,  // Y coordinate adjusted by half of the size
          duration: 0.1, // Adjust this duration for smoothness
          ease: 'power2.out',  // Smooth ease-in-out transition
        });
      }
    };

    const onMouseEnter = () => {
      // Change cursor size when hovering over specific areas
      setSize(50);  // Example size increase
    };

    const onMouseLeave = () => {
      // Reset the cursor size
      setSize(defaultSize);
    };

    // Add the mousemove event listener
    window.addEventListener('mousemove', updateCursorPosition);

    // Add mouse enter/leave event listeners for size transition
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [size]); // Re-run useEffect whenever the size changes

  return (
    <div
      ref={circle}
      className={`fixed top-0 left-0 bg-zinc-900  mix-blend-difference rounded-full pointer-events-none`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'fixed',
        transition: 'width 0.3s ease, height 0.3s ease', // Smooth transition on size change
      }}
    ></div>
  );
};

export default Cursor;
