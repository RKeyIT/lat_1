import React from 'react';
import styles from "./Header.module.css"
import {LinkButton} from "../../../shared/ui/buttons/LinkButton";
import {NavLinkButton} from "../../../shared/ui/buttons/NavLinkButton";
import {Button} from "../../../shared/ui/buttons/Button";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerLayout}>
                    <Button text={'Menu'}/>

                    <div className={styles.menu}>
                        <li className={styles.menuItem}>
                            <NavLinkButton path={'/profile'} text={'Profile'}/>
                        </li>
                        <li className={styles.menuItem}>
                            <NavLinkButton path={'/dialogues'} text={'Dialogues'}/>
                        </li>
                        <li className={styles.menuItem}>
                            <NavLinkButton path={'/settings'} text={'Settings'}/>
                        </li>
                    </div>

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

export default Header;