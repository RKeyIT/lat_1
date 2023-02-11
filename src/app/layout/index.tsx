import React from 'react';
import Header from "./Header";
import AsideLeft from "./Aside/AsideLeft";
import Main from "./Main";
import AsideRight from "./Aside/AsideRight";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <AsideLeft />
            <Main />
            <AsideRight />
            <Footer />
        </div>
    );
};

export default Layout;