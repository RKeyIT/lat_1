import React from 'react';
import {NavLinkButton} from "../../../../shared/ui/buttons/navLink";
import styles from './AsideLeft.module.css'

const AsideLeft = () => {
    return (
        <aside className="aside-left">
            <nav className={styles.menu}>
                <NavLinkButton path={'/profile'} text={'Profile'} />
                <NavLinkButton path={'/dialogues'} text={'Dialogues'} />
                <NavLinkButton path={'/community'} text={'Community'} />
                <NavLinkButton path={'/settings'} text={'Settings'} />
            </nav>
        </aside>
    );
};

export default AsideLeft;