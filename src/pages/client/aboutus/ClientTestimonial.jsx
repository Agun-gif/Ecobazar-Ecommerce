import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

const ClientTestimonial = () => {
  return (
    <div>
      <div className="bg-gray-100 py-10 px-4 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Single Testimonial */}
            {Array(3)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg shadow-lg p-6 max-w-md mx-auto bg-white"
                >
                  {/* User Image */}
                  <div className="flex justify-center">
                    <img
                      className="w-16 h-16 rounded-full"
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736618800/x0gga0jtvjpojcjoukzc.png"
                      alt="Customer"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <div className="text-gray-600 mt-4 text-center">
                    <p className="text-lg leading-relaxed">
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales.
                    </p>
                  </div>

                  {/* User Info + Rating */}
                  <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
                    {/* User Details */}
                    <div className="flex items-center gap-3">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736618799/ai1bz9qdrcqf7uzon3v1.png"
                        alt="Robert Fox"
                      />
                      <div className="text-center sm:text-left">
                        <p className="font-bold">Robert Fox</p>
                        <p className="text-sm text-gray-500">Customer</p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, starIndex) => (
                        <img
                          key={starIndex}
                          className="w-5 h-5"
                          src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                          alt="Star"
                        />
                      ))}
                      <img
                        className="w-5 h-5"
                        src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png"
                        alt="Half Star"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='bg-white my-10'>
        <img className='pl-20 md:pl-40' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736793571/f0zwgpuzkupstnvopz0d.png" alt="" />
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

export default ClientTestimonial;
