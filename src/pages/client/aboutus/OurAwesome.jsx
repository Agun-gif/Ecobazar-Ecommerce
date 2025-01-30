import React from "react";

function OurAwesome() {
  return (
    <div>
      <div className="container mx-auto max-w-[1000px] px-4">
        <div className="text-center p-8">
          <p className="text-3xl md:text-5xl font-bold">
            Our Awesome Team
          </p>
          <p className="text-base md:text-lg mt-4">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. <br /> Duis non diam eget est luctus
            tincidunt a a mi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
            <img
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738260801/mhx84j2ugpmcenwphk7y.png"
              alt="Jenny Willson"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Jenny Wilson</h3>
              <p className="text-gray-500 text-sm">Ceo & Founder</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
            <img
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738260801/mhx84j2ugpmcenwphk7y.png"
              alt="Jenny Willson"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Jenny Wilson</h3>
              <p className="text-gray-500 text-sm">Ceo & Founder</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
            <img
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738260801/mhx84j2ugpmcenwphk7y.png"
              alt="Jenny Willson"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Jenny Wilson</h3>
              <p className="text-gray-500 text-sm">Ceo & Founder</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
            <img
              src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738260801/mhx84j2ugpmcenwphk7y.png"
              alt="Jenny Willson"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Jenny Wilson</h3>
              <p className="text-gray-500 text-sm">Ceo & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurAwesome;
