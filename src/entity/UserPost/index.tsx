import React from 'react';
import styles from './styles.module.css'

export const UserPost = () => {
    return (
        <div className={styles.MessageBlock}>
            <div className={styles.UserData}>
                <div className={styles.UserAvatar}>
                </div>
                <div className={styles.Author}>
                <span className={styles.UserName}>
                    USER_NAME
                </span>
                    |
                    <span className={styles.SendingDate}>
                    Yesterday at 16:34
                </span>
                </div>
            </div>
            <div className={styles.UserMessage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet beatae deleniti earum enim explicabo
                fuga fugiat impedit nostrum velit veniam, voluptates. Accusantium enim ipsum minima quam repellat
                tenetur voluptatum!
            </div>
        </div>
    );
};