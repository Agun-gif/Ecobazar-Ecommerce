import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import MainNavbar from '../components/MainNavbar';
import TopBar from '../components/Topbar';

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