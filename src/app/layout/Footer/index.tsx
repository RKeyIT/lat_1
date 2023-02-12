import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
                <div className={styles.content}>
                    <div className={styles.footerItem}>
                        Learn and Teach ©2023
                    </div>
                    <div className={styles.footerItem}>
                        Let's change this world for better!
                    </div>
                </div>
        </footer>
    );
};

export default Footer;