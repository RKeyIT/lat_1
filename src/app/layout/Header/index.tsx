import React from 'react';
import styles from "./Header.module.css"
import {LinkButton} from "../../../shared/ui/buttons/LinkButton";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.icon}></div>
            <ul className={styles.menu}>
                <li className={styles.menuItem}><LinkButton path={''} text={'Learning'}/></li>
                <li className={styles.menuItem}><LinkButton path={''} text={'Teaching'}/></li>
                <li className={styles.menuItem}><LinkButton path={''} text={'Donate'}/></li>
                <li className={styles.menuItem}><LinkButton path={''} text={'Show/Hide UI'}/></li>
            </ul>
        </header>
    );
};

export default Header;