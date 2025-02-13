import React from "react";
import { CiCircleMinus, CiCirclePlus, CiInstagram } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import DashboardNav from "./DashboardNav";

const ShoppingCarts = () => {
  return (
    <div>
      <div className="relative text-white bg-black">
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center py-4">
            <span className="text-white">
              <a href="/" className="hover:text-green-500">
                🏠 Home
              </a>{" "}
              &gt;
            </span>
            <span className="ml-2 text-white hover:text-green-500">
              Shoppingcarts
            </span>
          </div>
        </div>

        {/* Image Background */}
        <div className="absolute top-0 right-0 h-full w-full">
          <img
            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736576188/zk6w1zrglnhbbbduzptz.png"
            alt="Privacy Policy Banner"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto max-w-[1200px] px-4 md:px-10 lg:px-16">
        <div className="flex justify-center text-4xl font-semibold pt-4">
          <p>My Shopping Cart</p>
        </div>
        <div className="flex flex-col md:flex-row mx-2">
          <div className="mt-6">
            <DashboardNav />
          </div>
          <div className="container mx-auto max-w-[1200px]">
            <div className="flex flex-col md:flex-row">
              {/* Cart Table */}
              <div className="overflow-x-auto md:px-8 mt-6">
                <div className="min-w-[600px] border border-gray-300 rounded-lg">
                  {/* Table Header */}
                  <div className="grid grid-cols-4 text-center font-semibold p-4 bg-gray-100">
                    <p className="text-lg md:text-xl">Product</p>
                    <p className="text-lg md:text-xl">Price</p>
                    <p className="text-lg md:text-xl">Quantity</p>
                    <p className="text-lg md:text-xl">Subtotal</p>
                  </div>
                  <div className="border border-gray-200"></div>

                  {[...Array(3)].map((_, index) => (
                    <div key={index}>
                      <div className="grid grid-cols-4 items-center p-4 text-center">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-16"
                            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png"
                            alt="Green Capsicum"
                          />
                          <p className="text-lg">Green Capsicum</p>
                        </div>
                        <p className="text-lg">$14.00</p>
                        <div className="flex justify-center items-center border border-gray-300 h-8 w-24 rounded-full mx-auto">
                          <CiCircleMinus className="text-xl cursor-pointer" />
                          <p className="text-lg mx-2">5</p>
                          <CiCirclePlus className="text-xl cursor-pointer" />
                        </div>
                        <p className="text-lg">$70.00</p>
                      </div>
                      <div className="border border-gray-200"></div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Cart Total Section */}
              <div className="border border-gray-300 md:w-[300px] rounded-lg mt-6">
                <p className="text-2xl p-4">Cart Total</p>
                <div>
                  <div className="flex justify-between p-4 text-xl">
                    <p>Subtotal:</p>
                    <p>$84.00</p>
                  </div>
                  <div className="border border-gray-200"></div>
                  <div className="flex justify-between p-4 text-xl">
                    <p>Shipping:</p>
                    <p>Free</p>
                  </div>
                  <div className="border border-gray-200"></div>
                  <div className="flex justify-between p-4 text-xl font-bold">
                    <p>Total:</p>
                    <p>$84.00</p>
                  </div>
                  <div className="flex justify-center p-4">
                    <a href="checkout">
                      <button className="text-xl text-white bg-green-600 hover:bg-green-700 rounded-full px-20 py-2">
                        Proceed to checkout
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Coupon Section */}
            <div className="w-full md:w-[88vh] border border-gray-300 rounded-lg p-4 mt-6 md:ml-8">
              <p className="text-xl md:text-2xl font-bold mb-4">Coupon Code</p>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-3 text-gray-900 border border-gray-300 rounded-full"
                  placeholder="Enter Coupon Code"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-700 text-white px-4 md:px-6 py-2 text-sm md:text-base rounded-full">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
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

export default ShoppingCarts;
