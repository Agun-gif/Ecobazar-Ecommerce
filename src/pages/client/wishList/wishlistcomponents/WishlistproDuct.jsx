import React from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

const MyProductcart = () => {
    return (
        <div>
            <div>
                <p className='flex justify-center text-5xl font-bold'>My WishList</p>
                <div className='flex justify-center m-4'>
                    <div className='px-24'>
                        <div className='border border-gray-300 w-[1100px] m-4 rounded-lg '>
                            <div className='flex gap-60'>
                                <p className='text-2xl ml-4'>Product</p>
                                <p className='text-2xl ml-32'>Price</p>
                                <p className='text-2xl ml-28'>Stock Status</p>
                            </div>
                            <div className='border border-gray-200' ></div>
                            <div className='flex items-center'>
                                <div className='flex gap-2 items-center'>
                                    <img className='w-20' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png" alt="" />
                                    <p className='text-xl'>Green Capsicum</p>

                                </div>
                                <p className='text-xl ml-[174px]'>$14.00</p>
                                <button><p className='border border-gray-400 px-4 bg-green-200 ml-[280px]'>In Stock</p></button>
                                <button><p className='border border-gray-400 bg-green-500 text-2xl rounded-full px-4 ml-52' >Add To Cart</p></button>
                                <button><RxCrossCircled className='ml-10 text-2xl' /></button>
                            </div>
                            <div className='border border-gray-200' ></div>
                            <div className='flex items-center'>
                                <div className='flex gap-2 items-center'>
                                    <img className='w-20' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png" alt="" />
                                    <p className='text-xl'>Green Capsicum</p>

                                </div>
                                <p className='text-xl ml-[174px]'>$14.00</p>
                                <button><p className='border border-gray-400 px-4 bg-green-200 ml-[280px]'>In Stock</p></button>
                                <button><p className='border border-gray-400 bg-green-500 text-2xl rounded-full px-4 ml-52' >Add To Cart</p></button>
                                <button><RxCrossCircled className='ml-10 text-2xl' /></button>
                            </div>
                            <div className='border border-gray-200' ></div>
                            <div className='flex items-center'>
                                <div className='flex gap-2 items-center'>
                                    <img className='w-20' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png" alt="" />
                                    <p className='text-xl'>Green Capsicum</p>

                                </div>
                                <p className='text-xl ml-[174px]'>$14.00</p>
                                <button><p className='border border-gray-400 px-4 bg-green-200 ml-[270px]'>Out Of Stock</p></button>
                                <button><p className='border border-gray-400 text-2xl rounded-full px-4 ml-48' >Add To Cart</p></button>
                                <button><RxCrossCircled className='ml-9 text-2xl' /></button>
                            </div>
                            <div className='border border-gray-200' ></div>
                            <div className="flex  gap-4 w-full p-4">
                                <p className='text-2xl'>Share:</p>
                                <TiSocialFacebook className="text-3xl md:text-4xl bg-green-500 rounded-full" />
                                <FaTwitter className="text-3xl md:text-4xl" />
                                <SiPicsart className="text-3xl md:text-4xl" />
                                <CiInstagram className="text-3xl md:text-4xl" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="pt-20">
                <div className="flex flex-wrap justify-between items-center bg-gray-100 px-4 md:px-40 py-6">

                    <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                        <p className="text-xl md:text-3xl font-bold">Subscribe to our Newsletter</p>
                        <p className="text-sm md:text-base">
                            Pellentesque eu nibh eget mauris congue mattis mattis nec<br className="hidden md:block" />
                            tellus. Phasellus imperdiet elit eu magna.
                        </p>
                    </div>

                    <div className="w-full md:w-auto">
                        <form className="flex justify-center md:justify-end">
                            <div className="relative w-full md:w-auto">
                                <input
                                    type="search"
                                    id="default-search"
                                    className="w-full md:w-[460px] lg:w-[500px] p-3 rounded-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Your Gmail Address"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 -mr-4 px-4 py-3 rounded-full md:px-8 bg-green-700 text-white text-sm font-medium hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-center md:justify-end gap-4 w-full md:w-auto mt-4 md:mt-0">
                        <TiSocialFacebook className="text-3xl md:text-4xl bg-green-500 rounded-full" />
                        <FaTwitter className="text-3xl md:text-4xl" />
                        <SiPicsart className="text-3xl md:text-4xl" />
                        <CiInstagram className="text-3xl md:text-4xl" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyProductcart
