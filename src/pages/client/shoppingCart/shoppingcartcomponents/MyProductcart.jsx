import React from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

const MyProductcart = () => {
  return (
    <div>
      <p className="flex justify-center text-2xl md:text-5xl font-bold">My Shopping Cart</p>
      <div className="px-4 py-10 md:py-10 md:mx-32">
        <div className="flex flex-col md:flex-row gap-10">
          {/* 🛒 Cart Table */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[800px] border border-gray-300 rounded-lg">
              {/* 📌 Table Header */}
              <div className="grid grid-cols-4 text-center font-semibold p-4">
                <p className="text-lg md:text-xl">Product</p>
                <p className="text-lg md:text-xl">Price</p>
                <p className="text-lg md:text-xl">Quantity</p>
                <p className="text-lg md:text-xl">Subtotal</p>
              </div>
              <div className="border border-gray-200"></div>

              {/* 🥦 Cart Item */}
              <div className="grid grid-cols-4 items-center p-4 text-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-16 ml-12"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png"
                    alt="Green Capsicum"
                  />
                  <p className="text-lg">Green Capsicum</p>
                </div>
                <p className="text-lg">$14.00</p>
                <div className="flex justify-center items-center border border-gray-300 h-8 w-20 ml-24 md:ml-28 rounded-full">
                  <CiCircleMinus className="text-xl cursor-pointer" />
                  <p className="text-lg mx-2">5</p>
                  <CiCirclePlus className="text-xl cursor-pointer" />
                </div>
                <p className="text-lg">$70.00</p>
              </div>
              <div className="border border-gray-200"></div>

              {/* 🥦 Cart Item */}
              <div className="grid grid-cols-4 items-center p-4 text-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-16 ml-12"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png"
                    alt="Green Capsicum"
                  />
                  <p className="text-lg">Green Capsicum</p>
                </div>
                <p className="text-lg">$14.00</p>
                <div className="flex justify-center items-center border border-gray-300 h-8 w-20 ml-24 md:ml-28 rounded-full">
                  <CiCircleMinus className="text-xl cursor-pointer" />
                  <p className="text-lg mx-2">5</p>
                  <CiCirclePlus className="text-xl cursor-pointer" />
                </div>
                <p className="text-lg">$70.00</p>
              </div>
              <div className="border border-gray-200"></div>

              {/* 🥦 Cart Item */}
              <div className="grid grid-cols-4 items-center p-4 text-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-16 ml-12"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png"
                    alt="Green Capsicum"
                  />
                  <p className="text-lg">Green Capsicum</p>
                </div>
                <p className="text-lg">$14.00</p>
                <div className="flex justify-center items-center border border-gray-300 h-8 w-20 ml-24 md:ml-28 rounded-full">
                  <CiCircleMinus className="text-xl cursor-pointer" />
                  <p className="text-lg mx-2">5</p>
                  <CiCirclePlus className="text-xl cursor-pointer" />
                </div>
                <p className="text-lg">$70.00</p>
              </div>
              <div className="border border-gray-200"></div>
            </div>
          </div>

          <div className="border border-gray-300  md:w-[500px] md:h-[250px] rounded-lg">
            <p className="text-2xl p-4">Cart Total</p>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-xl md:text-2xl p-4">Subtotal:</p>
                <p className="text-xl md:text-2xl p-4">$84.00</p>
              </div>
              <div className="border border-gray-200"></div>
              <div className="flex justify-between items-center">
                <p className="text-xl md:text-2xl p-4">Shipping:</p>
                <p className="text-xl md:text-2xl p-4">Free</p>
              </div>
              <div className="border border-gray-200"></div>
              <div className="flex justify-between items-center">
                <p className="text-xl md:text-2xl p-4">Total:</p>
                <p className="text-xl md:text-2xl p-4">$84.00</p>
              </div>
              <div className="border border-gray-200"></div>
              <div className="flex justify-center py-4">
                <a href="checkout">
                  {" "}
                  <button className="text-xl text-white bg-green-600 hover:bg-green-700 rounded-full px-20 py-2 items-center">
                    Proceed to checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-4 border border-gray-300 md:rounded md:w-[920px]  p-4 mt-4">
          <p className="text-2xl font-bold">Coupon Code</p>
          <form className="relative w-full md:w-[600px] md:ml-10">
            <input
              type="search"
              id="default-search"
              className="w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              placeholder="Enter Coupon Code"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm -mr-4 px-16 py-3"
            >
              Apply Coupon
            </button>
          </form>
        </div>
      </div>
      <div className="pt-20">
        <div className="flex flex-wrap justify-between items-center bg-gray-100 px-4 md:px-40 py-6">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <p className="text-xl md:text-3xl font-bold">
              Subscribe to our Newsletter
            </p>
            <p className="text-sm md:text-base">
              Pellentesque eu nibh eget mauris congue mattis mattis nec
              <br className="hidden md:block" />
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
  );
};

export default MyProductcart;

