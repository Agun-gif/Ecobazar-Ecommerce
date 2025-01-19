import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

const RelativeProduct = () => {
    return (
        <div>
            <div>
                <p className='text-4xl text-center py-4'>Best Seller Products</p>
            </div>
            <div className='container mx-auto max-w-[1100px]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {/* Product Card */}
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className='border border-gray-200 w-full p-4 rounded-lg'>
                            <img className='w-full h-60 object-cover rounded-lg' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png" alt="Product" />
                            <p className='text-2xl mt-2'>Green Apple</p>
                            <div className='flex justify-between mt-2'>
                                <p className='text-xl'>$14.99</p>
                                <img className='w-10' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530119/wwzg5bozyl06q1sop5je.png" alt="Rating" />
                            </div>
                            <div className='flex mt-2'>
                                <img className='w-6 h-6' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png" alt="Review" />
                                <img className='w-6 h-6' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png" alt="Review" />
                                <img className='w-6 h-6' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png" alt="Review" />
                                <img className='w-6 h-6' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png" alt="Review" />
                                <img className='w-6 h-6' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png" alt="Review" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Subscription */}
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
                                    className="w-full md:w-[460px] lg:w-[500px] p-3 rounded-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
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
                        <TiSocialFacebook className="text-3xl md:text-4xl text-green-500 rounded-full" />
                        <FaTwitter className="text-3xl md:text-4xl" />
                        <SiPicsart className="text-3xl md:text-4xl" />
                        <CiInstagram className="text-3xl md:text-4xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelativeProduct
