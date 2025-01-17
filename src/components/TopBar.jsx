import React from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { IoBagOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="bg-white shadow-md w-full">
            <div className="flex flex-wrap items-center justify-between px-4 py-3 md:px-32">
                {/* Logo Section */}
                <div>
                    <p className="text-2xl font-bold text-gray-800">Ecobazar</p>
                </div>

                {/* Search Bar */}
                <div className="w-full md:w-auto mt-4 md:mt-0">
                    <form className="relative max-w-md mx-auto">
                        <input
                            type="search"
                            id="default-search"
                            className="w-full md:w-[500px] p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                            placeholder="Your Gmail Address"
                            required
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 -mr-52"
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* Icons Section */}
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <NavLink to="Wishlist"><GiSelfLove className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-blue-700 cursor-pointer" /></NavLink>
                    <NavLink to="ShopPing"><IoBagOutline className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-blue-700 cursor-pointer" /></NavLink>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default TopBar;
