import React from 'react'
import { GiSelfLove } from 'react-icons/gi';
import { IoBagOutline } from 'react-icons/io5';

const TopBar = () => {
    return (
        <div>
            <div className='md:flex justify-between items-center px-32 py-2'>
                <div>
                    <p className='text-2xl'>Ecobazar</p>
                </div>
                <div>
                    <form className="max-w-md mx-auto">
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <input type="search" id="default-search" className="w-[460px] -ml-20  md:w-[500px] md:-ml-36 p-4 md:ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Gmail Address" required />
                            <button type="submit" className="text-white absolute ml-[330px] md:ml-[320px] bottom-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>
                <div className="flex space-x-4  md:mt-0">
                    <GiSelfLove className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                    <IoBagOutline className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default TopBar
