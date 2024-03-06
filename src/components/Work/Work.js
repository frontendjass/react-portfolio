import React from "react";
import styles from './Work.module.css';

function Work() {
    return (
        <section id="work" className={styles.work}>
            <div className={styles.workTitle}>
                <h2><span className={styles.bold}>Sleek Sophistication</span>: Embracing the Power of Simple Elegance</h2>
                <h3>My designs embody <em>minimalist</em> refinement and timeless <em>elegance</em>, resonating with <em>sophistication</em>. Welcome to a world where <em>simplicity reigns supreme</em>.</h3>
            </div>
            <div className={styles.worksList}>
                <div className={styles.customLine}></div>
                <a href=""><h4>Title of Work Number I</h4></a>
                <div className={styles.customLine}></div>
                <a href=""><h4>Title of Work Number II</h4></a>
                <div className={styles.customLine}></div>
                <a href=""><h4>Title of Work Number III</h4></a>
                <div className={styles.customLine}></div>
                <a href=""><h4>Title of Work Number IV</h4></a>
                <div className={styles.customLine}></div>
                <a href=""><h4>Title of Work Number V</h4></a>
                <div className={styles.customLine}></div>
            </div>

        </section>
    )
}

export default Work;