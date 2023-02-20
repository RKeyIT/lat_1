import React from 'react';
import styles from './UserCard.module.css'

export const UserCard = () => {
    return (
        <div className={styles.UserCard}>
            <div className={styles.CardDescriptions}>
                <div className={styles.CardName}>
                    Activity community card of <span className={styles.UserName}>USER_NAME</span>
                </div>
                <div className={styles.UserDescription}>
                    <div className={styles.UserStatus}>
                        All of my life I have a white streak!
                    </div>
                    <div className={styles.LastActivity}>
                        <ul className={styles.LastActivityList}>
                            <li>Completed theme "Async/Await" of JavaScript</li>
                            <li>Exam CSS&Preprocessors passed</li>
                            <li>Test "Programming basics" passed</li>
                            <li>Exam "Basic School" passed</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.Charts}>
                <div className={styles.UserRating}>
                    *****
                </div>
                <div className={styles.UserRoundChart}>
                    Первая диаграма
                </div>
                <div className={styles.UserRadarChart}>
                    Вторая диаграма
                </div>
            </div>
        </div>
    );
};