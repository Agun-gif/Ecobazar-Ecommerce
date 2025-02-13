import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

function ContactUs() {
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
              Contactus
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
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="flex flex-wrap md:flex-nowrap gap-8 mt-10">
          {/* Contact Details */}
          <div className="border border-gray-300 rounded-lg w-full md:w-72 p-4 space-y-4 shadow-md bg-white">
            <div className="flex flex-col items-center">
              <CiLocationOn className="text-6xl md:text-7xl text-green-500" />
              <p className="text-lg md:text-xl text-center">
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
            </div>
            <div className="border border-gray-300 my-4"></div>
            <div className="flex flex-col items-center">
              <CiMail className="text-6xl md:text-7xl text-green-500" />
              <p className="text-lg md:text-xl text-center">
                shuvoagun881@gmail.com
                <br />
                shuvoagun898@gmail.com
              </p>
            </div>
            <div className="border border-gray-300 my-4"></div>
            <div className="flex flex-col items-center">
              <CiLocationOn className="text-6xl md:text-7xl text-green-500" />
              <p className="text-lg md:text-xl text-center">
                +880 1953598922
                <br />
                +880 1884711957
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-gray-300 rounded-lg w-full p-6 shadow-md bg-white">
            <h2 className="text-xl md:text-2xl font-bold mt-4 md:mt-10">
              Just Say Hello!
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    aria-label="First Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Name"
                  />
                </div>
                {/* Email */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-label="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              {/* Message */}
              <div className="my-6">
                <input
                  type="text"
                  id="message"
                  name="message"
                  aria-label="Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Message"
                />
              </div>
              {/* Subject */}
              <div>
                <textarea
                  id="textarea"
                  name="textarea"
                  aria-label="Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Subject"
                  rows="4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <img
          className="mt-6"
          src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737524192/hxsjvzbtp0qbuz8lec6r.png"
          alt=""
        />
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

export default ContactUs;
