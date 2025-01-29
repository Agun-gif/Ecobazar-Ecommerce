import React from 'react';
import { GiSelfLove } from "react-icons/gi";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { SiPicsart } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";


function CustomerFeedback() {
  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737047024/Portfolio%20Image/is7l0ij8sodgwnlgklvv.png"
          alt=""
        />
      </div>
      <div className="container mx-auto max-w-[1000px]">
        <div className="grid grid-cols-2">
          <div className="flex snap-y overflow-y-auto ">
            <div>
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/s4awds46qa5t6jdnp3fd.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/ggx3nfhhqajiix3el5lb.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/l6llsylblb3ck6xtlykp.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737276214/vexhmye74o5argvdojbv.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[400px]"
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/ffnqnmavmxhurfpf06pl.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="flex gap-4 ">
              <p className="text-6xl font-bold">Chinese Cabbage</p>
              <p className="bg-green-200 w-32 h-8 text-center text-2xl rounded-lg mt-6">
                In Stokz
              </p>
            </div>
            <div className="flex gap-1  py-6">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png"
                alt=""
              />
              <p>4 Review</p>
              <p className="ml-8">SKU: 2,51,594</p>
            </div>
            <div className="flex gap-4  py-6">
              <p className="text-gray-300 line-through">$48.00</p>
              <p>$17.28</p>
              <p className="bg-green-200 w-20  h-6 text-center">64% Off</p>
            </div>
            <div className="border border-gray-300 w-[500px]"></div>
            <div className="flex items-center">
              <div className="flex items-center">
                <p className="text-2xl">Brand :</p>
                <img
                  className="w-12"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737273099/wqwbfdqdu7jb2jlwrixt.png"
                  alt=""
                />
              </div>
              <div className="flex">
                <p className="text-2xl">Share item :</p>
                <TiSocialFacebook className="text-3xl md:text-4xl text-green-500 rounded-full" />
                <FaTwitter className="text-3xl md:text-4xl" />
                <SiPicsart className="text-3xl md:text-4xl" />
                <CiInstagram className="text-3xl md:text-4xl" />
              </div>
            </div>
            <div className=" py-6">
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos <br /> himenaeos. Nulla nibh diam, blandit
                vel consequat nec, ultrices et ipsum. Nulla
                <br /> varius magna a consequat pulvinar.{" "}
              </p>
            </div>
            <div className="border border-gray-300 w-[500px]"></div>
            <div className="flex gap-64 py-6">
              <div className="flex items-center border border-gary-400 px-2 py-0 rounded-full">
                <CiCircleMinus className="text-4xl" />
                <p className="text-4xl">5</p>
                <CiCirclePlus className="text-4xl" />
              </div>
              <div className="flex items-center">
                <button className="text-3xl bg-green-400  hover:bg-green-600 rounded-full px-8 py-2 ">
                  Add To Cart
                </button>
                <GiSelfLove className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600 hover:text-green-600 cursor-pointer ml-10" />
              </div>
            </div>
            <div className="border border-gray-300 w-[500px]"></div>
            <div>
              <p className="text-xl">Category : Vegetables</p>
              <div className="flex gap-2">
                <p className="text-xl">Tag : Vegetables Healthy</p>
                <p className="text-xl">Chinise : Cabbage Green Cabbage</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-center gap-32 mt-20">
        <Link to="/description">
          <p className="text-xl font-bold hover:text-green-400">Descriptions</p>
        </Link>
        <Link to="/additional">
          <p className="text-xl font-bold hover:text-green-400">
            Additional Information
          </p>
        </Link>
        <Link to="/Customer">
          <p className="text-xl font-bold hover:text-green-400">
            Customer Feedback
          </p>
        </Link>
      </div>
      <div className="border border-gray-400 my-6"></div>
      <div className="container mx-auto max-w-[1100px]">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <p>
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
              posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
              vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet
              nisiporttitor vel. Etiam tincidunt metus vel dui interdum
              sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam
              mollis lacus. Sed et condimentum arcu, id molest egestas elementum
              leo. Donecie tellus. Nulla facilisi Nam scelerisque. vitae. justo
              a convallis. Morbi urna ipsum, placerat quis commodo quis,
              convallis mollis enim. Aliquam id mi quam Phasellus nec fringilla
              elit.
            </p>
            <br />
            <p>
              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
              Sed iaculis, metusfaucibus elementum tincidunt, turpis mi viverra
              velit, pellentesque tristique neque mi eget nulla. Proin
              luctuselementum neque et pharetra.{" "}
            </p>
            <div className="my-10">
              <div className="flex gap-2 my-2">
                <img
                  className="bg-green-400 rounded-full"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278474/dtdv6xtgxhymthlggl6q.png"
                  alt=""
                />
                <p>100 g of fresh leaves provides.</p>
              </div>
              <div className="flex gap-2 my-2">
                <img
                  className="bg-green-400 rounded-full"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278474/dtdv6xtgxhymthlggl6q.png"
                  alt=""
                />
                <p>Aliquam ac est at augue volutpat elementum.</p>
              </div>
              <div className="flex gap-2 my-2">
                <img
                  className="bg-green-400 rounded-full"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278474/dtdv6xtgxhymthlggl6q.png"
                  alt=""
                />
                <p>Quisque nec enim eget sapien molestie..</p>
              </div>
              <div className="flex gap-2 my-2">
                <img
                  className="bg-green-400 rounded-full"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278474/dtdv6xtgxhymthlggl6q.png"
                  alt=""
                />
                <p>Proin convallis odio volutpat finibus posuere.</p>
              </div>
              <p>
                Cras et diam maximus, accumsan sapien et, sollicitudin velit.
                Nulla blandit eros non turpis lobortis iaculis at ut massa.{" "}
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-[500px]"
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278540/h44ffe1mlhs9oksf6vj8.png"
              alt=""
            />
            <div className="flex gap-44 border border-gray-400 w-[500px] mt-6">
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278538/uplpwyogowludalvrchw.png"
                  alt=""
                />
                <p>
                  64% Discount
                  <br />
                  Save your 64% money with us
                </p>
              </div>
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278381/ee46kxu54l0gjqoimrbn.png"
                  alt=""
                />
                <p>
                  100% Organic
                  <br />
                  100% Organic Vegetables
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-4xl pl-[40%] py-4 ">Best Seller Products</p>
      </div>
      <div className="container mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          <div className="border border-gray-200 w-72">
            <div>
              <img
                className="w-80"
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png"
                alt=""
              />
              <p className="text-2xl ml-2">Green Apple</p>
            </div>
            <div className="flex justify-between">
              <p className="ml-2">$14.99</p>
              <img
                className="mr-2"
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530119/wwzg5bozyl06q1sop5je.png"
                alt=""
              />
            </div>
            <div className="flex ml-2 ">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png"
                alt=""
              />
            </div>
          </div>
          <div className="border border-gray-200 w-72">
            <div>
              <img
                className="w-80"
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png"
                alt=""
              />
              <p className="text-2xl ml-2">Green Apple</p>
            </div>
            <div className="flex justify-between">
              <p className="ml-2">$14.99</p>
              <img
                className="mr-2"
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530119/wwzg5bozyl06q1sop5je.png"
                alt=""
              />
            </div>
            <div className="flex ml-2 ">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png"
                alt=""
              />
            </div>
          </div>
          <div className="border border-gray-200 w-72">
            <div>
              <img
                className="w-80"
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png"
                alt=""
              />
              <p className="text-2xl ml-2">Green Apple</p>
            </div>
            <div className="flex justify-between">
              <p className="ml-2">$14.99</p>
              <img
                className="mr-2"
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530119/wwzg5bozyl06q1sop5je.png"
                alt=""
              />
            </div>
            <div className="flex ml-2 ">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png"
                alt=""
              />
            </div>
          </div>
          <div className="border border-gray-200 w-72">
            <div>
              <img
                className="w-80"
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png"
                alt=""
              />
              <p className="text-2xl ml-2">Green Apple</p>
            </div>
            <div className="flex justify-between">
              <p className="ml-2">$14.99</p>
              <img
                className="mr-2"
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530119/wwzg5bozyl06q1sop5je.png"
                alt=""
              />
            </div>
            <div className="flex ml-2 ">
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png"
                alt=""
              />
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
                  className="w-full md:w-[460px] lg:w-[500px] p-3 rounded-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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

export default CustomerFeedback;
