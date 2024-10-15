// components/SideNavbar.js
'use client'
import { useState } from 'react';

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu Icon */}
      <div style={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? (
          <span style={styles.cross}>&#10005;</span> // Cross icon (X)
        ) : (
          <span style={styles.lines}>&#9776;</span> // Hamburger icon (≡)
        )}
      </div>

      {/* Sidebar Menu */}
      <div style={{ ...styles.sideNav, width: isOpen ? '250px' : '0' }}>
        <a href="#" style={styles.link}>Auctions</a>
        <a href="#" style={styles.link}>Preview</a>
        <a href="#" style={styles.link}>Results</a>
        <a href="#" style={styles.link}>Sell Your Vehicle</a>
        <a href="#" style={styles.link}>About Us</a>
        <a href="#" style={styles.link}>FAQ</a>
        <a href="#" style={styles.link}>Team</a>
        <a href="#" style={styles.link}>Press</a>
        <a href="#" style={styles.link}>Careers</a>
        <a href="#" style={styles.link}>Contact Us</a>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  hamburger: {
    cursor: 'pointer',
    fontSize: '30px',
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: 1000,
  },
  lines: {
    fontSize: '30px',
  },
  cross: {
    fontSize: '30px',
  },
  sideNav: {
    height: '100%',
    width: '0',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: '#111',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
  },
  link: {
    padding: '8px 8px 8px 32px',
    textDecoration: 'none',
    fontSize: '25px',
    color: 'white',
    display: 'block',
    transition: '0.3s',
  },
};
