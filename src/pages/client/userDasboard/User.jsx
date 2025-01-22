import React from "react";
import { MdDashboard } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
import { GiSelfLove } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

function UserDashboard() {
  return (
    <div>
      <div className="container mx-auto max-w-[1100px] mt-10 px-4">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 space-y-6 lg:space-y-0">
          {/* Navigation */}
          <div className="border border-gray-300 w-full lg:w-80 rounded-lg p-4 shadow-md bg-white">
            <p className="text-2xl font-bold mb-6">Navigation</p>
            <div className="space-y-6">
              <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
                <MdDashboard className="w-6 h-6" />
                <p className="text-lg">Dashboard</p>
              </div>
              <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
                <LuRefreshCw className="w-6 h-6" />
                <p className="text-lg">Order History</p>
              </div>
              <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
                <GiSelfLove className="w-6 h-6" />
                <p className="text-lg">Wishlist</p>
              </div>
              <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
                <BsHandbag className="w-6 h-6" />
                <p className="text-lg">Shopping Cart</p>
              </div>
              <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
                <CiSettings className="w-6 h-6" />
                <p className="text-lg">Settings</p>
              </div>
              <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
                <CiLogin  className="w-6 h-6" />
                <p className="text-lg">Logout</p>
              </div>
            </div>
          </div>

          {/* Profile and Billing Address */}
          <div className="flex flex-col lg:flex-row lg:gap-x-6 space-y-6 lg:space-y-0 w-full">
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
                <button className="text-green-500 mt-2">Edit Profile</button>
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
                <button className="text-green-500 hover:text-green-400 mt-4">Edit Address</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
