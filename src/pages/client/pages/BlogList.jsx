import React from "react";
import { IoIosColorFilter } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

function BlogList() {
  return (
    <div>
      <div className="flex justify-between px-32">
        <div className="flex gap-[300px]">
          <button className="bg-green-500 flex items-center px-12 py-4 rounded-full text-white hover:bg-green-600">
            <span className="mr-2">Filter</span>
            <IoIosColorFilter className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-xl">Sort By:</p>
            </div>
            <div>
              <button className="flex items-center border border-gray-300 px-12 py-1 text-black">
                <span className="mr-2">Latest</span>
                <FaAngleDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <p>52 Results Found</p>
        </div>
      </div>
      <div>
        <div className="ml-32 mt-6">
          <form className="">
            <div className="w-auto">
              <input
                type="search"
                id="default-search"
                className="w-[410px] p-3 rounded-xl text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default BlogList;
