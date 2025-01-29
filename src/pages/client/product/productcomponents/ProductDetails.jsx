import React from 'react'
import Banner from './Banner'
import MainDetails from './MainDetails'
import Description from './Description'
import RelativeProduct from './RelativeProduct'
import Additional from './Additional'
import CustomerFeedback from './CustomerFeedback'



const ProductDetails = () => {
  return (
    <div>
      <Banner/>
      <MainDetails/>
      <Description/>
      <RelativeProduct/>
      <Additional/>
      <CustomerFeedback/>
    </div>
  )
}

export default ProductDetails
