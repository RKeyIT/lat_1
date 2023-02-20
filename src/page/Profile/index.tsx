import React from 'react';
import styles from './styles.module.css'
import {UserAvatar} from "../../entity/UserAvatar";
import {UserCard} from "../../entity/UserCard";
import {UserDescription} from "../../entity/UserDescription";
import {UserActions} from "../../entity/UserActions";
import {UserNewPost} from "../../entity/UserNewPost";
import {UserPost} from "../../entity/UserPost";

export const Profile = () => {
    return (
        <>
            <div className={styles.ProfileGrid}>
                <UserAvatar />
                <UserDescription />
                <UserCard />
                <UserActions />
                <UserNewPost />
            </div>
            <div className={styles.ProfilePosts}>
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
            </div>
        </>
    );
};