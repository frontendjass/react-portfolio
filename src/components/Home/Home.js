import React from "react";
import styles from './Home.module.css';

function Home() {
    return (
        <div id="home" className={styles.hero}>
            <span><em>Frontend Developer & Designer</em></span>
            <h1>
                <span className={styles.titleHover}>Elevating </span>
                <span className={styles.titleHover}>Brands </span>
                <span className={styles.titleHover}>through </span>
                <span className={styles.titleHover}>Exceptional </span>
                <span className={styles.titleHover}>Design </span>
            </h1>
        </div>
    )
}

export default Home;
