import React, {useState} from 'react';
import styles from './styles.module.css'
import {Button} from "../../shared/ui/buttons/Button";
import {TextArea} from "../../shared/ui/TextArea";

export const UserNewPost = () => {
    const [value, setValue] = useState('')

    return (
        <div className={styles.UserTextArea}>
            <TextArea value={value} onChange={e=>setValue(e.target.value)} placeholder={'Enter message...'} />
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