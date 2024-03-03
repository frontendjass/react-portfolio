import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.navbarHeader}>
        <nav className={styles.navbar}>
        <span className={styles.logo}>Jass</span>
        <ul className={styles.navbarList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Me</a></li>
        </ul>
        </nav>
    </header>

  );
}

export default Navbar;
