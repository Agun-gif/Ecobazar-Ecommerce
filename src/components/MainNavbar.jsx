import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiPhone, CiSearch } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

const ResponsiveNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // For mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For profile dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-gray-300 py-2 md:py-4 relative">
      <div className="flex items-center justify-between px-4 md:px-[10%]">
        {/* Logo */}
        <div className="text-lg font-bold">
          <NavLink to="/home" className="hover:text-green-600">
            Ecobazar
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="home"
            className="text-gray-700 font-medium hover:text-green-600"
          >
            Home
          </NavLink>
          <NavLink
            to="shop"
            className="text-gray-700 font-medium hover:text-green-600"
          >
            Shop
          </NavLink>
          <NavLink
            to="ProductDetails"
            className="text-gray-700 font-medium hover:text-green-600"
          >
            Pages
          </NavLink>
          <NavLink
            to="Blog"
            className="text-gray-700 font-medium hover:text-green-600"
          >
            Blog
          </NavLink>
          <NavLink
            to="AboutUs"
            className="text-gray-700 font-medium hover:text-green-600"
          >
            About Us
          </NavLink>
          <NavLink
            to="contactus"
            className="text-gray-700 font-medium hover:text-green-600"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/ContactUs">
            <CiPhone className="w-6 h-6 cursor-pointer hover:text-green-600" />
          </NavLink>
          <CiSearch className="w-6 h-6 cursor-pointer hover:text-green-600" />
          <NavLink to="/wishlist">
            <GiSelfLove className="w-6 h-6 cursor-pointer hover:text-green-600" />
          </NavLink>
          <NavLink to="/Shopping">
            <IoBagOutline className="w-6 h-6 cursor-pointer hover:text-green-600" />
          </NavLink>
          <div className="relative pt-2">
            {/* Profile Icon */}
            <button onClick={toggleDropdown} className="relative">
              <CgProfile className="w-6 h-6 cursor-pointer hover:text-green-600" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul
                className="absolute right-0 top-full mt-2 p-2 shadow-lg bg-white border border-gray-300 rounded-lg w-52 z-50"
                onMouseLeave={closeDropdown} // Optional: Close dropdown when mouse leaves
              >
                <li>
                  <NavLink
                    to="/SignIn"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    SignIn
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/UserDashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Register"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            {isDrawerOpen ? (
              <HiX className="w-8 h-8 cursor-pointer" />
            ) : (
              <HiMenuAlt3 className="w-8 h-8 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <nav
        className={`${
          isDrawerOpen
            ? "block transform translate-y-0 transition-transform duration-300 ease-out"
            : "hidden transform -translate-y-full transition-transform duration-300 ease-in"
        } absolute top-full left-0 w-full bg-gray-200 shadow-lg md:hidden z-20`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <NavLink
              to="home"
              className="block text-gray-700 py-2 hover:text-green-600"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shop"
              className="block text-gray-700 py-2 hover:text-green-600"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="ProductDetails"
              className="block text-gray-700 py-2 hover:text-green-600"
            >
              Pages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              className="block text-gray-700 py-2 hover:text-green-600"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="aboutus"
              className="block text-gray-700 py-2 hover:text-green-600"
            >
              About Us
            </NavLink>
            <NavLink
              to="contactus"
              className="block text-gray-700 py- hover:text-green-600"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </div>
  );
};

export default ResponsiveNavBar;
