import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import MainNavbar from '../components/MainNavbar.jsx';
import TopBar from '../components/TopBar.jsx';

const MainLayout = () => {
    return (
        <div>
            <TopBar/>
            <MainNavbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;