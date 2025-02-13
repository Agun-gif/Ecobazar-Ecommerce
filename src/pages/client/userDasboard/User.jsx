import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";
import DashboardNav from "./DashboardNav";
import { Link } from "react-router-dom";

function UserDashboard() {
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
              Dashboard
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
      <div className="container mx-auto max-w-[1100px] mt-10 px-4">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 space-y-6 lg:space-y-0">
          {/* Navigation */}
          <DashboardNav />
          {/* Profile and Billing Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 space-y-6 lg:space-y-0 w-full">
            {/* Profile */}
            <div className="border border-gray-300 w-full lg:w-[400px] h-60 rounded-lg shadow-md bg-white">
              <div className="flex flex-col items-center p-6">
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736618799/ai1bz9qdrcqf7uzon3v1.png"
                  alt="Profile"
                />
                <p className="text-xl font-bold mt-4">Dennis Nzioki</p>
                <p className="text-gray-500 text-sm">Customer</p>
                <Link to="/ProfileSatting">
                  <button className="text-green-500 mt-2">Edit Profile</button>
                </Link>
              </div>
            </div>

            {/* Billing Address */}
            <div className="border border-gray-300 w-full lg:w-[400px] h-60 rounded-lg shadow-md bg-white">
              <div className="p-6">
                <p className="text-xl font-bold mb-2">Billing Address</p>
                <p className="text-md font-bold">Dennis Nzioki</p>
                <p className="text-md text-gray-600 mt-2">
                  4140 Parker Rd. Allentown, New Runda 31134
                </p>
                <p className="text-md text-gray-600 mt-2">
                  dennisnzioki@gmail.com
                </p>
                <p className="text-md text-gray-600 mt-2">254 555-0110</p>
                <Link to="/ProfileSatting">
                  <button className="text-green-500 hover:text-green-400 mt-4">
                    Edit Address
                  </button>
                </Link>
              </div>
            </div>
            {/* Table Section */}
            <div className="pt-6">
              <div className="border border-gray-300 w-[812px] rounded-lg sm:snap-x overflow-x-auto">
                <div className="flex justify-between py-4">
                  <span className="text-2xl font-extrabold ml-4">
                    React Order History
                  </span>
                  <span className="mr-20 font-extrabold text-green-500">
                    View All
                  </span>
                </div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 ">ORDER ID</th>
                      <th className="py-2 ">DATE</th>
                      <th className="py-2 ">TOTAL</th>
                      <th className="py-2 ">STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 7 }).map((_, index) => (
                      <tr key={index} className="text-center">
                        <td className="py-2 ">738</td>
                        <td className="py-2 ">8 Sep, 2024</td>
                        <td className="py-2 ">$135.00 (5 Products)</td>
                        <td className="py-2 ">Processing</td>
                        <td className="py-2 ">
                          <button className="text-blue-500 underline">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default UserDashboard;
