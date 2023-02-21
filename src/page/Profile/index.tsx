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
                <UserPost message={'Hi everyone!'}/>
                <UserPost message={'=)'}/>
                <UserPost message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet beatae deleniti earum enim explicabo\n' +
                    '                fuga fugiat impedit nostrum velit veniam, voluptates. Accusantium enim ipsum minima quam repellat\n' +
                    '                tenetur voluptatum!'}/>
            </div>
        </>
    );
};