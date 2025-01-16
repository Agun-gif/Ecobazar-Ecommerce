import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";


const Filter = () => {
    return (
        <div>
            <div className="pt-10 px-4 md:px-36">
               
                <div className="flex flex-wrap justify-between gap-4">
                    
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 border border-gray-500 p-2 w-60 sm:w-48">
                            <button className="text-sm md:text-xl">
                                <p>Select Category</p>
                            </button>
                            <FaAngleDown className="text-lg md:text-2xl" />
                        </div>
                        <div className="flex items-center gap-2 border border-gray-500 p-2 w-60  sm:w-48">
                            <button className="text-sm md:text-xl">
                                <p>Select Price</p>
                            </button>
                            <FaAngleDown className="text-lg md:text-2xl" />
                        </div>
                        <div className="flex items-center gap-2 border border-gray-500 p-2 w-60 sm:w-48">
                            <button className="text-sm md:text-xl">
                                <p>Select Rating</p>
                            </button>
                            <FaAngleDown className="text-lg md:text-2xl" />
                        </div>
                    </div>

                    
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 border border-gray-500 p-2 w-60  sm:w-48">
                            <button className="text-sm md:text-xl">
                                <p>Sort By Latest</p>
                            </button>
                            <FaAngleDown className="text-lg md:text-2xl" />
                        </div>
                        <div className="flex items-center gap-2 border border-gray-500 p-2 w-60  sm:w-48">
                            <button className="text-sm md:text-xl">
                                <p>Show: 16</p>
                            </button>
                            <FaAngleDown className="text-lg md:text-2xl" />
                        </div>
                    </div>
                </div>

               
                <div className="flex flex-wrap justify-between items-center gap-4 mt-10">
                    
                    <div className="flex flex-wrap items-center gap-4">
                        <p className="text-sm md:text-xl">Active Filter:</p>
                        <div className="flex items-center gap-2">
                            <button className="text-sm md:text-xl">
                                <p>Select Category</p>
                            </button>
                            <RxCross1 className="text-lg md:text-2xl" />
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="text-sm md:text-xl">
                                <p>Select Category</p>
                            </button>
                            <RxCross1 className="text-lg md:text-2xl" />
                        </div>
                    </div>

                   
                    <div>
                        <p className="text-sm md:text-xl">2,547 Results found.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
