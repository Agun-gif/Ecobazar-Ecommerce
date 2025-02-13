import React from "react";
import { MdDashboard } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
import { BiSolidDetail } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div>
      <div className="border border-gray-300 w-full lg:w-80 rounded-lg p-4 shadow-md bg-white">
        <p className="text-2xl font-bold mb-6">Navigation</p>
        <div className="space-y-6">
          <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
            <MdDashboard className="w-6 h-6" />
            <NavLink to="/UserDashboard">
              <button className="text-lg">DashBoard</button>
            </NavLink>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
            <LuRefreshCw className="w-6 h-6" />
            <NavLink to="/OrderHistory">
              <button className="text-lg">Order History</button>
            </NavLink>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
            <BiSolidDetail className="w-6 h-6" />
            <NavLink to="/OrderDetails">
              <button className="text-lg">Order Details</button>
            </NavLink>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
            <GiSelfLove className="w-6 h-6" />
            <NavLink to="/WishLists">
              <p className="text-lg">WishLists</p>
            </NavLink>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
            <BsHandbag className="w-6 h-6" />
            <NavLink to="/ShoppingCarts">
              <p className="text-lg">Shopping Cart</p>
            </NavLink>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
            <CiSettings className="w-6 h-6" />
            <NavLink to="/ProfileSatting">
              <p className="text-lg">Settings</p>
            </NavLink>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
            <CiLogin className="w-6 h-6" />
            <p className="text-lg">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
