import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

const BreadCumb = () => {
    return (
        <div>
            <div className='flex  md:ml-32'>
                <button><MdOutlineHome className='text-2xl hover:text-green-600' /></button>
                <FaAngleRight className='text-2xl'/>
                <button><p className='hover:text-green-600'>Categories</p></button>
                <FaAngleRight className='text-2xl' />
                <button><p className='hover:text-green-600'>Vagitables</p></button>
            </div>
        </div>
    )
}

export default BreadCumb
