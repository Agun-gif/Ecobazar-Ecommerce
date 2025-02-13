import React from "react";
import DashboardNav from "./DashboardNav";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

function WishLists() {
  return (
    <div>
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
             Wishlists
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
        <div className="flex flex-col md:flex-row md:gap-10 md:mx-[15%] pt-10">
          {/* Navigation */}
          <DashboardNav />
          {/* Wishlist Items */}
          <div className="max-w-6xl mx-auto  py- md:px-4">
            <div className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md">
              {/* Header */}
              <div className="hidden md:flex items-center px-4 py-3 bg-gray-100">
                <p className="text-xl font-medium">Product</p>
                <p className="text-xl font-medium md:ml-[250px]">Price</p>
                <p className="text-xl font-medium md:ml-20">Stock Status</p>
              </div>
              <div className="border-t border-gray-200"></div>

              {/* Products Section with Scrollable Content */}
              <div className="overflow-x-auto md:max-h-[500px]">
                {" "}
                {/* Added max height and overflow */}
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-items-center md:flex-row md:items-center gap-4 md:gap-6 px-4 py-3 border-b border-gray-200"
                  >
                    {/* Product Image and Name */}
                    <div className="flex items-center gap-3 md:w-1/3 min-w-[250px]">
                      <img
                        className="w-20 h-20 object-cover rounded-md"
                        src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png"
                        alt="Green Capsicum"
                      />
                      <p className="text-lg font-medium text-gray-800">
                        Green Capsicum
                      </p>
                    </div>

                    {/* Price */}
                    <div className="md:w-1/4 text-center text-lg font-medium text-gray-600 min-w-[100px]">
                      $14.00
                    </div>

                    {/* Stock Status */}
                    <div className="md:w-1/4 text-center min-w-[100px]">
                      <p
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          index === 2
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {index === 2 ? "Out of Stock" : "In Stock"}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center md:items-center gap-4 md:w-1/4 justify-center min-w-[150px]">
                      <button
                        className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-full hover:bg-green-600"
                        disabled={index === 2}
                      >
                        Add to Cart
                      </button>
                      <RxCrossCircled className="text-2xl text-gray-500 hover:text-red-500 cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Share Section */}
              <div className="flex flex-rows m-4 gap-4">
                <p className="text-xl font-medium">Share:</p>
                <div className="flex gap-4">
                  <TiSocialFacebook className="text-3xl md:text-4xl bg-green-500 text-white p-2 rounded-full" />
                  <FaTwitter className="text-3xl md:text-4xl text-blue-500" />
                  <SiPicsart className="text-3xl md:text-4xl text-pink-500" />
                  <CiInstagram className="text-3xl md:text-4xl text-purple-500" />
                </div>
              </div>
            </div>
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

export default WishLists;
