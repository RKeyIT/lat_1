import React from 'react';
import styles from './UserAvatar.module.css'
import {IUserAvatarProps} from "./interface";

export const UserAvatar: React.FC<IUserAvatarProps> = ({img}) => {
    return (
        <div className={styles.avatarWrapper}>
        </div>
    );
};