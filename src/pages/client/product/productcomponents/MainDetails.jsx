import React from "react";
import { GiSelfLove } from "react-icons/gi";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

const MainDetails = () => {
  return (
    <div>
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
              <p className="text-3xl md:text-6xl font-bold">Chinese Cabbage</p>
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
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.
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
    </div>
  );
};

export default MainDetails;
