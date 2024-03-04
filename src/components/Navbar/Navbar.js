import React, { useState } from 'react';
import styles from './Navbar.module.css'; 

function Navbar() {
  const [active, setActive] = useState(false); 

  const handleActive = () => {
    setActive(!active); 
  }

  return (
    <header className={styles.navbarHeader}>
      <nav className={styles.navbar}>
        <span className={styles.logo}>Jass</span>
        <ul className={`${styles.navbarList} ${active ? styles.active : 'active'}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
        <div className={styles.hamburger} onClick={handleActive}>
        {!active ? (
          <>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </>
        ) : (
          <>
            <span className={styles.activeBar}></span>
            <span className={styles.activeBar}></span>
            <span className={styles.activeBar}></span>

          </>
        )}
         
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

