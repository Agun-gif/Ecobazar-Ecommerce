import React from 'react';

const Rating = () => {
    return (
        <div className="relative flex justify-center w-full">
            {/* Background Image */}
            <img
                className="w-full object-cover"
                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736576188/zk6w1zrglnhbbbduzptz.png"
                alt="Background showcasing the rating section"
            />

            {/* Content Overlay */}
            <div className="absolute top-4 pl-32  md:top-1/4 left-1/2 transform -translate-x-1/2 grid grid-cols-4 md:flex-row  md:justify-between gap-6 md:gap-10 px-4 md:ml-40 w-[90%] ">
                {/* Individual Cards */}
                {[
                    { value: "37+", label: "Years of Hard Work" },
                    { value: "500k+", label: "Happy Customers" },
                    { value: "28", label: "Qualified Team Members" },
                    { value: "750k+", label: "Monthly Orders" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="hover:border border-gray-500 px-4 py-2 rounded-lg"

                    >
                        <p className=" text-xl md:text-7xl  text-green-700 font-bold">
                            {item.value}
                        </p>
                        <p className="text-sm  md:text-3xl text-white ">
                            {item.label}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rating;
