import React from 'react';
import styles from './styles.module.css'
import {Button} from "../../shared/ui/buttons/Button";

export const UserDescription = () => {
    return (
        <div className={styles.description}>
            <div className={styles.name}>
                USER_NAME
            </div>
            <div className={styles.skills}>
                <ul> SKILLS
                    <li>TypeScript</li>
                    <li>Funny</li>
                </ul>
            </div>
            <div className={styles.button}>
                <Button text={'More about USER_NAME'}/>
            </div>
        </div>
    );
};