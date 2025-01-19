import React from 'react';

const Contact = () => {
  return (
    <div className="my-6">
      <div className="flex flex-wrap justify-center gap-6 md:gap-20">
        {/* Our Location */}
        <div className="border border-gray-200 w-full md:w-96 p-4">
          <img className="w-32 mx-auto" src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736794030/zqci4wac6xjfauphh7uo.png" alt="Location" />
          <p className="text-2xl font-bold text-center mt-4">Our Location</p>
          <p className="text-xl text-center">1901 Thornridge Cir. Shiloh, Washington DC 20020, United States</p>
        </div>

        {/* Call Us 24/7 */}
        <div className="border border-gray-200 w-full md:w-96 p-4">
          <img className="w-32 mx-auto" src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736794031/kcgokscrkyqtuk5go03k.png" alt="Call Us" />
          <p className="text-2xl font-bold text-center mt-4">Call Us 24/7</p>
          <p className="text-4xl text-center pt-4">+880 1953698922</p>
        </div>

        {/* Subscribe Newsletter */}
        <div className="border border-gray-200 w-full md:w-[600px] p-4">
          <img className="w-32 mx-auto" src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736794031/g9esesaj7k10zs2yke8y.png" alt="Subscribe" />
          <p className="text-2xl font-bold text-center mt-4">Subscribe Newsletter</p>

          <form className="max-w-md mx-auto mt-4">
            <div className="relative">
              <input
                type="email"
                id="newsletter-email"
                className="w-full md:w-[460px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Gmail Address"
                required
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2 bg-blue-700 text-white font-medium rounded-lg text-sm px-4 py-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
