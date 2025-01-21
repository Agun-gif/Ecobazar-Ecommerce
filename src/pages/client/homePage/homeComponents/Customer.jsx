import React from 'react';

const Customer = () => {
    return (
        <div className="py-8">
            {/* Header Section */}
            <div className="text-center">
                <p className="text-2xl text-green-500">Testimonial</p>
                <p className="text-3xl md:text-5xl font-bold mt-2">
                    What Our Customer Says
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4 sm:px-8 md:px-16">
                {/* Single Testimonial */}
                {Array(3)
                    .fill()
                    .map((_, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg shadow-lg p-4 max-w-[400px] mx-auto"
                        >
                            <div>
                                <img
                                    className="w-16 h-16 rounded-full mx-auto"
                                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736618800/x0gga0jtvjpojcjoukzc.png"
                                    alt="Customer"
                                />
                            </div>
                            <div className="text-gray-600 mt-4">
                                <p className="text-center text-lg">
                                    Pellentesque eu nibh eget mauris congue mattis mattis nec
                                    tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                                    cursus velit sodales. Donec sed neque eget.
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center gap-4">
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736618799/ai1bz9qdrcqf7uzon3v1.png"
                                        alt="Robert Fox"
                                    />
                                    <p>
                                        <span className="font-bold">Robert Fox</span>
                                        <br />
                                        <span className="text-sm text-gray-500">Customer</span>
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(4)].map((_, starIndex) => (
                                        <img
                                            key={starIndex}
                                            className="w-5 h-5"
                                            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png"
                                            alt="Star"
                                        />
                                    ))}
                                    <img
                                        className="w-5 h-5"
                                        src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png"
                                        alt="Half Star"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Customer;
