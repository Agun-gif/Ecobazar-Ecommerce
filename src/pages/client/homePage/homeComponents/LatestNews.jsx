import React from 'react'
import { PiBowlFoodFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";


const LatestNews = () => {
    return (
        <div>
            <p className='text-2xl -mt-[45%] ml-[50%] text-green-600 '>Blog</p>
            <p className='text-5xl  ml-[45%] font-bold'>Latest News</p>
            <div className='flex gap-20 justify-center mt-6'>
                <div className='border border-black w-96 h-[310px] rounded-md'>
                    <div>
                        <img className='w-96' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png" alt="" />
                    </div>
                    <div className='flex justify-center'>
                    <PiBowlFoodFill className='w-20' />
                    <CgProfile className='w-20' />
                    <FaRegMessage className='w-20' />
                    </div>
                    <div>
                        <p className='text-xl ml-4'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    </div>
                    <button className='text-xl mt-4 ml-4'>Read More</button>
                </div>
                <div className='border border-black w-96 h-[310px] rounded-md'>
                    <div>
                        <img className='w-96' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png" alt="" />
                    </div>
                    <div className='flex justify-center'>
                    <PiBowlFoodFill className='w-20' />
                    <CgProfile className='w-20' />
                    <FaRegMessage className='w-20' />
                    </div>
                    <div>
                        <p className='text-xl ml-4'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    </div>
                    <button className='text-xl mt-4 ml-4'>Read More</button>
                </div>
                <div className='border border-black w-96 h-[310px] rounded-md'>
                    <div>
                        <img className='w-96' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png" alt="" />
                    </div>
                    <div className='flex justify-center'>
                    <PiBowlFoodFill className='w-20' />
                    <CgProfile className='w-20' />
                    <FaRegMessage className='w-20' />
                    </div>
                    <div>
                        <p className='text-xl ml-4'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    </div>
                    <button className='text-xl mt-4 ml-4'>Read More</button>
                </div>
                <div className='border border-black w-96 h-[310px] rounded-md'>
                    <div>
                        <img className='w-96' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png" alt="" />
                    </div>
                    <div className='flex justify-center'>
                    <PiBowlFoodFill className='w-20' />
                    <CgProfile className='w-20' />
                    <FaRegMessage className='w-20' />
                    </div>
                    <div>
                        <p className='text-xl ml-4'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    </div>
                    <button className='text-xl mt-4 ml-4'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default LatestNews
