import React from 'react';
import styles from "./Header.module.css"
import {LinkButton} from "../../../shared/ui/buttons/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.icon}></div>
            <ul className={styles.menu}>
                <li><LinkButton path={''} text={'Learning'}/></li>
                <li><LinkButton path={''} text={'Teaching'}/></li>
                <li><LinkButton path={''} text={'Donate'}/></li>
                <li><LinkButton path={''} text={'Show/Hide UI'}/></li>
            </ul>
        </header>
    );
};

export default Header;