import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-black w-full px-6 md:px-10 py-10">
            <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
                {/* Brand Section */}
                <div className="text-center md:text-left">
                    <p className="text-white text-2xl md:text-4xl font-bold">Ecobazar</p>
                    <p className="text-gray-400 text-sm md:text-lg mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, doloremque? Totam, quam natus? Impedit tempore
                        repellendus dolorum dolorem libero.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-6">
                        <FaFacebook className="text-white text-xl cursor-pointer hover:text-gray-400" />
                        <FaTwitter className="text-white text-xl cursor-pointer hover:text-gray-400" />
                        <FaInstagram className="text-white text-xl cursor-pointer hover:text-gray-400" />
                        <FaLinkedin className="text-white text-xl cursor-pointer hover:text-gray-400" />
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16">
                    {/* Account Links */}
                    <div>
                        <p className="text-white text-lg md:text-2xl font-semibold hover:underline">Account</p>
                        <ul className="mt-4 space-y-2">
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">My Account</li>
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">Order History</li>
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">Shopping Cart</li>
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">Wishlist</li>
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div>
                        <p className="text-white text-lg md:text-2xl font-semibold hover:underline">Helps</p>
                        <ul className="mt-4 space-y-2">
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">Contact</li>
                            <Link to ="/faqs"><li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">FAQs</li></Link>
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">Terms & Conditions</li>
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Proxy Links */}
                    <div>
                        <p className="text-white text-lg md:text-2xl font-semibold hover:underline">Proxy</p>
                        <ul className="mt-4 space-y-2">
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">About</li>
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">Shop</li>
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">Product</li>
                            <li className="text-gray-400 text-sm md:text-lg hover:text-white cursor-pointer">Track Order</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
