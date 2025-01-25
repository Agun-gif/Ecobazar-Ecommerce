import React from "react";
import DashboardNav from "./DashboardNav";

function ProfileSatting() {
  return (
    <div>
      <div className="container mx-auto  md:max-w-[1200px] m-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Navigation */}
          <DashboardNav />

          {/* Account Setting */}
          <div className="space-y-4">
            <div className="border border-gray-300 rounded-xl mx-auto w-full md:-ml-[350px] md:w-[800px] md:max-w-[700px] p-4 ">
              <p className="text-3xl font-semibold">Account Setting</p>
              <div className="border border-gray-300 mt-2"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-36">
                {/* Left Side: Form */}
                <div>
                  <form>
                    <div className="space-y-4">
                      {/* First Name */}
                      <div className="mt-8">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          aria-label="First Name"
                          className="w-full max-w-md md:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Md Agun"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="mb-4">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          aria-label="Last Name"
                          className="w-full max-w-md md:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Sharker"
                        />
                      </div>

                      {/* Email */}
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          aria-label="Email"
                          className="w-full max-w-md md:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="shuvoagun898@gmail.com"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div className="mb-4">
                        <label
                          htmlFor="mobile_number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          id="mobile_number"
                          name="mobile_number"
                          aria-label="Mobile Number"
                          className="w-full max-w-md md:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="01953598922"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                {/* Right Side: Profile Picture */}
                <div className="space-y-4 md:pt-20">
                  {/* Profile Image */}
                  <div className="flex items-center justify-center">
                    <img
                      className="w-32 h-32 md:w-[150px] md:h-[150px] rounded-full object-cover"
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737042028/p5r2ss3vdixp6olxq0ak.png"
                      alt="Profile"
                    />
                  </div>
                  {/* Choose Picture Button */}
                  <div className="flex justify-center">
                    <button
                      className="border-2 border-green-500 px-5 py-2 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition duration-300"
                      aria-label="Choose a profile picture"
                    >
                      Choose Picture
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Billing Address */}
            <div className="border border-gray-300 rounded-xl mx-auto w-full md:-ml-[350px] md:w-[800px] md:max-w-[700px] p-4">
              <p className="text-3xl font-semibold">Billing Address</p>
              <div className="border border-gray-300 mt-2"></div>
              {/* Left Side: Form */}
              <div>
                <form>
                  {/* Form Grid */}
                  <div className="container mx-auto max-w-4xl mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      {/* First Name */}
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="w-full md:w-[200px] max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter first name"
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label
                          htmlFor="last_name"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          className="w-full md:w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter last name"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label
                          htmlFor="company_name"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Company Name*
                        </label>
                        <input
                          type="text"
                          id="company_name"
                          className="w-full md:w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Address Section */}
                  <div className="mt-6">
                    <label
                      htmlFor="address"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your address"
                    />
                  </div>
                  {/* Additional Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* City */}
                    <div className="">
                      <label
                        for="country/region"
                        className="block text-gray-600 font-medium"
                      >
                        Country/Region*
                      </label>
                      <select
                        name="coupon_type"
                        className="w-full mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100 form-select py-2 px-3"
                        id="id_coupon_type"
                      >
                        <option value="">----Selected Country/Region---</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="Bangladesh" selected>
                          Agora
                        </option>
                        <option value="lereve">Le Reve</option>
                        <option value="agora" selected>
                          Agora
                        </option>
                        <option value="lereve">Le Reve</option>
                      </select>
                    </div>

                    {/* State */}
                    <div className="">
                      <label
                        for="states"
                        className="block text-gray-600 font-medium"
                      >
                        States*
                      </label>
                      <select
                        name="coupon_type"
                        className="w-full mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100 form-select py-2 px-3"
                        id="id_coupon_type"
                      >
                        <option value="">----Selected States----</option>
                        <option value="lereve">Le Reve</option>
                        <option value="agora" selected>
                          Agora
                        </option>
                        <option value="lereve">Le Reve</option>
                        <option value="agora" selected>
                          Agora
                        </option>
                        <option value="lereve">Le Reve</option>
                      </select>
                    </div>

                    {/* Zip Code */}
                    <div>
                      <label
                        htmlFor="zip_code"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Zip Code
                      </label>
                      <input
                        type="text"
                        id="zip_code"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter zip code"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-80">
                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className=" w-full md:w-[320px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter Your Email Address"
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          id="phone"
                          className="w-full md:w-[320px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter Your Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Change Password */}
            <div className="border border-gray-300 rounded-xl w-full md:-ml-[350px] md:w-[800px] md:max-w-[700px] p-4">
              <p className="text-3xl font-semibold">Change Password</p>
              <div className="border border-gray-300 mt-2"></div>
              {/* Left Side: Form */}
              <div>
                <form>
                  <div className="space-y-4">
                    {/* First Name */}
                    <div className="mt-8">
                      <label
                        htmlFor="Current Password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Current Password
                      </label>
                      <input
                        type="text"
                        id="Current Password"
                        name="Current Password"
                        aria-label="Current Password"
                        className="w-full md:w-[670px]  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Current Password"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* New Password */}
                      <div className="mb-4">
                        <label
                          htmlFor="New Password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          New Password
                        </label>
                        <input
                          type="text"
                          id="New Password"
                          name="New Password"
                          aria-label="Last Name"
                          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="New Password"
                        />
                      </div>
                      {/* Confirm Password */}
                      <div className="mb-4">
                        <label
                          htmlFor="text"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="text"
                          id="Confirm Password"
                          name="email"
                          aria-label="Confirm Password"
                          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSatting;
