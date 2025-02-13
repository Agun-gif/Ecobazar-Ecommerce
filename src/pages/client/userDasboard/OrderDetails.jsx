import React from "react";
import DashboardNav from "./DashboardNav";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

const OrderDetails = () => {
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
             OrderhDetails
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
      <div className="flex justify-center items-start min-h-screen  p-4">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-screen-lg">
          {/* Navigation */}
          <DashboardNav />

          {/* Content Section */}
          <div className="border border-gray-300 bg-white rounded-md shadow-lg p-6 flex-1">
            <div className="flex justify-between border border-gray-300 p-4 mb-4">
              <div className="flex items-center gap-4">
                <p className="font-bold text-xl">Order Details.</p>
                <p>April 24, 2021.</p>
                <p>3 Products</p>
              </div>

              <button className="text-green-600">Back To List</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Billing Address */}
                <table className="border border-gray-300 w-full sm:w-1/2">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-4 text-xl border-b">
                        Billing Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 text-lg font-semibold">
                        Dianne Russell
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">
                        4140 Parker Rd. Allentown, New Mexico 31134
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Email</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">dianne.russell@gmail.com</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Phone</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">(671) 555-0110</td>
                    </tr>
                  </tbody>
                </table>

                {/* Shipping Address */}
                <table className="border border-gray-300 w-full sm:w-1/2">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-4 text-xl border-b">
                        Shipping Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 text-lg font-semibold">
                        Dianne Russell
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">
                        4140 Parker Rd. Allentown, New Mexico 31134
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Email</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">dianne.russell@gmail.com</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Phone</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">(671) 555-0110</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Order Summary */}
              <div className="border border-gray-300 bg-gray-50 rounded-md p-6 w-full sm:w-96">
                <div className="flex justify-between py-2">
                  <div>
                    <p className="text-xl">Order ID:</p>
                    <p>#4152</p>
                  </div>
                  <div>
                    <p className="text-xl">Payment Method:</p>
                    <p>Paypal</p>
                  </div>
                </div>
                <div className="border-t my-2"></div>
                <div className="flex justify-between py-2">
                  <p>Subtotal:</p>
                  <p>$365.00</p>
                </div>
                <div className="border-t my-2"></div>
                <div className="flex justify-between py-2">
                  <p>Discount:</p>
                  <p>20%</p>
                </div>
                <div className="border-t my-2"></div>
                <div className="flex justify-between py-2">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className="border-t my-2"></div>
                <div className="flex justify-between py-2 font-bold">
                  <p>Total:</p>
                  <p>$84.00</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 overflow-x-auto">
              <div className="">
                <div className="flex gap-2 p-2 mt-4 bg-gray-200">
                  <p className="text-xl md:text-2xl ml-4">Product</p>
                  <p className="text-xl md:text-2xl ml-48">Price</p>
                  <p className="text-xl md:text-2xl ml-60">Quantity</p>
                  <p className="text-xl md:text-2xl ml-52">Subtotal</p>
                </div>
                <div className="flex items-center p-4">
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-16 md:w-20"
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png"
                      alt=""
                    />
                    <p className="text-lg md:text-xl">Green Capsicum</p>
                  </div>
                  <p className="text-lg md:text-xl ml-4 md:ml-16">$14.00</p>
                  <div className="flex gap-2 h-8 w-16 items-center  ml-4 md:ml-72">
                    <p className="text-2xl">x5</p>
                  </div>
                  <p className="text-lg md:text-xl ml-4 md:ml-[160px]">
                    $70.00
                  </p>
                </div>
                <div className="border border-gray-200"></div>
                <div className="flex items-center p-4">
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-16 md:w-20"
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png"
                      alt=""
                    />
                    <p className="text-lg md:text-xl">Green Capsicum</p>
                  </div>
                  <p className="text-lg md:text-xl ml-4 md:ml-16">$14.00</p>
                  <div className="flex gap-2 h-8 w-16 items-center  ml-4 md:ml-72">
                    <p className="text-2xl">x5</p>
                  </div>
                  <p className="text-lg md:text-xl ml-4 md:ml-[160px]">
                    $70.00
                  </p>
                </div>
                <div className="border border-gray-200"></div>
                <div className="flex items-center p-4">
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-16 md:w-20"
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737048759/Portfolio%20Image/wux5dnulwihpkqrlz7wn.png"
                      alt=""
                    />
                    <p className="text-lg md:text-xl">Green Capsicum</p>
                  </div>
                  <p className="text-lg md:text-xl ml-4 md:ml-16">$14.00</p>
                  <div className="flex gap-2 h-8 w-16 items-center  ml-4 md:ml-72">
                    <p className="text-2xl">x5</p>
                  </div>
                  <p className="text-lg md:text-xl ml-4 md:ml-[160px]">
                    $70.00
                  </p>
                </div>
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
};

export default OrderDetails;
