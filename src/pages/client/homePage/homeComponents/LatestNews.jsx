import React from 'react'
import { MdOutlineDiscount } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageAlt } from "react-icons/bi";




const LatestNews = () => {
    return (
        <div>
            <div className='text-center md:text-center py-6 md:'>
                <p className='text-2xl text-green-500'>Blog</p>
                <p className='text-6xl'>Latest News</p>
            </div>
            <div className='grid grid-cols-1 px-36 md:grid-cols-4 gap-20 md:px-28 '>
                <div className='border border-gray-400 rounded-lg w-96'>
                    <div>
                        <img className='w-96' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png" alt="" />
                    </div>
                    <div className='flex gap-4 items-center p-4'>
                        <MdOutlineDiscount />Food
                        <CgProfile />By Admin
                        <BiMessageAlt />65 Comments
                    </div>
                    <p className='p-4'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    <button className='text-2xl p-4'>Read More</button>
                </div>
                <div className='border border-gray-400 rounded-lg w-96'>
                    <div>
                        <img className='w-96' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png" alt="" />
                    </div>
                    <div className='flex gap-4 items-center p-4'>
                        <MdOutlineDiscount />Food
                        <CgProfile />By Admin
                        <BiMessageAlt />65 Comments
                    </div>
                    <p className='p-4'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    <button className='text-2xl p-4'>Read More</button>
                </div>
                <div className='border border-gray-400 rounded-lg w-96'>
                    <div>
                        <img className='w-96' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png" alt="" />
                    </div>
                    <div className='flex gap-4 items-center p-4'>
                        <MdOutlineDiscount />Food
                        <CgProfile />By Admin
                        <BiMessageAlt />65 Comments
                    </div>
                    <p className='p-4'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    <button className='text-2xl p-4'>Read More</button>
                </div>
                <div className='border border-gray-400 rounded-lg w-96'>
                    <div>
                        <img className='w-96' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png" alt="" />
                    </div>
                    <div className='flex gap-4 items-center p-4'>
                        <MdOutlineDiscount />Food
                        <CgProfile />By Admin
                        <BiMessageAlt />65 Comments
                    </div>
                    <p className='p-4'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    <button className='text-2xl p-4'>Read More</button>
                </div>
               
            </div>
        </div>
    )
}

export default LatestNews
