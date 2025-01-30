import React from "react";

function AboutSection() {
  return (
    <div>
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mt-24">
            <p className="text-3xl md:text-7xl">
              100% Trusted <br /> Organic Food Store
            </p>
            <p className="text-lg md:text-xl mt-6">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <div>
            <img
              className="w-full md:w-[600px] md:h-[300px] mt-10"
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738224753/m9efqbdk0c6he00xyyw9.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[1400px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="relative w-full md:w-[600px] md:h-[380px] mt-20">
            <img
              className="w-full h-[430px]"
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738226452/cbhwvqfynsbaixf1x7eb.png"
              alt=""
            />
            <img
              className="w-[500px] h-[430px] absolute top-0 left-1/2 transform -translate-x-1/2 z-10 opacity-80"
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738226500/gfxmupgf2sig1ezlwd5l.png"
              alt=""
            />
          </div>
          <div className="mt-24">
            <p className="text-3xl md:text-7xl">
              100% Trusted <br /> Organic Food Store
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 space-y-6">
              {/* Cart 1 */}
              <div className="flex items-center gap-6">
                <div>
                  <img
                    className="w-16 md:w-20"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738227256/fxvctd3o7jtwlzwh35fv.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>100% Organic food</p>
                  <p>100% healthy & Fresh food.</p>
                </div>
              </div>
              {/* Cart 2 */}
              <div className="flex items-center gap-6">
                <div>
                  <img
                    className="w-16 md:w-20"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738227257/la1d5mlvjtsmarrkodvy.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Great Support 24/7</p>
                  <p>Instant access to Contact</p>
                </div>
              </div>
              {/* Cart 3 */}
              <div className="flex items-center gap-6">
                <div>
                  <img
                    className="w-16 md:w-20"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738227257/ntst47kzufmkbr8q0uas.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Customer Feedback</p>
                  <p>Our happy customer</p>
                </div>
              </div>
              {/* Cart 4 */}
              <div className="flex items-center gap-6">
                <div>
                  <img
                    className="w-16 md:w-20"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738227257/gkrswwcskmneioojtug2.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>100% Secure Payment</p>
                  <p>We ensure your money is safe</p>
                </div>
              </div>
              {/* Cart 5 */}
              <div className="flex items-center gap-6">
                <div>
                  <img
                    className="w-16 md:w-20"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738227257/mygyyye99jzu0mitklbe.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Free Shipping</p>
                  <p>Free shipping with discount</p>
                </div>
              </div>
              {/* Cart 6 */}
              <div className="flex items-center gap-6">
                <div>
                  <img
                    className="w-16 md:w-20"
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738227257/fmyrnaqw3bzzllfm8tlr.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>100% Organic food</p>
                  <p>100% healthy & Fresh food.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="mt-24">
            <p className="text-3xl md:text-7xl">
              We Delivered, You <br /> Enjoy Your Order.
            </p>
            <p className="text-lg md:text-xl mt-6">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            <div className="space-y-2 mt-4">
              <div className="flex gap-2">
                <img className="bg-green-400 rounded-full w-6" src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278381/dwojs7cjdkffsia7x9aq.png" alt="" />
                <p>Sed in metus pellentesque.</p>
              </div>
              <div className="flex gap-2">
                <img className="bg-green-400 rounded-full w-6" src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278381/dwojs7cjdkffsia7x9aq.png" alt="" />
                <p>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
              </div>
              <div className="flex gap-2">
                <img className="bg-green-400 rounded-full w-6" src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278381/dwojs7cjdkffsia7x9aq.png" alt="" />
                <p>Maecenas ut nunc fringilla erat varius.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <img
              className="w-full md:w-[600px] h-[300px] mt-10"
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738224754/labjdm54bjifmav1g5bi.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
