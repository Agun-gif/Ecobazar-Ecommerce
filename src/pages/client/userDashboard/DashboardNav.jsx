import React from "react";
import { useNavigate } from "react-router-dom"; 
import { MdDashboard } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
import { BiSolidDetail } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
import { CiLogin, CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem("userToken"); // ✅ Clear token
    localStorage.removeItem("userData");
    navigate("/signin"); // ✅ Redirect to Sign-In page
  };

  return (
    <div>
      <div className="border border-gray-300 w-full lg:w-80 rounded-lg p-4 shadow-md bg-white">
        <p className="text-2xl font-bold mb-6">Navigation</p>
        <div className="space-y-6">
          <NavItem to="/UserDashboard" icon={<MdDashboard className="w-6 h-6" />} label="Dashboard" />
          <NavItem to="/OrderHistory" icon={<LuRefreshCw className="w-6 h-6"  />} label="Order History" />
          <NavItem to="/OrderDetails" icon={<BiSolidDetail className="w-6 h-6" />} label="Order Details" />
          <NavItem to="/WishLists" icon={<GiSelfLove className="w-6 h-6" />} label="WishLists" />
          <NavItem to="/ShoppingCarts" icon={<BsHandbag className="w-6 h-6" />} label="Shopping Cart" />
          <NavItem to="/ProfileSatting" icon={<CiSettings className="w-6 h-6" />} label="Settings" />
          {/* Logout Button */}
          <div
            className="flex items-center gap-3 cursor-pointer hover:text-green-600"
            onClick={handleLogout}
          >
            <CiLogin className="w-6 h-6" />
            <p className="text-lg">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Reusable Navigation Item Component
const NavItem = ({ to, icon, label }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:text-green-600">
    {icon}
    <NavLink to={to}>
      <p className="text-lg">{label}</p>
    </NavLink>
  </div>
);

export default DashboardNav;
