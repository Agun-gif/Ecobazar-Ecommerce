import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";


const Filter = () => {
    return (
        <div>
            <div className='flex justify-between px-36 pt-10'>
                <div className='flex gap-4'>
                    <div className='flex items-end gap-2 border border-gray-500 p-2 w-48'>
                        <button className='text-xl '><p>Select Category</p></button>
                        <FaAngleDown className='text-2xl' />
                    </div>
                    <div className='flex items-end gap-6 border border-gray-500 p-2 w-48'>
                        <button className='text-xl'><p>Select Price</p></button>
                        <FaAngleDown className='text-2xl' />
                    </div>
                    <div className='flex items-end gap-4 border border-gray-500 p-2 w-48'>
                        <button className='text-xl'><p>Select Rating</p></button>
                        <FaAngleDown className='text-2xl' />
                    </div>

                </div>
                <div className='flex gap-4'>
                    <div className='flex items-end gap-2 border border-gray-500 p-2 w-48'>
                        <button className='text-xl '><p>Sort By Latest</p></button>
                        <FaAngleDown className='text-2xl' />
                    </div>
                    <div className='flex items-end gap-2 border border-gray-500 p-2 w-48'>
                        <button className='text-xl '><p>Show:16</p></button>
                        <FaAngleDown className='text-2xl' />
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-between px-36 pt-10'>
                <div className='flex gap-4 items-center'>
                    <p className='text-xl'>Active Filter:</p>
                    <button className='text-xl '><p>Select Category</p></button>
                    <RxCross1  className='text-2xl' />
                    <button className='text-xl '><p>Select Category</p></button>
                    <RxCross1 className='text-2xl' />
                </div>
                <div>
                    <p className='text-xl'>2,547 Results found.</p>
                </div>
            </div>
        </div>
    )
}

export default Filter
