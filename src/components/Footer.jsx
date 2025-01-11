import React from 'react'
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black w-full md:w-12/12  h-72 md:h-96'>
            <div className='flex space-x-10 md:space-x-32 '>
                <div className='mt-14 md:mt-16'>
                    <p className='text-white text-lg md:text-6xl ml-10 md:ml-72 font-bold'>Ecobazar</p>
                    <p className='text-white text-xs md:text-lg ml-10 md:ml-72 mt-3 md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Ab, doloremque? Totam, quam natus? Impedit tempore<br />repellendus dolorum dolorem libero</p>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <FaFacebook className='' />
                </div>
                <div className='flex grid-cols-3 space-x-10 md:space-x-32 mt-14 md:mt-16'>
                    <div className=''>
                        <p className='text-white text-lg md:text-3xl md:font-semibold hover:underline'>Account</p>
                        <ul>
                            <li className='text-white text-xs md:text-lg mt-4 md:mt-10 '>My Account</li>
                            <li className='text-white text-xs md:text-lg  mt-2 md:mt-4 '>Order History</li>
                            <li className='text-white text-xs md:text-lg  mt-2 md:mt-4 '>Shopping Cart</li>
                            <li className='text-white text-xs md:text-lg  mt-2 md:mt-4 '>Wishlist</li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-white text-lg md:text-3xl font-semibold hover:underline'>Helps</p>
                        <ul>
                            <li className='text-white text-xs md:text-lg mt-4 md:mt-10 '>Contact</li>
                            <li className='text-white text-xs md:text-lg  mt-2 md:mt-4 '>Faqs</li>
                            <li className='text-white text-xs md:text-lg  mt-2 md:mt-4 '>Terms & Condition</li>
                            <li className='text-white text-xs md:text-lg  mt-2 md:mt-4 '>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-white text-lg md:text-3xl font-semibold hover:underline'>Proxy</p>
                        <ul>
                            <li className='text-white text-xs md:text-lg mt-4 md:mt-10'>About</li>
                            <li className='text-white text-xs md:text-lg  mt-2 md:mt-4 '>Shop</li>
                            <li className='text-white text-xs md:text-lg  mt-2 md:mt-4 '>Product</li>
                            <li className='text-white text-xs md:text-lg  mt-2 md:mt-4 '>Track Order</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
