import React from 'react';
import {NavLink} from "react-router-dom";
import styles from '../buttons.module.css'
import {INavLinkButtonProps} from "../interfaces";

export const NavLinkButton: React.FC <INavLinkButtonProps> = ({path, text, className}) => {
    return (
        <NavLink to={path} className={styles.linkButton}>
            {text}
        </NavLink>
    );
};