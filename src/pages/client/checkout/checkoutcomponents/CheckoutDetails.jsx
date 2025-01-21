import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

const CheckoutDetails = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1100px] py-8">
        <p className="text-4xl py-4">Billing Infrmation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <section>
            <form>
              <div className="border border-gray-300 w-full max-w-[700px] p-8 rounded-lg shadow-md">
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter company name"
                    />
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-80">
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
                          className="w-[236px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                          className="w-[236px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter Your Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
          {/* Payment Details Section */}
          <section>
            <div className="border border-gray-300 w-full max-w-[400px] p-6 rounded-lg shadow-md">
              {/* Items */}
              <p className="text-3xl">Order Summary</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-20">
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520265/ffhfcdn2e93axqegkfik.png"
                      alt="Product"
                      className="w-full"
                    />
                  </div>
                  <p>$14.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-20">
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520265/ffhfcdn2e93axqegkfik.png"
                      alt="Product"
                      className="w-full"
                    />
                  </div>
                  <p>$14.00</p>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-700">Subtotal:</p>
                  <p className="font-medium">$84.00</p>
                </div>
                <div className="border border-gray-100"></div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-700">Shipping:</p>
                  <p className="font-medium">Free</p>
                </div>
                <div className="border border-gray-100"></div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-medium">Total:</p>
                  <p className="font-bold">$84.00</p>
                </div>
              </div>

              <div className="w-full  py-4">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {/* <!-- Option 1: Cash on Delivery --> */}
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payment_method"
                      value="cash_on_delivery"
                      className="w-5 h-5 text-green-500 focus:ring-green-500"
                      checked
                    />
                    <span className="ml-3 text-gray-700">Cash on Delivery</span>
                  </label>
                  {/* <!-- Option 2: PayPal --> */}
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payment_method"
                      value="paypal"
                      className="w-5 h-5 text-green-500 focus:ring-green-500"
                    />
                    <span className="ml-3 text-gray-700">Paypal</span>
                  </label>
                  {/* <!-- Option 3: Amazon Pay --> */}
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payment_method"
                      value="amazon_pay"
                      className="w-5 h-5 text-green-500 focus:ring-green-500"
                    />
                    <span className="ml-3 text-gray-700">Amazon Pay</span>
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="px-4 sm:px-0">
          <div className="mt-6 sm:mt-0 border border-gray-200 rounded-lg p-4 max-w-full sm:max-w-[540px]">
            <label
              htmlFor="order_notes"
              className="block text-gray-700 font-medium mb-2"
            >
              Additional Info
            </label>
            <label
              htmlFor="order_notes"
              className="block text-gray-700 font-medium mb-2"
            >
              Order Notes (Optional)
            </label>
            <textarea
              id="order_notes"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter additional notes for your order"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="pt-20 ">
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
                  className="w-full md:w-[460px] lg:w-[500px] p-3 rounded-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Gmail Address"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 -mr-4 px-4 py-3  rounded-full md:px-8 bg-green-700 text-white text-sm font-medium hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
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

export default CheckoutDetails;
