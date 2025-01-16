import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiPhone, CiSearch } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const ResponsiveNavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="bg-gray-200 py-2 md:py-4 relative">
            <div className="flex items-center justify-between px-4 md:px-[15%]">
                {/* Logo */}
                <div className="text-lg font-medium">
                    <NavLink to="/" className="hover:text-green-600">
                        Ecobazar
                    </NavLink>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                        {isDrawerOpen ? (
                            <HiX className="w-8 h-8 cursor-pointer" />
                        ) : (
                            <HiMenuAlt3 className="w-8 h-8 cursor-pointer" />
                        )}
                    </button>
                </div>

                {/* Navigation Links */}
                <nav
                    className={`${isDrawerOpen
                            ? "block transform translate-y-0 transition-transform duration-300 ease-out"
                            : "hidden transform -translate-y-full transition-transform duration-300 ease-in"
                        } absolute top-full left-0 w-full bg-gray-200 shadow-lg md:static md:flex md:justify-items-center md:w-auto md:shadow-none z-20`}
                >
                    <ul className="flex flex-col md:flex-row md:gap-8 p-4 md:p-0">
                        <li>
                            <NavLink
                                to="home"
                                className="block py-2 hover:text-green-600 md:inline"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="shop"
                                className="block py-2 hover:text-green-600 md:inline"
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="pages"
                                className="block py-2 hover:text-green-600 md:inline"
                            >
                                Pages
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="blog"
                                className="block py-2 hover:text-green-600 md:inline"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="aboutus"
                                className="block py-2 hover:text-green-600 md:inline"
                            >
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="hidden md:flex space-x-4">
                    <CiPhone className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                    <CiSearch className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                    <GiSelfLove className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                    <IoBagOutline className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                </div>
            </div>

            {/* Backdrop */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-10"
                    onClick={() => setIsDrawerOpen(false)}
                />
            )}

            {/* Icons inside Drawer for Mobile */}
            {isDrawerOpen && (
                <div className="flex justify-around mt-4 md:hidden space-x-6">
                    <CiPhone className="w-8 h-8 cursor-pointer text-gray-700" />
                    <CiSearch className="w-8 h-8 cursor-pointer text-gray-700" />
                    <GiSelfLove className="w-8 h-8 cursor-pointer text-gray-700" />
                    <IoBagOutline className="w-8 h-8 cursor-pointer text-gray-700" />
                </div>
            )}
        </div>
    );
};

export default ResponsiveNavBar;
