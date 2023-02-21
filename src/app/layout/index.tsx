import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import Main from "./Main";

const Layout = () => {
    return (
        <BrowserRouter>
            <div className="layout">
                <Header/>
                <Main />
            </div>
        </BrowserRouter>
    );
};

export default Layout;