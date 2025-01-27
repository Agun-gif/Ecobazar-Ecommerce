import React from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

function ShoppingCarts() {
  return (
    <div>
      <div className="px-24">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border border-gray-300 w-[630px] m-4 rounded-lg ">
            <div className="flex gap-2 p-4">
              <p className="text-xl md:text-2xl ml-4">Product</p>
              <p className="text-xl md:text-2xl ml-48">Price</p>
              <p className="text-xl md:text-2xl ml-32">Quantity</p>
              <p className="text-xl md:text-2xl ml-20">Subtotal</p>
            </div>
            <div className="border border-gray-200"></div>
            <div className="flex items-center p-4">
              <div className="flex gap-2 items-center">
                <img
                  className="w-16 md:w-20"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png"
                  alt=""
                />
                <p className="text-lg md:text-xl">Green Capsicum</p>
              </div>
              <p className="text-lg md:text-xl ml-4 md:ml-16">$14.00</p>
              <div className="flex gap-2 border border-gray-300 h-8 w-16 items-center rounded-full ml-4 md:ml-36">
                <CiCircleMinus className="text-xl" />
                <p className="text-xl">5</p>
                <CiCirclePlus className="text-xl" />
              </div>
              <p className="text-lg md:text-xl ml-4 md:ml-28">$70.00</p>
              <button>
                <RxCrossCircled className="ml-2 md:ml-10 text-2xl" />
              </button>
            </div>
            <div className="border border-gray-200"></div>
            <div className="flex items-center p-4">
              <div className="flex gap-2 items-center">
                <img
                  className="w-16 md:w-20"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png"
                  alt=""
                />
                <p className="text-lg md:text-xl">Green Capsicum</p>
              </div>
              <p className="text-lg md:text-xl ml-4 md:ml-16">$14.00</p>
              <div className="flex gap-2 border border-gray-300 h-8 w-16 items-center rounded-full ml-4 md:ml-36">
                <CiCircleMinus className="text-xl" />
                <p className="text-xl">5</p>
                <CiCirclePlus className="text-xl" />
              </div>
              <p className="text-lg md:text-xl ml-4 md:ml-28">$70.00</p>
              <button>
                <RxCrossCircled className="ml-2 md:ml-10 text-2xl" />
              </button>
            </div>
            <div className="border border-gray-200"></div>
            <div className="flex justify-between m-2">
              <button className="border border-gray-400 rounded-full bg-gray-200 px-4 py-2">
                Return To Shop
              </button>
              <button className="border border-gray-400 rounded-full bg-gray-200 px-4 py-2">
                Update Cart
              </button>
            </div>
          </div>
          <div className="border border-gray-300 w-[400px] md:h-[250px] rounded-lg mt-4 md:mt-4">
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
                  <button className="text-xl text-white bg-green-600 hover:bg-green-700 rounded-full px-40 py-2 items-center">
                    Proceed to checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 w-full md:w-[620px] ml-4 p-2">
          <div className="flex items-center gap-20">
            <p className="text-lg font-bold">Coupon Code</p>
            <form className="flex justify-center md:justify-end">
              <div className="relative w-full md:w-auto">
                <input
                  type="Text"
                  id="default-search"
                  className="w-full md:w-[460px] p-3 rounded-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Coupon Code"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 -mr-4 px-4 py-3 rounded-full md:px-8 bg-green-700 text-white text-sm font-medium hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
                >
                  Apply Coupon
                </button>
              </div>
            </form>
          </div>
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
}

export default ShoppingCarts;
