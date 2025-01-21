import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-20 my-6">
        <div className="border border-gray-200 w-96 p-4">
          <img
            className="w-32"
            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736794030/zqci4wac6xjfauphh7uo.png"
            alt=""
          />
          <p className="text-2xl font-bold">Our Location</p>
          <p className="text-xl">
            1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
          </p>
        </div>
        <div className="border border-gray-200 w-96 p-4">
          <img
            className="w-32"
            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736794031/kcgokscrkyqtuk5go03k.png"
            alt=""
          />
          <p className="text-2xl font-bold">Call Us 24/7</p>
          <p className="text-4xl pt-4">+880 1953698922</p>
        </div>
        <div className="border border-gray-200 w-[600px] m-4 p-4">
          <img
            className="w-32"
            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736794031/g9esesaj7k10zs2yke8y.png"
            alt=""
          />
          <p className="text-2xl font-bold m-4">Subscribe Newsletter</p>

          <form className="flex md:ml-4">
            <div className="relative w-full md:w-auto">
              <input
                type="search"
                id="default-search"
                className="w-full md:w-[460px] lg:w-[500px] p-3 rounded-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
      </div>
    </div>
  );
};

export default Contact;
