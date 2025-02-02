import React from "react";
import { CiCircleMinus, CiCirclePlus, CiInstagram } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";

const WishlistproDuct = () => {
  return (
    <div>
      <div className="bg-gray-50">
        {/* Wishlist Header */}
        <div className="text-center my-6">
          <p className="text-4xl font-bold">My Wishlist</p>
        </div>

        {/* Wishlist Items */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md">
            {/* Header */}
            <div className="hidden md:flex items-center px-4 py-3 bg-gray-100">
              <p className="text-xl font-medium">Product</p>
              <p className="text-xl font-medium md:ml-[270px]">Price</p>
              <p className="text-xl font-medium md:ml-44">Stock Status</p>
            </div>
            <div className="border-t border-gray-200"></div>

            {/* **Scrollable Wrapper** */}
            <div className="overflow-x-auto w-full">
              <div className="min-w-[600px]">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-24 md:gap-6 px-4 py-3 border-b border-gray-200"
                  >
                    {/* Product Image and Name */}
                    <div className="flex items-center gap-3 md:w-1/3">
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
                    <div className="md:w-1/4 text-center text-lg font-medium text-gray-600">
                      $14.00
                    </div>

                    {/* Stock Status */}
                    <div className="md:w-1/4 text-center">
                      <p
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          index === 2
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {index === 2 ? "Stock Out" : "In Stock"}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 md:w-1/4 justify-center">
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
            </div>

            {/* Share Section */}
            <div className="flex flex-row m-4 gap-4">
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

        {/* Newsletter Section */}
        <div className="mt-12 bg-gray-100 py-6">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Text */}
            <div className="text-center md:text-left">
              <p className="text-xl md:text-3xl font-bold">
                Subscribe to our Newsletter
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                Stay updated with our latest offers and news. Join our community
                now!
              </p>
            </div>

            {/* Subscription Form */}
            <form className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <input
                type="email"
                className="w-full md:w-[400px] px-4 py-2 text-sm border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email Address"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium text-white bg-green-700 rounded-full hover:bg-green-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistproDuct;
