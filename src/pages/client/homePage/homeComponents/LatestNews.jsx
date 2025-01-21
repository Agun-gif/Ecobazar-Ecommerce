import React from 'react';
import { MdOutlineDiscount } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageAlt } from "react-icons/bi";

const LatestNews = () => {
    return (
        <div className="py-6">
            <div className="text-center mt-44 md:mt-0">
                <p className="text-2xl text-green-500">Blog</p>
                <p className="text-4xl md:text-6xl font-bold">Latest News</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 md:px-12 lg:px-20">
                {Array(4).fill().map((_, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg shadow-md">
                        <div>
                            <img 
                                className="w-full h-64 object-cover rounded-t-lg" 
                                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png" 
                                alt="Blog" 
                            />
                        </div>
                        <div className="flex gap-2 items-center p-4 text-gray-600">
                            <MdOutlineDiscount className="text-lg" />
                            <span>Food</span>
                            <CgProfile className="text-lg ml-4" />
                            <span>By Admin</span>
                            <BiMessageAlt className="text-lg ml-4" />
                            <span>65 Comments</span>
                        </div>
                        <p className="p-4 text-gray-700">
                            Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                        </p>
                        <div className="text-center pb-4">
                            <button className="text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg text-lg">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
