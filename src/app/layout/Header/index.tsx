import React from 'react';
import styles from "./Header.module.css"
import {LinkButton} from "../../../shared/ui/buttons/LinkButton";
import {UserMenu} from "../../../entity/UserMenu";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerLayout}>
                    <UserMenu />
                    <nav>
                        <div className={styles.navigationList}>
                            <li className={styles.navigationItem}><LinkButton path={''} text={'Learning'}/></li>
                            <li className={styles.navigationItem}><LinkButton path={''} text={'Teaching'}/></li>
                            <li className={styles.navigationItem}><LinkButton path={'/community'} text={'Community'}/></li>
                            <li className={styles.navigationItem}><LinkButton path={''} text={'Donate'}/></li>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};