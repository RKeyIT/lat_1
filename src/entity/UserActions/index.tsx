import React from 'react';
import styles from './styles.module.css'
import {Button} from "../../shared/ui/buttons/Button";

export const UserActions = () => {
    return (
        <div className={styles.UserActions}>
            <Button text={'Send message'}/>
            <Button text={'Subscribe'}/>
            <Button text={'Donate'}/>
            <Button text={'Order teaching'}/>
        </div>
    );
};