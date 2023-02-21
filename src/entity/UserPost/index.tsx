import React from 'react';
import styles from './styles.module.css'
import {IUserPostProps} from "./interface";

export const UserPost: React.FC<IUserPostProps> = ({message}) => {
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
                {message}
            </div>
        </div>
    );
};