import React from 'react'


const Delivary = () => {
    return (
        <div>
            <div className="grid grid-cols-2 p-4 md:flex justify-center md:gap-36 mt-8 md:mt-16 ">
                {[
                    {
                        imgSrc:
                            "https://res.cloudinary.com/da43e0ikj/image/upload/v1736446854/lng24dm9iqjn6vyihpxf.png",
                        title: "Free Shipping",
                        description: "Free shipping with discount",
                    },
                    {
                        imgSrc:
                            "https://res.cloudinary.com/da43e0ikj/image/upload/v1736446680/to1mmpqwq7wfcffgmgbm.png",
                        title: "Great Support 24/7",
                        description: "Instant access to Contact",
                    },
                    {
                        imgSrc:
                            "https://res.cloudinary.com/da43e0ikj/image/upload/v1736446680/jde608aihlrwe15he6hp.png",
                        title: "100% Secure Payment",
                        description: "We ensure your money is safe",
                    },
                    {
                        imgSrc:
                            "https://res.cloudinary.com/da43e0ikj/image/upload/v1736446680/bn1ccczoxnhndjya3yrw.png",
                        title: "Money-Back Guarantee",
                        description: "30 days money-back",
                    },
                ].map((item, index) => (
                    <div key={index} className="text-center">
                        <img className="w-28 mx-auto " src={item.imgSrc} alt={item.title} />
                        <p className="text-sm font-bold md:text-xl mt-4 md:font-bold">{item.title}</p>
                        <p className="text-md  md:text-xl mt-2">{item.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Delivary

