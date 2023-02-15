import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import AsideLeft from "./Aside/AsideLeft";
import AsideRight from "./Aside/AsideRight";
import Footer from "./Footer";
import Main from "./Main";

const Layout = () => {
    return (
        <BrowserRouter>
            <div className="layout">
                <Header/>
                <AsideLeft/>
                <Main />
                <AsideRight/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default Layout;