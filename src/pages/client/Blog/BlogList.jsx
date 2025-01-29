import React from "react";
import { IoIosColorFilter } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageAlt } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";

const BlogListPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-[1400px] px-4 lg:px-16">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center py-6">
          <div className="flex flex-wrap items-center gap-4 lg:gap-80">
            <button className="bg-green-500 flex items-center px-4 lg:px-8 py-2 rounded-full text-white hover:bg-green-600">
              <span className="mr-2">Filter</span>
              <IoIosColorFilter className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4">
              <p className="text-sm lg:text-lg font-medium">Sort By:</p>
              <button className="flex items-center border border-gray-300 px-4 py-1 text-black">
                <span className="mr-2">Latest</span>
                <FaAngleDown className="w-5 h-5" />
              </button>
            </div>
          </div>
          <p className="text-sm lg:text-lg mt-4 lg:mt-0">52 Results Found</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="col-span-1 hidden lg:block p-4">
            <div className="mb-6">
              <form>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 rounded-lg border border-gray-300 hover:border-green-600"
                />
              </form>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Top Categories</h3>
              <ul>
                {[
                  { name: "Fresh Fruit", count: 134 },
                  { name: "Vegetables", count: 150 },
                  { name: "Cooking", count: 54 },
                  { name: "Snacks", count: 47 },
                  { name: "Beverages", count: 43 },
                  { name: "Beauty & Health", count: 38 },
                  { name: "Bread & Bakery", count: 15 },
                ].map((category, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-sm lg:text-base py-1"
                  >
                    <span>{category.name}</span>
                    <span>({category.count})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Popular Tags</h3>
              <ul className="grid grid-cols-3 gap-2">
                {[
                  "Healthy",
                  "Low fat",
                  "Vegetarian",
                  "Bread",
                  "Kid foods",
                  "Vitamins",
                  "Snacks",
                  "Tiffin",
                  "Meat",
                  "Launch",
                  "Dinner",
                ].map((tag, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm lg:text-base text-gray-700 font-medium border border-gray-300 cursor-pointer transition-all ${
                      tag === "Low fat"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xl font-bold py-4">Our Gallery</p>
              <div className="grid grid-cols-4 gap-6">
                <img
                  className="w-20 h-14"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738046205/xmwi53umbdsxamnuco28.png"
                  alt=""
                />
                <img
                  className="w-20 h-14"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738046204/z1tflyyytwddbuhn9xbf.png"
                  alt=""
                />
                <img
                  className="w-20 h-14"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738046204/uijzpsne3venu08vdmoc.png"
                  alt=""
                />
                <img
                  className="w-20 h-14"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738046204/mhtqugxtpjr1mrlvdvmd.png"
                  alt=""
                />
                <img
                  className="w-20 h-14"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738047160/x3enrck1xwolizx4zbaf.png"
                  alt=""
                />
                <img
                  className="w-20 h-14"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738046205/crasc9u4csuni4aqqeeo.png"
                  alt=""
                />
                <img
                  className="w-20 h-14"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738046205/nqqb0ljhiujtakpnhgrn.png"
                  alt=""
                />
                <img
                  className="w-20 h-14"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738046205/gs27jsqgexclx5hbwi9n.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div>
                <p className="text-xl font-bold> py-4">Recently Added</p>
                <div className="flex items-start py-3">
                  {/* Image */}
                  <img
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738140126/ew1lr2pgneb9zdcr4efv.png"
                    alt="Mango"
                    className="w-16 h-16 rounded-md object-cover"
                  />

                  {/* Text Section */}
                  <div>
                    <p className="text-gray-900 font-extralight">
                      Curabitur porttitor orci eget neque accumsan.
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <CiCalendar className="text-green-500 text-lg" />
                      <span>Apr 24, 2025</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start py-3">
                  {/* Image */}
                  <img
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738140126/ew1lr2pgneb9zdcr4efv.png"
                    alt="Mango"
                    className="w-16 h-16 rounded-md object-cover"
                  />

                  {/* Text Section */}
                  <div>
                    <p className="text-gray-900 font-extralight">
                      Curabitur porttitor orci eget neque accumsan.
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <CiCalendar className="text-green-500 text-lg" />
                      <span>Apr 24, 2025</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  {/* Image */}
                  <img
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738140126/ew1lr2pgneb9zdcr4efv.png"
                    alt="Mango"
                    className="w-16 h-16 rounded-md object-cover"
                  />

                  {/* Text Section */}
                  <div>
                    <p className="text-gray-900 font-extralight">
                      Curabitur porttitor orci eget neque accumsan.
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <CiCalendar className="text-green-500 text-lg" />
                      <span>Apr 24, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog List */}
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(12)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736616733/la4abkhefqno3iccqrkr.png"
                    alt="Blog Thumbnail"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center text-gray-500 mb-2 text-sm">
                      <MdOutlineDiscount className="mr-2 text-xl" />
                      <span>Food</span>
                      <CgProfile className="ml-4 mr-2" />
                      <span>By Admin</span>
                      <BiMessageAlt className="ml-4 mr-2" />
                      <span>65 Comments</span>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm lg:text-base">
                      Curabitur porttitor orci eget neque accumsan venenatis.
                      Nunc fermentum.
                    </p>
                    <Link to ="/SingleBlog">
                      <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 text-sm lg:text-base">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
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
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <form className="flex justify-center md:justify-end">
              <div className="relative w-full md:w-[460px] lg:w-[500px]">
                <input
                  type="search"
                  id="default-search"
                  className="w-full p-3 rounded-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
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

export default BlogListPage;
