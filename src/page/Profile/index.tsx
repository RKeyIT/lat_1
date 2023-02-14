import React from 'react';
import styles from './styles.module.css'
import {UserAvatar} from "../../entity/UserAvatar";
import {UserCard} from "../../entity/UserCard";
import {UserDescription} from "../../entity/UserDescription";
import {UserActions} from "../../entity/UserActions";
import {UserTextArea} from "../../entity/UserTextArea";
import {UserMessage} from "../../entity/UserMessage";

export const Profile = () => {
    return (
        <>
            <div className={styles.ProfileGrid}>
                <UserAvatar />
                <UserDescription />
                <UserCard />
                <UserActions />
                <UserTextArea />
            </div>
            <div className={styles.ProfilePosts}>
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
            </div>
        </>
    );
};