import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

function Eror() {
  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737047024/Portfolio%20Image/is7l0ij8sodgwnlgklvv.png"
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col items-center py-8">
        <div className="text-center">
          <img
            className="w-[90%] md:w-[600px] mx-auto"
            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737571673/hu3r4py1vwepyqcqr46z.png"
            alt=""
          />
          <p className="text-3xl md:text-5xl text-center my-4 font-semibold">Oops! Page Not Found</p>
          <p className="text-sm md:text-xl text-center my-4">
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
            <br />
            Maecenas sagittis tortor at metus mollis.
          </p>
          <button className="mt-4 px-8 py-3 bg-green-600 text-white rounded-full text-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300">
            Back To Home
          </button>
        </div>
      </div>
      <div className="pt-20">
        <div className="flex flex-wrap justify-between items-center bg-gray-100 px-4 md:px-40 py-6">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <p className="text-xl md:text-3xl font-bold">Subscribe to our Newsletter</p>
            <p className="text-sm md:text-base">
              Pellentesque eu nibh eget mauris congue mattis mattis nec
              <br className="hidden md:block" />
              tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <form className="flex justify-center md:justify-end">
              <div className="relative w-full md:w-[460px] lg:w-[500px]">
                <input
                  type="search"
                  id="default-search"
                  className="w-full p-3 rounded-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
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

export default Eror;
