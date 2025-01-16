import React from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { IoBagOutline } from 'react-icons/io5';

const TopBar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="flex flex-wrap items-center justify-between px-4 py-2 md:px-32">
        {/* Logo Section */}
        <div className="flex items-center">
          <p className="text-lg md:text-2xl font-bold">Ecobazar</p>
        </div>

        {/* Search Bar */}
        <div className="grow mx-4 mt-4 md:mt-0">
          <form className="relative">
            <input
              type="search"
              id="default-search"
              className="w-full p-3 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </form>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <GiSelfLove className="w-6 h-6 md:w-8 md:h-8 text-gray-700 hover:text-blue-700 cursor-pointer" />
          <IoBagOutline className="w-6 h-6 md:w-8 md:h-8 text-gray-700 hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
