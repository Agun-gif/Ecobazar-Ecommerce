import React from 'react'
import { GiSelfLove } from 'react-icons/gi';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

const MainDetails = () => {
    return (
        <div>
            <div className='container mx-auto max-w-[1000px]'>
                <div className='grid grid-cols-2'>
                    <div className='flex snap-y overflow-y-auto '>
                        <div>
                            <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/s4awds46qa5t6jdnp3fd.png" alt="" />
                            <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/ggx3nfhhqajiix3el5lb.png" alt="" />
                            <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/l6llsylblb3ck6xtlykp.png" alt="" />
                            <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/vexhmye74o5argvdojbv.png" alt="" />
                        </div>
                        <div>
                            <img className='w-[400px]' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/ffnqnmavmxhurfpf06pl.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-4 ' >
                            <p className='text-6xl font-bold'>Chinese Cabbage</p>
                            <p className='bg-green-200 w-32 h-8 text-center text-2xl rounded-lg mt-6'>In Stok</p>
                        </div>
                        <div className='flex gap-1  py-6'>
                            <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png" alt="" />
                            <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png" alt="" />
                            <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png" alt="" />
                            <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png" alt="" />
                            <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png" alt="" />
                            <p>4 Review</p>
                            <p className='ml-8'>SKU: 2,51,594</p>
                        </div>
                        <div className='flex gap-4  py-6'>
                            <p className='text-gray-300 line-through'>$48.00</p>
                            <p>$17.28</p>
                            <p className='bg-green-200 w-20  h-6 text-center'>64% Off</p>
                        </div>
                        <div className='border border-gray-300 w-[500px]'></div>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <p className='text-2xl'>Brand :</p>
                                <img className='w-12' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737273099/wqwbfdqdu7jb2jlwrixt.png" alt="" />
                            </div>
                            <div className='flex'>
                                <p className='text-2xl'>Share item :</p>
                                <TiSocialFacebook className="text-3xl md:text-4xl text-green-500 rounded-full" />
                                <FaTwitter className="text-3xl md:text-4xl" />
                                <SiPicsart className="text-3xl md:text-4xl" />
                                <CiInstagram className="text-3xl md:text-4xl" />
                            </div>
                        </div>
                        <div className=' py-6'>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos <br /> himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla<br /> varius magna a consequat pulvinar. </p>
                        </div>
                        <div className='border border-gray-300 w-[500px]'></div>
                        <div className='flex gap-64 py-6'>
                            <div className='flex items-center border border-gary-400 px-2 py-0 rounded-full'>
                                <CiCircleMinus className='text-4xl' /><p className='text-4xl'>5</p><CiCirclePlus className='text-4xl' />
                            </div>
                            <div className='flex items-center'>
                                <button className='text-3xl bg-green-400  hover:bg-green-600 rounded-full px-8 py-2 '>Add To Cart</button>
                                <GiSelfLove className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600 hover:text-green-600 cursor-pointer ml-10" />
                            </div>
                        </div>
                        <div className='border border-gray-300 w-[500px]'></div>
                        <div>
                            <p className='text-xl'>Category : Vegetables</p>
                            <div className='flex gap-2'>
                                <p className='text-xl'>Tag : Vegetables Healthy</p>
                                <p className='text-xl'>Chinise : Cabbage Green Cabbage</p>
                            </div>
                        </div>
                    </div>
                    <div></div>

                </div>
            </div>
        </div>

    )
}

export default MainDetails
