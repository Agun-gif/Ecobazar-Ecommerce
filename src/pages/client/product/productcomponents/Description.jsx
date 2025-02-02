import React from "react";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-8 mt-10 sm:flex-row sm:justify-center sm:gap-32">
        <Link to="/Description">
          <p className="text-lg sm:text-xl font-bold hover:text-green-400">
            Descriptions
          </p>
        </Link>
        <Link to="/additional">
          <p className="text-lg sm:text-xl font-bold hover:text-green-400">
            Additional Information
          </p>
        </Link>
        <Link to="/CustomerFeedback">
          <p className="text-lg sm:text-xl font-bold hover:text-green-400">
            Customer Feedback
          </p>
        </Link>
      </div>
      <div className="border border-gray-400 my-6"></div>
      <div className="container mx-auto max-w-[1100px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            <p className="text-sm sm:text-base">
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
              posuere ac, viverra at mauris...
            </p>
            <br />
            <p className="text-sm sm:text-base">
              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
              Sed iaculis, metus faucibus elementum...
            </p>

            <div className="my-10">
              {[
                "100 g of fresh leaves provides.",
                "Aliquam ac est at augue volutpat elementum.",
                "Quisque nec enim eget sapien molestie.",
                "Proin convallis odio volutpat finibus posuere.",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-2 my-2">
                  <img
                    className="w-5 h-5 bg-green-400 rounded-full"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278474/dtdv6xtgxhymthlggl6q.png"
                    alt=""
                  />
                  <p className="text-sm sm:text-base">{text}</p>
                </div>
              ))}
              <p className="text-sm sm:text-base">
                Cras et diam maximus, accumsan sapien et, sollicitudin velit...
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              className="w-full max-w-[500px]"
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278540/h44ffe1mlhs9oksf6vj8.png"
              alt=""
            />
            <div className="flex flex-col sm:flex-row sm:justify-between border border-gray-400 w-full max-w-[500px] mt-6 p-4">
              <div className="flex gap-2 items-center">
                <img
                  className="w-8 h-8"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278538/uplpwyogowludalvrchw.png"
                  alt=""
                />
                <p className="text-xs sm:text-sm">
                  <strong>64% Discount</strong>
                  <br />
                  Save your 64% money with us
                </p>
              </div>
              <div className="flex gap-2 items-center mt-4 sm:mt-0">
                <img
                  className="w-8 h-8"
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278381/ee46kxu54l0gjqoimrbn.png"
                  alt=""
                />
                <p className="text-xs sm:text-sm">
                  <strong>100% Organic</strong>
                  <br />
                  100% Organic Vegetables
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
