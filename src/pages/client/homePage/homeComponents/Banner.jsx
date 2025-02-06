import React from 'react';
import { Swiper, SwiperSlide } from 'Swiper/react';
import 'Swiper/css';
import 'Swiper/css/navigation';
import 'Swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'Swiper/modules';

const Banner = () => {
    const slides = [
        {
            img: "https://res.cloudinary.com/da43e0ikj/image/upload/v1736443726/s4uk9j1gzefa0kpchhw9.png",
            title: "Welcome to shopery",
            subtitle: "Fresh & Healthy Organic Food",
            discount: "Sale up to 30% OFF",
            description: "Free shipping on all your order. We deliver, you enjoy.",
        },
        {
            img: "https://res.cloudinary.com/da43e0ikj/image/upload/v1736519548/ipbdknhtrnle3ao3thlu.png",
            title: "Welcome to shopery",
            subtitle: "Fresh & Healthy Organic Food",
            discount: "Sale up to 30% OFF",
            description: "Free shipping on all your order. We deliver, you enjoy.",
        },
        {
            img: "https://res.cloudinary.com/da43e0ikj/image/upload/v1736519046/t2o50k1eutzpt0iscrzx.png",
            title: "Welcome to shopery",
            subtitle: "Fresh & Healthy Organic Food",
            discount: "Sale up to 30% OFF",
            description: "Free shipping on all your order. We deliver, you enjoy.",
        },
    ];

    return (
        <div>
            <Swiper
                modules={[ Pagination, Autoplay]}
                // navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="h-[500px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col-reverse lg:flex-row gap-y-8 lg:gap-x-20 bg-[#f9f9f9] h-full items-center px-5 lg:px-10  pb-16">
                            <div className="lg:w-1/2">
                                <img className="w-full max-h-96 " src={slide.img} alt={slide.title} />
                            </div>
                            <div className="lg:w-1/2 text-center lg:text-left">
                                <p className="text-2xl lg:text-4xl text-green-500">{slide.title}</p>
                                <p className="text-4xl lg:text-8xl font-bold">{slide.subtitle}</p>
                                <p className="text-2xl lg:text-6xl py-4">{slide.discount}</p>
                                <p className="text-lg lg:text-3xl py-4">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
