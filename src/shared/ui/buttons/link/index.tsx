import React from 'react';
import {Link} from "react-router-dom";
import styles from '../buttons.module.css'
import {ILinkButtonProps} from "../interfaces";

export const LinkButton = (props: ILinkButtonProps) => {
    const {path, text} = props
    return (
        <Link to={path} className={styles.linkButton}>
            {text}
        </Link>
    );
};