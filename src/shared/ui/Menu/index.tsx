import React from 'react';
import styles from './Menu.module.css'
import {NavLinkButton} from "../buttons/NavLinkButton"
import {IMenuProps} from "./interface";

export const Menu: React.FC <IMenuProps> = ({switcher}) => {
    return (
        <div>
            <ul className={styles.menu} style={ switcher }>
                <li className={styles.menuItem}>
                    <NavLinkButton path={'/profile'} text={'Profile'}/>
                </li>
                <li className={styles.menuItem}>
                    <NavLinkButton path={'/dialogues'} text={'Dialogues'}/>
                </li>
                <li className={styles.menuItem}>
                    <NavLinkButton path={'/settings'} text={'Settings'}/>
                </li>
            </ul>
        </div>
    );
}