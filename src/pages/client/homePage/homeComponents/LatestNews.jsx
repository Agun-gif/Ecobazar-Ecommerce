import React from 'react';
import { MdOutlineDiscount } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageAlt } from "react-icons/bi";

const LatestNews = () => {
    return (
        <div>
            <div className='text-center py-6'>
                <p className='text-2xl text-green-500'>Blog</p>
                <p className='text-4xl sm:text-5xl md:text-6xl font-bold'>Latest News</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-6 sm:px-12 md:px-28'>
                {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className='border border-gray-400 rounded-lg w-full sm:w-80 md:w-96'>
                        <div>
                            <img className='w-full h-56 object-cover rounded-t-lg' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png" alt="Latest News" />
                        </div>
                        <div className='flex gap-4 items-center p-4 text-sm text-gray-600'>
                            <MdOutlineDiscount /> Food
                            <CgProfile /> By Admin
                            <BiMessageAlt /> 65 Comments
                        </div>
                        <p className='p-4 text-base sm:text-lg'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                        <button className='text-lg sm:text-2xl text-green-500 p-4 w-full border-t-2 border-gray-300 hover:bg-gray-100'>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
