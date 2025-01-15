import React from 'react'

const Trusted = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 m-6 items-center  md:flex-row md:gap-10 lg:m-40">
        {/* Image 1 */}
        <div>
          <img
            className="max-w-full h-auto"
            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736569336/btrqgyebbs604ezbiixs.png"
            alt="Organic Food 1"
          />
        </div>

        {/* Image 2 */}
        <div>
          <img
            className="max-w-full h-auto"
            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736569336/j3epcschnimzybrp89oq.png"
            alt="Organic Food 2"
          />
        </div>

        {/* Text Content */}
        <div className='text-center'>
          <p className="text-4xl md:text-7xl mt-6">
            100% Trusted<br />
            Organic Food Store
          </p>
          <p className="text-xl md:text-4xl my-4">
            Healthy & natural food for lovers of healthy food.
          </p>
          <p className="text-sm md:text-xl">
            Ut quis tempus erat. Phasellus euismod bibendum magna non tristique.
            Pellentesque semper<br />
            vestibulum elit sed condimentum. Nunc pretium fermentum interdum.
          </p>
          <p className="text-xl md:text-4xl my-4">
            Every day fresh and quality products for you.
          </p>
          <p className="text-sm md:text-xl">
            Maecenas vehicula a justo quis laoreet. Sed in placerat nibh,<br />
            a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis.
            Sed vestibulum nisl sit amet sapien.
          </p>
        </div>
      </div>

    </div>

  )
}

export default Trusted
