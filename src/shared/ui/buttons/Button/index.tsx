import React, {FC} from 'react';
import styles from '../buttons.module.css'
import {IButtonProps} from "../interfaces";

export const Button: FC<IButtonProps> = ({style,text,handler}) => {
    return (
        <button onClick={handler} className={`${styles.button}${style ? ' ' + style : ''}`}>
            {text}
        </button>
    );
};
