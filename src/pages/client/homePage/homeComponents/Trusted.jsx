import React from 'react'

const Trusted = () => {
    return (
        <div className="p-4">
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 md:ml-52 mt-10">
          <div className="flex justify-center">
            <img
              className="w-60 sm:w-[300px] md:w-80"
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736569336/btrqgyebbs604ezbiixs.png"
              alt=""
            />
          </div>
          <div className="flex justify-center md:h-96 ">
            <img
              className="w-60 h-60 sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736569336/j3epcschnimzybrp89oq.png"
              alt=""
            />
          </div>
          <div className="mt-10 md:-mt-2 text-center md:text-left">
            <p className="text-2xl md:text-7xl ">
              100% Trusted <br />
              Organic Food Store
            </p>
            <p className="text-2xl md:text-3xl mt-4">
              Healthy & natural food for lovers of healthy food.
            </p>
            <p className="text-sm:text-base md:text-lg mt-4">
              Ut quis tempus erat. Phasellus euismod bibendum magna non tristique.
              Pellentesque<br />semper vestibulum elit sed condimentum. Nunc pretium
              fermentum interdum.
            </p>
            <p className="text-2xl md:text-3xl mt-4">
              Every day fresh and quality products for you.
            </p>
            <p className="text-base  md:text-lg mt-4">
              Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere
              ex.<br />Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis.
              Sed vestibulum<br />nisl sit amet sapien.
            </p>
          </div>
        </div>
        <div className="flex justify-center md:ml-[20%] ">
          <button className="text-lg sm:text-xl bg-green-600 px-6 py-4 rounded-full">
            Shop Now
          </button>
        </div>
      </div>
      
    )
}

export default Trusted
