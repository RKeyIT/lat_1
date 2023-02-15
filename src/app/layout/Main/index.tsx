import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Profile} from "../../../page/Profile";
import Error from "../../../page/Error";
import styles from './styles.module.css'

const Main = () => {
    return (
        <main className={styles.Main}>
            <Routes>
                <Route path="/" element={<Profile/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </main>
    );
};

export default Main;