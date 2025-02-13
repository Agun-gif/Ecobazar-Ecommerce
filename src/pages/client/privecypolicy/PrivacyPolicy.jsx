import React, { useState } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

function PrivacyPolicy() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              Privacy Policy
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
      <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 md:px-80 md:py-10">
        <div>
          <p className="text-4xl font-bold my-6 text-center md:text-left">
            Welcome, Let’s Talk
            <br />
            About Our Ecobazar
          </p>

          {[...Array(5)].map((_, index) => (
            <div key={index} className="mb-4">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 rounded-t-xl hover:border-green-600 gap-3"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg md:text-xl">
                    In elementum est a ante sodales iaculis.
                  </span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                className={`p-5 border border-b-0 border-gray-200 ${
                  openIndex === index ? "" : "hidden"
                }`}
              >
                <p className="mb-2 text-gray-500">
                  Morbi porttitor ligula in nunc varius sagittis. Proin dui
                  nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                  ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                  tellus at accumsan. Donec a eros non massa vulputate ornare.
                  Vivamus ornare commodo ante, at commodo felis congue vitae.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            className="w-[300px] mx-auto md:w-[400px] h-auto"
            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737570138/ambzwfdcflzayseromab.png"
            alt=""
          />
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

export default PrivacyPolicy;
