import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
      
        <Link to="/" className={styles.navLink}>Ingredient Guru</Link>
        
      </nav>
    </>
  );
}

export default NavBar;