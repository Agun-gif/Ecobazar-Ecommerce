import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='flex flex-wrap justify-center gap-20 my-6'>
                <div className='border border-gray-200 w-96 p-4'>
                    <img className='w-32' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736794030/zqci4wac6xjfauphh7uo.png" alt="" />
                    <p className='text-2xl font-bold'>Our Location</p>
                    <p className='text-xl'>1901 Thornridge Cir. Shiloh, Washington DC 20020, United States</p>
                </div>
                <div className='border border-gray-200 w-96 p-4'>
                    <img className='w-32' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736794031/kcgokscrkyqtuk5go03k.png" alt="" />
                    <p className='text-2xl font-bold'>Call Us 24/7</p>
                    <p className='text-xl'>1901 Thornridge Cir. Shiloh, Washington DC 20020, United States</p>
                </div>
                <div className='border border-gray-200 w-[600px] p-4'>
                    <img className='w-32' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736794031/g9esesaj7k10zs2yke8y.png" alt="" />
                    <p className='text-2xl font-bold m-4'>Subscribe Newsletter</p>

                    <form className="max-w-md mx-auto">
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <input type="search" id="default-search" className="w-[500px] -ml-36 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Gmail Address" required />
                            <button type="submit" className="text-white absolute ml-[320px] bottom-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Contact
