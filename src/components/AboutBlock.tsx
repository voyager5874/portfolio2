import React from 'react';
import styles from './AboutBlock.module.css'

export const AboutBlock = () => {
    return (
        <div className={styles.block}>
            <div className={styles.blockContentBox}>
                <div className={styles.aboutText}>
                    <h1>Hi I am Aleksandr</h1>
                    <p>Frontend react developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
            
        </div>
    );
};

