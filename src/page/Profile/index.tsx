import React from 'react';
import styles from './styles.module.css'
import {UserAvatar} from "../../entity/UserAvatar";
import {UserCard} from "../../entity/UserCard";
import {UserDescription} from "../../entity/UserDescription";

const Profile = () => {
    return (
        <div className={styles.grid}>
            <UserAvatar />
            <UserDescription />
            <UserCard />
        </div>
    );
};

export default Profile;