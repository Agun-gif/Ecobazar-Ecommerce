import React from 'react'
import BreadCumb from './shopcomponents/BreadCumb'
import Banner from './shopcomponents/Banner'
import Filter from './shopcomponents/Filter'
import ProductCart from './shopcomponents/ProductCart'


const Shop = () => {
  return (
    <div>
      <BreadCumb/>
      <Banner/>
      <Filter/>
      <ProductCart/>

    </div>
  )
}

export default Shop

