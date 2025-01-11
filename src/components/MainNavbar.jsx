import React from 'react'
import { NavLink } from 'react-router-dom'




const MainNavbar = () => {
    return (
        <div className='bg-gray-200 py-4 mt-4 '>
            <div className='flex justify-center ml-10 md:ml-[15%%] gap-4'>
                <div className='flex'>
                    <div className='space-x-10 text-xl font-medium'>
                        <NavLink to='home'>Home</NavLink>
                        <NavLink to='shop'>Shop</NavLink>
                        <NavLink to='pages'>Pages</NavLink>
                        <NavLink to='blog'>Blog</NavLink>
                        <NavLink to='aboutus'>AboutUs</NavLink>
                    </div>
                    <div className='ml-40 text-xl font-medium'>
                        <NavLink to='ecobazar'>Ecobazar</NavLink>
                    </div>
                    <div className='flex space-x-4 ml-32 '>
                        <img className='w-4 ' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736430692/ofutzudfglu7gwpjdgen.png" alt="" />
                        <img className='w-4' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736431119/chcqhqsk8iis3vdvusjb.png" alt="" />
                        <img className='w-4' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736431119/xmpnv22dvg8lbne9ym83.png" alt="" />
                        <img className='w-4' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736431119/hzamtljch3qxmphlen9b.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNavbar
