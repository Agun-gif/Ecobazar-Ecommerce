import React from 'react';

const FutureProduct = () => {
    return (
        <div className="my-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8 md:mt-16">
                {[
                    {
                        imgSrc: "https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png",
                        title: "Green Apple",
                        price: "$14.99",
                    },
                    {
                        imgSrc: "https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png",
                        title: "Green Apple",
                        price: "$14.99",
                    },
                    {
                        imgSrc: "https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png",
                        title: "Green Apple",
                        price: "$14.99",
                    },
                    {
                        imgSrc: "https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png",
                        title: "Green Apple",
                        price: "$14.99",
                    }
                ].map((item, index) => (
                    <div key={index} className="border border-gray-200 w-full sm:w-72 md:w-72 lg:w-80 p-4 rounded-md">
                        <div className="mb-4">
                            <img className="w-full object-cover h-48 sm:h-56 md:h-64 rounded-md" src={item.imgSrc} alt={item.title} />
                            <p className="text-2xl ml-2 mt-2">{item.title}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="ml-2 text-xl font-semibold">{item.price}</p>
                            <img className="mr-2" src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530119/wwzg5bozyl06q1sop5je.png" alt="Cart" />
                        </div>
                        <div className="flex ml-2 mt-2">
                            {Array(4).fill().map((_, i) => (
                                <img key={i} className="w-5 h-5" src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/onlwzmgtfmbdjeqxjaxx.png" alt="Star" />
                            ))}
                            <img className="w-5 h-5" src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736530316/ssnia2kuqt7tvnzi10gi.png" alt="Half Star" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FutureProduct;
