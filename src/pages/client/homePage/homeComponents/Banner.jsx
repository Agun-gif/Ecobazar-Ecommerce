import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
    const slides = [
        {
            img: "https://res.cloudinary.com/da43e0ikj/image/upload/v1736443726/s4uk9j1gzefa0kpchhw9.png",
            title: "Welcome to Shopery",
            subtitle: "Fresh & Healthy Organic Food",
            discount: "Sale up to 30% OFF",
            description: "Free shipping on all your orders. We deliver, you enjoy.",
        },
        {
            img: "https://res.cloudinary.com/da43e0ikj/image/upload/v1736519548/ipbdknhtrnle3ao3thlu.png",
            title: "Welcome to Shopery",
            subtitle: "Fresh & Healthy Organic Food",
            discount: "Sale up to 30% OFF",
            description: "Free shipping on all your orders. We deliver, you enjoy.",
        },
        {
            img: "https://res.cloudinary.com/da43e0ikj/image/upload/v1736519046/t2o50k1eutzpt0iscrzx.png",
            title: "Welcome to Shopery",
            subtitle: "Fresh & Healthy Organic Food",
            discount: "Sale up to 30% OFF",
            description: "Free shipping on all your orders. We deliver, you enjoy.",
        },
    ];

    return (
        <div className="w-full">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="h-[400px] md:h-[500px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 h-full px-6 lg:px-12 py-8">
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                                <img
                                    className="w-full max-h-60 md:max-h-80 lg:max-h-[400px] object-contain"
                                    src={slide.img}
                                    alt={slide.title}
                                />
                            </div>
                            {/* Text Section */}
                            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 lg:space-y-6">
                                <p className="text-lg md:text-xl lg:text-2xl text-green-500">
                                    {slide.title}
                                </p>
                                <p className="text-2xl md:text-4xl lg:text-6xl font-bold">
                                    {slide.subtitle}
                                </p>
                                <p className="text-xl md:text-3xl lg:text-5xl text-gray-800">
                                    {slide.discount}
                                </p>
                                <p className="text-sm md:text-lg lg:text-2xl text-gray-600">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
