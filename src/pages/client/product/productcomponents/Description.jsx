import React from 'react'

const Description = () => {
  return (
    <div>
      <div></div>
      <div className='flex justify-center gap-32 mt-20'>
        <p className='text-xl font-bold hover:text-green-400'>Descriptions</p>
        <p className='text-xl font-bold hover:text-green-400'>Additional Information</p>
        <p className='text-xl font-bold hover:text-green-400'>Customer Feedback</p>
      </div>
      <div className='border border-gray-400 my-6'></div>
      <div className='container mx-auto max-w-[1100px]'>
        <div className='grid grid-cols-2 gap-20'>
          <div>
            <p>Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisiporttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molest egestas elementum leo. Donecie tellus. Nulla facilisi Nam scelerisque. vitae. justo a convallis. Morbi urna ipsum, placerat quis commodo quis, convallis mollis enim. Aliquam id mi quam Phasellus nec fringilla elit.</p>
            <br />
            <p>Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metusfaucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctuselementum neque et pharetra. </p>
            <div className='my-10'>
              <div className='flex gap-2 my-2'>
                <img className='bg-green-400 rounded-full' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278474/dtdv6xtgxhymthlggl6q.png" alt="" /><p>100 g of fresh leaves provides.</p>
              </div>
              <div className='flex gap-2 my-2'>
                <img className='bg-green-400 rounded-full' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278474/dtdv6xtgxhymthlggl6q.png" alt="" /><p>Aliquam ac est at augue volutpat elementum.</p>
              </div>
              <div className='flex gap-2 my-2'>
                <img className='bg-green-400 rounded-full' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278474/dtdv6xtgxhymthlggl6q.png" alt="" /><p>Quisque nec enim eget sapien molestie..</p>
              </div>
              <div className='flex gap-2 my-2'>
                <img className='bg-green-400 rounded-full' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278474/dtdv6xtgxhymthlggl6q.png" alt="" /><p>Proin convallis odio volutpat finibus posuere.</p>
              </div>
              <p>Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. </p>
            </div>
          </div>
          <div>
            <img className='w-[500px]' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278540/h44ffe1mlhs9oksf6vj8.png" alt="" />
            <div className='flex gap-44 border border-gray-400 w-[500px] mt-6'>
              <div className='flex'>
                <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278538/uplpwyogowludalvrchw.png" alt="" />
                <p>64% Discount<br/>Save your 64% money with us</p>
              </div>
              <div className='flex'>
                <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1737278381/ee46kxu54l0gjqoimrbn.png" alt="" />
                <p>100% Organic<br/>100% Organic Vegetables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
