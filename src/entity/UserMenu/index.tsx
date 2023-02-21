import React, {useState} from 'react';
import {Button} from "../../shared/ui/buttons/Button";
import {Menu} from "../../shared/ui/Menu";

export const UserMenu = () => {
    const [switcher, setSwitcher] = useState('none')

    const switchMenu = () => {
        switcher === 'none' ? setSwitcher('flex') : setSwitcher('none')
    }

    return (
        <div>
            <Button text='Menu' handler={switchMenu}/>
            <Menu switcher={{display: switcher}}/>
        </div>
    );
};