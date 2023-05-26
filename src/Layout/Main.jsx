import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;