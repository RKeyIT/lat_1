import React from 'react';
import styles from './styles.module.css'

export const UserDescription = () => {
    return (
        <div className={styles.description}>
            <div className={styles.name}>
                NAME
            </div>
            <div className={styles.skills}>
                skills
            </div>
            <div className={styles.button}>
                button
            </div>
        </div>
    );
};