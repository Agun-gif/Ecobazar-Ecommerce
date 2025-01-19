import React from 'react'

const TopCategory = () => {
    return (
        <div>
            <p className='text-4xl font-bold pl-[70px] md:pl-48 mt-32'>Shop by Top Categories</p>
            <div className='grid grid-cols-2 gap-10 p-5 md:grid-cols-3 lg:grid-cols-4 mx-2 md:flex justify-center pt-10'>
                {/* Category Item */}
                <div className='border border-gray-200 w-full md:w-56'>
                    <div className='flex flex-col items-center'>
                        <img className='w-32 mt-2' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736534363/Group_robd6j.png" alt="" />
                        <p className='text-xl text-green-700 ml-2 mt-2'>Green Apple</p>
                        <p className='text-lg ml-2'>165 Products</p>
                    </div>
                </div>

                {/* Repeat the same structure for other categories */}
                <div className='border border-gray-200 w-full md:w-56'>
                    <div className='flex flex-col items-center'>
                        <img className='w-32 mt-2' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736534363/Group_robd6j.png" alt="" />
                        <p className='text-xl text-green-700 ml-2 mt-2'>Green Apple</p>
                        <p className='text-lg ml-2'>165 Products</p>
                    </div>
                </div>

                <div className='border border-gray-200 w-full md:w-56'>
                    <div className='flex flex-col items-center'>
                        <img className='w-32 mt-2' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736534363/Group_robd6j.png" alt="" />
                        <p className='text-xl text-green-700 ml-2 mt-2'>Green Apple</p>
                        <p className='text-lg ml-2'>165 Products</p>
                    </div>
                </div>

                <div className='border border-gray-200 w-full md:w-56'>
                    <div className='flex flex-col items-center'>
                        <img className='w-32 mt-2' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736534363/Group_robd6j.png" alt="" />
                        <p className='text-xl text-green-700 ml-2 mt-2'>Green Apple</p>
                        <p className='text-lg ml-2'>165 Products</p>
                    </div>
                </div>

                <div className='border border-gray-200 w-full md:w-56'>
                    <div className='flex flex-col items-center'>
                        <img className='w-32 mt-2' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736534363/Group_robd6j.png" alt="" />
                        <p className='text-xl text-green-700 ml-2 mt-2'>Green Apple</p>
                        <p className='text-lg ml-2'>165 Products</p>
                    </div>
                </div>

                <div className='border border-gray-200 w-full md:w-56'>
                    <div className='flex flex-col items-center'>
                        <img className='w-32 mt-2' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736534363/Group_robd6j.png" alt="" />
                        <p className='text-xl text-green-700 ml-2 mt-2'>Green Apple</p>
                        <p className='text-lg ml-2'>165 Products</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCategory
