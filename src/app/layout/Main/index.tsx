import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "../../../page/Profile";
import Error from "../../../page/Error";

const Main = () => {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Profile />}/>
                    <Route path="*" element={<Error />}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default Main;