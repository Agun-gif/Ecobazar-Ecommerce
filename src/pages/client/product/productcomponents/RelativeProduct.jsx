import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

const RelativeProduct = () => {
  return (
    <div>
      <div>
        <p className="text-4xl text-center py-4">Best Seller Products</p>
      </div>

      <div className="container mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 w-full sm:w-72 p-4"
            >
              <div>
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png"
                  alt="Green Apple"
                />
                <p className="text-2xl mt-2">Green Apple</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg">$14.99</p>
                <img
                  className="w-8"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530119/wwzg5bozyl06q1sop5je.png"
                  alt="Cart"
                />
              </div>
              <div className="flex space-x-1 mt-2">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    className="w-6"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                    alt="Star"
                  />
                ))}
                <img
                  className="w-6"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png"
                  alt="Half Star"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="pt-20 bg-gray-100 px-4 md:px-40 py-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <p className="text-xl md:text-3xl font-bold">
              Subscribe to our Newsletter
            </p>
            <p className="text-sm md:text-base">
              Stay updated with our latest offers and products.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <form className="flex flex-col md:flex-row items-center gap-2">
              <input
                type="email"
                className="w-full md:w-[460px] p-3 rounded-full text-sm border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email Address"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-green-700 text-white text-sm font-medium hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex justify-center md:justify-end gap-4 w-full md:w-auto mt-4 md:mt-0">
            <TiSocialFacebook className="text-3xl text-green-500" />
            <FaTwitter className="text-3xl" />
            <SiPicsart className="text-3xl" />
            <CiInstagram className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelativeProduct;
