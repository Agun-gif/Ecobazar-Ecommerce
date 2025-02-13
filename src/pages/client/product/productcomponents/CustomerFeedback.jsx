import React from "react";
import { GiSelfLove } from "react-icons/gi";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";

function Additional() {
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
             Category
            </span>
            <span className="ml-2">/</span>
            <span className="ml-2 text-white hover:text-green-500">
              Vegetables
            </span>
            <span className="ml-2">/</span>
            <span className="ml-2 text-white hover:text-green-500">
              Chinese Cabbage
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
        {/* Main Details */}
        <div className="container mx-auto max-w-[1000px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start snap-y overflow-y-auto space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex md:flex-col space-x-4 md:space-x-0">
                {/* Small Images */}
                <div className="flex md:flex-col space-x-4 md:space-x-0 overflow-x-auto md:overflow-hidden">
                  <img
                    className="w-20 h-20 md:w-auto md:h-auto"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/s4awds46qa5t6jdnp3fd.png"
                    alt=""
                  />
                  <img
                    className="w-20 h-20 md:w-auto md:h-auto"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/ggx3nfhhqajiix3el5lb.png"
                    alt=""
                  />
                  <img
                    className="w-20 h-20 md:w-auto md:h-auto"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/l6llsylblb3ck6xtlykp.png"
                    alt=""
                  />
                  <img
                    className="w-20 h-20 md:w-auto md:h-auto"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/vexhmye74o5argvdojbv.png"
                    alt=""
                  />
                </div>
              </div>
              {/* Large Image */}
              <div>
                <img
                  className="w-full md:w-[400px]"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/ffnqnmavmxhurfpf06pl.png"
                  alt=""
                />
              </div>
            </div>

            {/* Right Section */}
            <div>
              <div className="flex flex-col gap-4">
                <p className="text-3xl md:text-6xl font-bold">
                  Chinese Cabbage
                </p>
                <p className="bg-green-200 w-28 md:w-32 h-8 text-center text-lg md:text-2xl rounded-lg">
                  In Stock
                </p>
              </div>

              {/* Rating Section */}
              <div className="flex gap-1 py-6 flex-wrap items-center">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    className="w-6 h-6"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                    alt=""
                  />
                ))}
                <img
                  className="w-6 h-6"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png"
                  alt=""
                />
                <p className="ml-2 text-sm md:text-base">4 Reviews</p>
                <p className="ml-4 text-sm md:text-base">SKU: 2,51,594</p>
              </div>

              {/* Price Section */}
              <div className="flex gap-4 py-6 items-center">
                <p className="text-gray-400 line-through text-lg md:text-xl">
                  $48.00
                </p>
                <p className="text-xl md:text-2xl font-semibold">$17.28</p>
                <p className="bg-green-200 px-2 py-1 rounded-md text-sm md:text-base">
                  64% Off
                </p>
              </div>

              {/* Divider */}
              <div className="border border-gray-300 w-full md:w-[500px]"></div>

              {/* Brand & Share Section */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-4">
                <div className="flex items-center space-x-2">
                  <p className="text-lg md:text-2xl">Brand:</p>
                  <img
                    className="w-10 md:w-12"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737273099/wqwbfdqdu7jb2jlwrixt.png"
                    alt=""
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-lg md:text-2xl">Share:</p>
                  <TiSocialFacebook className="text-2xl md:text-3xl text-green-500 rounded-full" />
                  <FaTwitter className="text-2xl md:text-3xl" />
                  <SiPicsart className="text-2xl md:text-3xl" />
                  <CiInstagram className="text-2xl md:text-3xl" />
                </div>
              </div>

              {/* Description */}
              <div className="py-6 text-sm md:text-base">
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                  consequat nec, ultrices et ipsum. Nulla varius magna a
                  consequat pulvinar.
                </p>
              </div>

              {/* Divider */}
              <div className="border border-gray-300 w-full md:w-[500px]"></div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col items-center md:flex-row md:justify-between py-6 space-y-4 md:space-y-0">
                <div className="flex items-center border border-gray-400 px-4 py-1 rounded-full space-x-4">
                  <CiCircleMinus className="text-2xl md:text-4xl" />
                  <p className="text-xl md:text-2xl">5</p>
                  <CiCirclePlus className="text-2xl md:text-4xl" />
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-lg md:text-3xl bg-green-400 hover:bg-green-600 rounded-full px-6 py-2">
                    Add To Cart
                  </button>
                  <GiSelfLove className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-green-600 cursor-pointer" />
                </div>
              </div>

              {/* Divider */}
              <div className="border border-gray-300 w-full md:w-[500px]"></div>

              {/* Category & Tags */}
              <div className="flex flex-col md:flex-crows space-y-2 text-sm md:text-xl">
                <p>Category: Vegetables</p>
                <div className="flex flex-col md:flex-row md:space-x-2">
                  <p>Tag: Vegetables Healthy</p>
                  <p>Chinese: Cabbage, Green Cabbage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-col items-center gap-8 mt-10 sm:flex-row sm:justify-center sm:gap-32">
          <Link to="/Description">
            <p className="text-lg sm:text-xl font-bold hover:text-green-400">
              Descriptions
            </p>
          </Link>
          <Link to="/additional">
            <p className="text-lg sm:text-xl font-bold hover:text-green-400">
              Additional Information
            </p>
          </Link>
          <Link to="/CustomerFeedback">
            <p className="text-lg sm:text-xl font-bold hover:text-green-400">
              Customer Feedback
            </p>
          </Link>
        </div>
        <div className="border border-gray-400 my-6"></div>
        {/* Left Side */}

        <div className="container ml-[200px] max-w-[600px] space-y-5">
          <div className="flex justify-start items-start gap-52">
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex flex-col space-y-2">
                  <p className="text-lg font-semibold text-gray-800">
                    Jacob Jones
                  </p>
                  <div className="flex space-x-2">
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
              <p>
                Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia
                lacus.
              </p>
            </div>
            <div className="ml-2 mt-4">
              <p>2 min ago</p>
            </div>
          </div>
          <div className ="border border-gray-300"></div>
          <div className="flex justify-start items-start gap-52">
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex flex-col space-y-2">
                  <p className="text-lg font-semibold text-gray-800">
                    Jacob Jones
                  </p>
                  <div className="flex space-x-2">
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
              <p>
                Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia
                lacus.
              </p>
            </div>
            <div className="ml-2 mt-4">
              <p>2 min ago</p>
            </div>
          </div>
          <div className ="border border-gray-300"></div>
          <div className="flex justify-start items-start gap-52">
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex flex-col space-y-2">
                  <p className="text-lg font-semibold text-gray-800">
                    Jacob Jones
                  </p>
                  <div className="flex space-x-2">
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
              <p>
                Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia
                lacus.
              </p>
            </div>
            <div className="ml-2 mt-4">
              <p>2 min ago</p>
            </div>
          </div>
          <div className ="border border-gray-300"></div>
          <div className="flex justify-start items-start gap-52">
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex flex-col space-y-2">
                  <p className="text-lg font-semibold text-gray-800">
                    Jacob Jones
                  </p>
                  <div className="flex space-x-2">
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
              <p>
                Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia
                lacus.
              </p>
            </div>
            <div className="ml-2 mt-4">
              <p>2 min ago</p>
            </div>
          </div>
          <div className ="border border-gray-300"></div>
          <div className="flex justify-start items-start gap-52">
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex flex-col space-y-2">
                  <p className="text-lg font-semibold text-gray-800">
                    Jacob Jones
                  </p>
                  <div className="flex space-x-2">
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
              <p>
                Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia
                lacus.
              </p>
            </div>
            <div className="ml-2 mt-4">
              <p>2 min ago</p>
            </div>
          </div>
          <div className ="border border-gray-300"></div>
          <div className="flex justify-start items-start gap-52">
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex flex-col space-y-2">
                  <p className="text-lg font-semibold text-gray-800">
                    Jacob Jones
                  </p>
                  <div className="flex space-x-2">
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                      alt="Rating Star"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
              <p>
                Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia
                lacus.
              </p>
            </div>
            <div className="ml-2 mt-4">
              <p>2 min ago</p>
            </div>
          </div>
          <div className ="border border-gray-300"></div>
        </div>

        {/* Relative Product */}
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
                    className="w-full md:w-[460px] lg:w-[500px] p-3 rounded-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
    </div>
  );
}

export default Additional;
