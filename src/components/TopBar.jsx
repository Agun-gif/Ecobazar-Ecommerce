import React from "react";
import { GiSelfLove } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="bg-white shadow-md w-full">
            <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-32 space-y-4 md:space-y-0">
                {/* Logo Section */}
                <div className="flex-1 md:flex-none text-center md:text-left">
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">
                        Ecobazar
                    </p>
                </div>

                {/* Search Bar */}
                <div className="w-full md:w-auto flex-1">
                    <form className="relative mx-auto max-w-full sm:max-w-xs md:max-w-md">
                        <input
                            type="search"
                            id="default-search"
                            className="w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 placeholder-gray-400"
                            placeholder="Search..."
                            required
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* Icons Section */}
                <div className="flex justify-center md:justify-end items-center space-x-6">
                    <NavLink to="/wishlist">
                        <GiSelfLove className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600 hover:text-green-600 cursor-pointer" />
                    </NavLink>
                    <NavLink to="/shopping">
                        <IoBagOutline className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600 hover:text-green-600 cursor-pointer" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
