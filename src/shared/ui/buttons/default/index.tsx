import React from 'react';
import styles from '../buttons.module.css'
import {IButtonProps} from "../interfaces";

export const Button = (props: IButtonProps) => {
    const {handler, text} = props
    return (
        <button onClick={handler}>
            {text}
        </button>
    );
};
