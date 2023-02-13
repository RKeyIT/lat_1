import React from 'react';
import styles from './styles.module.css'
import {UserAvatar} from "../../entity/UserAvatar";
import {UserCard} from "../../entity/UserCard";
import {UserDescription} from "../../entity/UserDescription";
import {UserActions} from "../../entity/UserActions";
import {UserTextArea} from "../../entity/UserTextArea";
import {UserMessage} from "../../entity/UserMessage";

const Profile = () => {
    return (
        <div className={styles.grid}>
            <UserAvatar />
            <UserDescription />
            <UserCard />
            <UserActions />
            <UserTextArea />
            <UserMessage />
        </div>
    );
};

export default Profile;