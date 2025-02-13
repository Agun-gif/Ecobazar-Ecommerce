import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";

function Signin() {
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
            <span className="ml-2">/</span>
            <a href="SignIn">
              <span className="ml-2 text-white hover:text-green-500">
                Sign In
              </span>
            </a>
            <span className="ml-2">/</span>
            <a href="Register">
              <span className="ml-2 text-white hover:text-green-500">
                Register
              </span>
            </a>
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
      <div className="flex items-center justify-center mt-20">
        <div className="w-full max-w-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign In
          </h2>
          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500 focus:outline-none"
              >
                👁️{" "}
                {/* Replace this with an eye icon if you're using a library like FontAwesome */}
              </button>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 text-blue-400 border-gray-300 rounded focus:ring-blue-400"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forget Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Sign In
            </button>

            {/* Register Link */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 font-medium hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
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

export default Signin;
