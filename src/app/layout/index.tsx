import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import AsideLeft from "./Aside/AsideLeft";
import AsideRight from "./Aside/AsideRight";
import Footer from "./Footer";
import Profile from "../../page/Profile";
import Error from "../../page/Error";

const Layout = () => {
    return (
        <BrowserRouter>
            <div className="layout">
                <Header/>
                <AsideLeft/>
                <main className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<Profile/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                </main>
                <AsideRight/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default Layout;