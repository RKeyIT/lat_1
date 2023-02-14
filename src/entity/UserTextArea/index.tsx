import React from 'react';
import styles from './styles.module.css'
import {Button} from "../../shared/ui/buttons/Button";

export const UserTextArea = () => {
    return (
        <div className={styles.UserTextArea}>
            <textarea placeholder={'Create post'}/>
            <div className={styles.Controls}>
                <div className={styles.ControlButtons}>
                    <Button text={"A"}/>
                    <Button text={"B"}/>
                    <Button text={"C"}/>
                    <Button text={"X"}/>
                </div>
                <Button text={"Send post"}/>
            </div>
        </div>
    );
};