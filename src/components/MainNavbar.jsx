import React   from 'react';
import { NavLink } from 'react-router-dom';
import { CiPhone, CiSearch } from 'react-icons/ci';
import { GiSelfLove } from 'react-icons/gi';
import { IoBagOutline } from 'react-icons/io5';

const MainNavbar = () => {
    return (
        <div className="bg-gray-200 py-2 md:py-4">
            <div className="flex flex-rows md:flex-row items-center justify-between px-8 md:px-[15%]">
                {/* Navigation Links */}
                <nav className="text-lg font-medium">
                    <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
                        <NavLink to="home" className="hover:text-green-600">Home</NavLink>
                        <NavLink to="shop" className="hover:text-green-600">Shop</NavLink>
                        <NavLink to="pages" className="hover:text-green-600">Pages</NavLink>
                        <NavLink to="blog" className="hover:text-green-600">Blog</NavLink>
                        <NavLink to="aboutus" className="hover:text-green-600">AboutUs</NavLink>
                    </ul>
                </nav>

                {/* Logo */}
                <div className="text-lg font-medium my-4 md:my-0">
                    <NavLink to="ecobazar" className="hover:text-green-600">Ecobazar</NavLink>
                </div>

                {/* Icons */}
                <div className="flex space-x-4  md:mt-0">
                    <CiPhone className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                    <CiSearch className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                    <GiSelfLove className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                    <IoBagOutline className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default MainNavbar;
