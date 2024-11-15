import React from 'react';
import './HamburgerMenu.css'; // Import the CSS file

const HamburgerMenu = ({ mobileMenu, toggleMenu }) => {
  return (
    <div
      className={`menu absolute  z-50 ${
        mobileMenu ? 'active left-to-right  ' : 'right-to-left'
      }`}
      onClick={toggleMenu}
    >
      <div className="menu-line line1"></div>
      <div className="menu-line line2"></div>
      <div className="menu-line line3"></div>
    </div>
  );
};

export default HamburgerMenu;
