import React from "react";
import DashboardNav from "./DashboardNav";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

function OrderHistory() {
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row md:gap-10 md:mx-[15%] pt-10">
          {/* Navigation */}
          <DashboardNav />

          {/* Order History */}
          <div className="w-full overflow-x-auto border border-gray-300 rounded-lg">
            <div className="flex justify-between py-4 px-4">
              <span className="text-2xl font-extrabold">Order History</span>
            </div>

            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-center">ORDER ID</th>
                  <th className="py-2 px-4 text-center">DATE</th>
                  <th className="py-2 px-4 text-center">TOTAL</th>
                  <th className="py-2 px-4 text-center">STATUS</th>
                  <th className="py-2 px-4 text-center">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 14 }).map((_, index) => (
                  <tr key={index} className="text-center border-t">
                    <td className="py-2 px-4">738</td>
                    <td className="py-2 px-4">8 Sep, 2024</td>
                    <td className="py-2 px-4">$135.00 (5 Products)</td>
                    <td className="py-2 px-4">Processing</td>
                    <td className="py-2 px-4">
                      <button className="text-green-500">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default OrderHistory;
