import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { SiPicsart } from "react-icons/si";
import { IoMdLink } from "react-icons/io";
import { MdOutlineDiscount } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageAlt } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

const SingleBlog = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-[1200px] px-4 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Blog List */}
          <div className="col-span-3 gap-6">
            <div className="w-full max-w-[700px] pt-4">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148523/lv2ea08mx1yrojnexbop.png"
                alt=""
                className="w-full"
              />
              <div className="flex items-center text-gray-500 mb-2 text-sm pt-4 flex-wrap">
                <MdOutlineDiscount className="mr-2 text-3xl" />
                <span>Food</span>
                <CgProfile className="text-3xl ml-6" />
                <span>By Admin</span>
                <BiMessageAlt className="text-3xl ml-6" />
                <span>65 Comments</span>
              </div>
              <div className="text-xl md:text-5xl">
                <p>
                  Maecenas tempor urna sed quam mollis, a placerat dui fringill
                  Suspendisse.
                </p>
              </div>
              <div className="flex justify-between py-10 flex-wrap">
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div>
                    <p>Cameron Williamson</p>
                    <p>4 April, 2021 . 6 min read</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <CiFacebook className="text-5xl" />
                  <CiTwitter className="text-5xl" />
                  <SiPicsart className="text-5xl" />
                  <CiInstagram className="text-5xl" />
                  <IoMdLink className="text-5xl" />
                </div>
              </div>
              <div className="border border-gray-300"></div>
              <div>
                <p className="text-2xl font-bold">
                  Maecenas lacinia felis nec placerat sollicitudin. Quisque
                  placerat dolor at scelerisque imperdiet.
                </p>
                <br />
                <p>
                  Maecenas elementum in risus sed condimentum. Duis convallis
                  ante ac tempus maximus. Fusce malesuada sed velit ut dictum.
                </p>
                <br />
                <p>
                  Mauris pretium elit a dui pulvinar, in ornare sapien euismod.
                  Nullam interdum nisl ante, id feugiat quam euismod commodo.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 ">
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148644/rpeexartidd67cnxbjyb.png"
                  alt=""
                  className="w-full"
                />
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/d36tjn3pe3phdji3g1ba.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="space-y-6">
                <p className="pt-4">
                  Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate
                  quis vehicula ut, vestibulum ut mauris.
                </p>
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/y2v4vbvdfo7xiyf37q2a.png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>

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
        </div>
      </div>
      {/* Comment Section */}
      <div className="max-w-[720px] mx-auto md:ml-64 p-6">
        <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
        <form action="" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
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
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="saveInfo" className="mr-2" />
            <label htmlFor="saveInfo" className="text-sm text-gray-600">
              Save my name and email in this browser for the next time I
              comment.
            </label>
          </div>

          <button
            type="submit"
            className="w-40 rounded-full bg-green-500 text-white py-2 hover:bg-green-600 transition"
          >
            Post Comments
          </button>
        </form>
      </div>

      <div>
        <p className="text-xl md:text-5xl font-bold ml-6 md:ml-[210px] py-6">Comments</p>
        <div className="space-y-4 md:ml-64">
          {/* Comment 1 */}
          <div className="flex items-start gap-4 p-4">
            <img
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <p className="font-semibold text-gray-800">Annette Black</p>
                <span>•</span>
                <p>26 Apr, 2021</p>
              </div>
              <p className="mt-2 text-gray-700 leading-relaxed">
                In a nisi commodo, porttitor ligula consequat, tincidunt dui.
                Nulla volutpat, metus eu aliquam malesuada, elit libero <br/>
                venenatis urna, consequat maximus arcu diam non diam.
              </p>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="flex items-start gap-4 p-4">
            <img
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <p className="font-semibold text-gray-800">Annette Black</p>
                <span>•</span>
                <p>26 Apr, 2021</p>
              </div>
              <p className="mt-2 text-gray-700 leading-relaxed">
                In a nisi commodo, porttitor ligula consequat, tincidunt dui.
                Nulla volutpat, metus eu aliquam malesuada, elit libero <br/>
                venenatis urna, consequat maximus arcu diam non diam.
              </p>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="flex items-start gap-4 p-4">
            <img
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <p className="font-semibold text-gray-800">Annette Black</p>
                <span>•</span>
                <p>26 Apr, 2021</p>
              </div>
              <p className="mt-2 text-gray-700 leading-relaxed">
                In a nisi commodo, porttitor ligula consequat, tincidunt dui.
                Nulla volutpat, metus eu aliquam malesuada, elit libero <br/>
                venenatis urna, consequat maximus arcu diam non diam.
              </p>
            </div>
          </div>

          {/* Comment 4 */}
          <div className="flex items-start gap-4 p-4">
            <img
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738148643/lej78fbstnqi1gqpflpy.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <p className="font-semibold text-gray-800">Annette Black</p>
                <span>•</span>
                <p>26 Apr, 2021</p>
              </div>
              <p className="mt-2 text-gray-700 leading-relaxed">
                In a nisi commodo, porttitor ligula consequat, tincidunt dui.
                Nulla volutpat, metus eu aliquam malesuada, elit libero <br/>
                venenatis urna, consequat maximus arcu diam non diam.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6 ml-10 md:ml-72">
          <button className="text-green-600 hover:text-green-800 border-2 border-green-600 hover:border-green-700 px-8 py-2 rounded-full">
            Load More
          </button>
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

export default SingleBlog;
