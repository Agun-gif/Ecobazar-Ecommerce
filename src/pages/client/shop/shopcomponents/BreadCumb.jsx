import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

const BreadCumb = () => {
    return (
        <div>
            <div className='flex items-center space-x-2 md:ml-32 px-4 py-2'>
                <button>
                    <MdOutlineHome className='text-2xl hover:text-green-600' />
                </button>
                <FaAngleRight className='text-2xl' />
                <button>
                    <p className='hover:text-green-600'>Categories</p>
                </button>
                <FaAngleRight className='text-2xl' />
                <button>
                    <p className='hover:text-green-600'>Vegetables</p>
                </button>
            </div>
        </div>
    )
}

export default BreadCumb
