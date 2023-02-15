import React from 'react';
import {NavLink} from "react-router-dom";
import styles from '../buttons.module.css'
import {INavLinkButtonProps} from "../interfaces";

export const NavLinkButton: React.FC <INavLinkButtonProps> = ({path, text, style}) => {
    return (
        <NavLink to={path} className={`${styles.button}${style ? ' ' + style : ''}`}>
            {text}
        </NavLink>
    );
};