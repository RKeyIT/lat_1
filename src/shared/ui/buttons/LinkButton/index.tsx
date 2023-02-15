import React from 'react';
import {Link} from "react-router-dom";
import styles from '../buttons.module.css'
import {ILinkButtonProps} from "../interfaces";

export const LinkButton: React.FC<ILinkButtonProps> = ({path,text,style }) => {
    return (
        <Link to={path} className={`${styles.button}${style ? ' ' + style : ''}`}>
            {text}
        </Link>
    );
};