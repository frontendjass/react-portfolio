import React, { useState } from "react";
import styles from './Work.module.css';

function Work() {
    const [picture, setPicture] = useState('');
    let hoverTimer;

    const changePicture = (imageName) => {
        hoverTimer = setTimeout(() => {
            setPicture(require(`./${imageName}`));
        }, 150); // 1.5 seconds delay
    }

    const clearTimer = () => {
        clearTimeout(hoverTimer);
    }

    return (
        <section id="work" className={styles.work}>
            <div className={styles.workTitle}>
                <h2><span className={styles.bold}>Sleek Sophistication</span>: Embracing the Power of Simple Elegance</h2>
                <h3>My designs embody <em>minimalist</em> refinement and timeless <em>elegance</em>, resonating with <em>sophistication</em>. Welcome to a world where <em>simplicity reigns supreme</em>.</h3>
            </div>
            <div className={styles.workContainer}>
                <div className={styles.worksList}>
                    <div className={styles.customLine}></div>
                    <button onMouseEnter={() => changePicture("work1.jpg")}>Title of Work Number I</button>
                    <div className={styles.customLine}></div>
                    <button onMouseEnter={() => changePicture("work2.jpg")}>Title of Work Number II</button>
                    <div className={styles.customLine}></div>
                    <button onMouseEnter={() => changePicture("work3.jpg")}>Title of Work Number III</button>
                    <div className={styles.customLine}></div>
                    <button onMouseEnter={() => changePicture("work4.jpg")}>Title of Work Number IV</button>
                    <div className={styles.customLine}></div>
                    <button onMouseEnter={() => changePicture("work5.jpg")}>Title of Work Number V</button>
                    <div className={styles.customLine}></div>
                </div>
                {picture ? (
                    <>
                        <div className={styles.pictureContainer}>
                            <img src={picture} alt="empty for now" />
                        </div>
                    </>
                ) : null}
                
            </div>
            

        </section>
    )
}

export default Work;