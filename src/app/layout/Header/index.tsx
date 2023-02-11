import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className={styles.navigation}>
                    <div className={styles.icon}></div>
                    <ul className={styles.menu}>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;